import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IBeer, payloadStatus } from 'src/app/interfaces/beerInterface';

import HttpService from 'src/app/services/HttpService';
import { BeersAction } from 'src/app/store/beers.actions';

@Component({
  selector: 'app-create-beer',
  templateUrl: './create-beer.component.html',
  styleUrls: ['./create-beer.component.css']
})
export class CreateBeerComponent {
  // HTTP CLIENT INJECTION
  constructor(private readonly _store: Store) { }

  validator: string = '';
  beerInfo: IBeer = {
    id: null,
    name: '',
    tagline: '',
    firstBrewed: '',
    description: '',
    image_url: '',
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
  _img_url = new FormControl('');
  _foodPairingOne = new FormControl('');
  _foodPairingTwo = new FormControl('');
  _foodPairingThree = new FormControl('');
  _brewerTips = new FormControl('');
  _contributor = new FormControl('');

  ////////////////////////////////////////////////////////////////
  saveInfo(): string {
    this.beerInfo.name = this._name.value;
    this.beerInfo.tagline = this._tagline.value;
    this.beerInfo.firstBrewed = this._firstBrewed.value;
    this.beerInfo.description = this._description.value;
    this.beerInfo.image_url = this._img_url.value;
    this.beerInfo.foodPairingOne = this._foodPairingOne.value;
    this.beerInfo.foodPairingTwo = this._foodPairingTwo.value;
    this.beerInfo.foodPairingThree = this._foodPairingThree.value;
    this.beerInfo.brewerTips = this._brewerTips.value;
    this.beerInfo.contributor = this._contributor.value;
    return this.checkData(this.beerInfo);
  }

  checkData(data: IBeer): string {
    if (
      !!data.name &&
      !!data.tagline &&
      !!data.firstBrewed &&
      !!data.description &&
      !!data.image_url &&
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
          this.createBeer(data);
          return "Beer created";
        }
      } else {
        return "Invalid date";
      }
    } else {
      return "Please fill all the fields";
    }
  }

  createBeer(data: IBeer) {
    this._store.dispatch(BeersAction.addBeer({ data: data }));
  }
}

export default CreateBeerComponent
