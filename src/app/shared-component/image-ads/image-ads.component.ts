import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-ads',
  templateUrl: './image-ads.component.html',
  styleUrls: ['./image-ads.component.css']
})
export class ImageAdsComponent implements OnInit {

  constructor() { }
  showImage = ['none', 'block', 'none']
  slidShow: any;
  i: number = 0;
  ngOnInit() {
    this.slidShow = setInterval(() => {
      this.moveSlides();
    }, 2000);
  }
  moveSlides() {
    this.showImage[this.i % 3] = 'block';
    this.showImage[(this.i + 1) % 3] = 'none';
    this.showImage[(this.i + 2) % 3] = 'none';
    this.i += 1;
  }
}
