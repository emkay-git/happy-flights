import { Pipe, PipeTransform } from '@angular/core';
import { Flights } from '../interfaces/flightDetails';


/**
 * Shows refined flight results based on the price.
 * Takes price limit as arguement.
 */
@Pipe({ name: 'refineSearch' })
export class RefineByPrice implements PipeTransform {
    transform(value: Flights[], price: string) {
        if (price == null)
            price = "10000"
        let newValues: Flights[] = [];
        if (value != null) {
            for (let entry of value) {

                if (entry.amount.valueOf() < price.valueOf())
                    newValues.push(entry);
            }
            return newValues;
        }
    }
}