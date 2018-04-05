import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-display-container',
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.css']
})
export class DisplayContainerComponent implements OnInit {

  @Input() refinedPrice: number = 10000;
  showLoader: boolean = true;
  constructor(public _searchService: SearchService) { 
  }

  ngOnInit() {
    setTimeout(()=>{
      this.showLoader = false;
    },2000);
  }

}
