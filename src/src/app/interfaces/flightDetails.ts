export interface Flights {
	flightNo: string,
	departureCity: string,
	arrivalCity: string,
	time: {
		depart: string,
		arrive: string
	},
	date: string,
	amount: string
}