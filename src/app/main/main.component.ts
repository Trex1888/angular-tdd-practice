import { Component } from '@angular/core';
import { Main } from 'src/models/main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  list: Main[] = [
    {
      name: 'Lions',
    },
    {
      name: 'Tigers',
    },
    {
      name: 'Bears',
    },
    {
      name: 'Geese',
    },
    {
      name: 'Deer',
    },
  ];

  headerVisible = true;
  listVisible = true;

  hideHeader() {
    this.headerVisible = !this.headerVisible;
  }

  hideList() {
    this.listVisible = !this.listVisible;
  }
}
