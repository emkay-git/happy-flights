import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  refinedPrice: string = "10000";
  title = 'app';

  setRefinedPrice(event) {
    this.refinedPrice = event;
  }
}
