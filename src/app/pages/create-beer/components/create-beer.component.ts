import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

import { IBeerAdd } from 'src/app/interfaces/beerInterface';

@Component({
  selector: 'app-create-beer',
  templateUrl: './create-beer.component.html',
  styleUrls: ['./create-beer.component.css']
})
export class CreateBeerComponent {
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

}
