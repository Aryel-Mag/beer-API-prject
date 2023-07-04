import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private readonly _route: Router) { }
  onLogoClicked(): void {
    this._route.navigate(['/']);
  }


}
