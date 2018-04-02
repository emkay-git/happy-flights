export interface BookingDetails {
    departureCity: string;
    arrivalCity: string;
    departDate: string;
    returnDate?: string;
    passengersCount: number;
    oneWay: boolean;
    refine?: number;
};