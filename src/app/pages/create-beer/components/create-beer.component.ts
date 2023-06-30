import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

import { IBeerAdd } from 'src/app/interfaces/beerInterface';

import HttpService from 'src/app/services/HttpService';

@Component({
  selector: 'app-create-beer',
  templateUrl: './create-beer.component.html',
  styleUrls: ['./create-beer.component.css']
})
export class CreateBeerComponent {
  // HTTP CLIENT INJECTION
  constructor(private readonly _http: HttpService) { }

  validator: string = '';
  beerInfo: IBeerAdd = {
    name: '',
    tagline: '',
    firstBrewed: '',
    description: '',
    imageUrl: '',
    foodPairingOne: '',
    foodPairingTwo: '',
    foodPairingThree: '',
    brewerTips: '',
    contributor: ''
  };

  // LINKING THE FORM INPUTS TO THE MODEL
  _name = new FormControl('');
  _tagline = new FormControl('');
  _firstBrewed = new FormControl('');
  _description = new FormControl('');
  _imageUrl = new FormControl('');
  _foodPairingOne = new FormControl('');
  _foodPairingTwo = new FormControl('');
  _foodPairingThree = new FormControl('');
  _brewerTips = new FormControl('');
  _contributor = new FormControl('');

  // // inject all the dependencies for add beer form
  // constructor(
  //   _name: FormControl,
  //   _tagline: FormControl,
  //   _firstBrewed: FormControl,
  //   _description: FormControl,
  //   _imageUrl: FormControl,
  //   _foodPairingOne: FormControl,
  //   _foodPairingTwo: FormControl,
  //   _foodPairingThree: FormControl,
  //   _brewerTips: FormControl,
  //   _contributor: FormControl
  // ) { }

  ////////////////////////////////////////////////////////////////
  saveInfo(): string {
    this.beerInfo.name = this._name.value;
    this.beerInfo.tagline = this._tagline.value;
    this.beerInfo.firstBrewed = this._firstBrewed.value;
    this.beerInfo.description = this._description.value;
    this.beerInfo.imageUrl = this._imageUrl.value;
    this.beerInfo.foodPairingOne = this._foodPairingOne.value;
    this.beerInfo.foodPairingTwo = this._foodPairingTwo.value;
    this.beerInfo.foodPairingThree = this._foodPairingThree.value;
    this.beerInfo.brewerTips = this._brewerTips.value;
    this.beerInfo.contributor = this._contributor.value;
    return this.checkData(this.beerInfo);
  }

  checkData(data: IBeerAdd): string {
    if (
      !!data.name &&
      !!data.tagline &&
      !!data.firstBrewed &&
      !!data.description &&
      !!data.imageUrl &&
      !!data.foodPairingOne &&
      !!data.foodPairingTwo &&
      !!data.foodPairingThree &&
      !!data.brewerTips &&
      !!data.contributor
    ) {
      // CHECKS IF THE INSERTED DATE IS CORRECT
      let today = new Date();
      let tempTable: string[] = data.firstBrewed.split("/");
      let months: number = parseInt(tempTable[0]);
      let years: number = parseInt(tempTable[1]);

      if (Number.isInteger(months) && Number.isInteger(years)) {
        if (months < 1 || months > 12 || years < 1900 || years > today.getFullYear()) {
          return "Invalid date";
        } else {
          return this.createBeer(data);
        }
      } else {
        return "Invalid date";
      }
    } else {
      return "Please fill all the fields";
    }
  }

  createBeer(data: IBeerAdd): string {
    return this._http.postBeer(data);
  }
}

export default CreateBeerComponent
