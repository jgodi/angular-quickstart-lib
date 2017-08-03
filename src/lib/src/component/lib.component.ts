import { Component } from '@angular/core';

@Component({
  selector: 'my-lib',
  templateUrl: './lib.component.html'
})
export class LibComponent {
  name = 'Angular Library';
  constructor() {
    console.log('HI');
  }
}
