import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { BookingDetails } from '../../interfaces/bookingDetails';
@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.css']
})
export class SearchTabComponent implements OnInit {
  public invalidForm: boolean = false;
  public isSubmitted: boolean = false;

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this._searchService.citiesList();
    this._searchService.details =   {
      departureCity: 'select', arrivalCity: 'select', departDate: '', returnDate: '', oneWay: true, passengersCount: 1
    }
  }


  public tripType(){
    this._searchService.details.oneWay= !this._searchService.details.oneWay;
  }
    
  public onSubmit(formInputs): void {
    console.log(formInputs);
      if (formInputs.form.valid) {
      this.invalidForm = false;
      this.isSubmitted = true;
      this.performSearch();
    }
    else
      this.invalidForm = true;

    console.log(this._searchService.details);
    this._searchService.searchFlight(this._searchService.details);
  }

  public performSearch(): void {
    if (this._searchService.details.oneWay) 
      this._searchService.oneWayFlights = this._searchService.searchFlight(this._searchService.details);

    else {
    this._searchService.oneWayFlights = this._searchService.searchFlight(this._searchService.details);
    let twoWayDetails :  BookingDetails = {
      departureCity: this._searchService.details.arrivalCity, 
      arrivalCity: this._searchService.details.departureCity, 
      departDate: this._searchService.details.returnDate,
      returnDate: '', 
      oneWay: false, passengersCount: this._searchService.details.passengersCount
    }
    this._searchService.twoWayFlights = this._searchService.searchFlight(twoWayDetails);
    }
  }

}
