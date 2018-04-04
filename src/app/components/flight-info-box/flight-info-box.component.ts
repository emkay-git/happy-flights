import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-flight-info-box',
  templateUrl: './flight-info-box.component.html',
  styleUrls: ['./flight-info-box.component.css']
})
export class FlightInfoBoxComponent implements OnInit {

  constructor(public _searchService: SearchService) { }

  ngOnInit() {
  }

}
