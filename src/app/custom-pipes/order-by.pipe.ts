import { Pipe, PipeTransform } from '@angular/core';
import { Flights } from '../interfaces/flightDetails'
@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(value: Flights[], args?: any): any {
       
       if (value !== undefined) {    
          value.sort((a: any, b: any) => {
            return a.amount.valueOf() - b.amount.valueOf();
          });
       }    
      return value;
  }

}
