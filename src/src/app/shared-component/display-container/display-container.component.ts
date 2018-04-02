import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-display-container',
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.css']
})
export class DisplayContainerComponent implements OnInit {

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
  }

}
