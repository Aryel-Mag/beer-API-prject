import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  fullName = new FormControl('');
  eMail = new FormControl('');
  message = new FormControl('');

  fName:string| null = '';
  mail:string| null = '';
  msg:string| null = '';
  validation:string|null='';

  stockData(){
    this.fName = this.fullName.value;
    this.mail = this.eMail.value;
    this.msg = this.message.value;

    this.fullName.setValue('');
    this.eMail.setValue('');
    this.message.setValue('');

    this.validation = 'The information and message below was successfully sent:'
  }
}
