import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<ws-header></ws-header><router-outlet></router-outlet>',
})
export class AppComponent  { 
	name = ''; 
}
