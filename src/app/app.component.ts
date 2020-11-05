import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@900&display=swap" rel="stylesheet"> <app-nav></app-nav><router-outlet></router-outlet><app-footer></app-footer>'
})
export class AppComponent {
  title = 'ecotraj';
}
