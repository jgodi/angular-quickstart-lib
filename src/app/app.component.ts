import { Component } from '@angular/core';
import { LibService } from '../platform';

@Component({
  selector: 'quickstart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  meaning: number;
  constructor(libService: LibService) {
    this.meaning = libService.getMeaning();
  }
}
