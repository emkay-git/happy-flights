import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Flights } from '../interfaces/flightDetails'
import { BookingDetails } from '../interfaces/bookingDetails';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
  const apiUrl = `./assets/json-data/data.json`;
@Injectable()
export class SearchService {
  public originCities: string[];
  public destinationCities: string[];
  public flightDetails: Flights[];
  public details: BookingDetails; 
  public oneWayFlights: Flights[];
  public twoWayFlights: Flights[];
  private errorMessage:any = '';
  public dataFound: boolean = false;
  constructor(private http: Http) { }

  public citiesList(){
    this.getData()
            .then(
                flightDetails => {this.flightDetails = flightDetails,
                this.getCitiesList(this.flightDetails)},
                error => { this.errorMessage = <any>error,
                console.log("Error in fetching details",this.errorMessage)}
                );

  }

    public getCitiesList(flightData: any){
    const allOriginCities: string[] = [];
    const allDestnCities: string[] = [];
    flightData.flights.map(x => {
      allOriginCities.push(x.departureCity);
      allDestnCities.push(x.arrivalCity);
    });

    this.originCities = allOriginCities.filter((x, index, originalArr) => {
      return index === originalArr.indexOf(x);
    });
    this.destinationCities = allDestnCities.filter((x, index, originalArr) => {
      return index === originalArr.indexOf(x);
    });
  }

   public getData (): Promise<Flights[]> {
        return this.http.get(apiUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
    }

   public searchFlight(searchParams: BookingDetails): Flights[] {
     return this.getMatchingFlights(this.flightDetails, searchParams);
}

  private getMatchingFlights(sortedFlightData: any, searchParams: BookingDetails): Flights[] {
    const filteredItmes: Flights[] = [];
    this.dataFound = false;
    sortedFlightData.flights.map((x) => {
      if (Date.parse(x.date.split(' ')[0]) === Date.parse(searchParams.departDate) && x.departureCity === searchParams.departureCity
        && x.arrivalCity === searchParams.arrivalCity) {
        this.dataFound = true;
        filteredItmes.push(x);
      }
    });
    return filteredItmes;
  }
}
