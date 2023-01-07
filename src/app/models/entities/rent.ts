export interface Rent{
    id:number;
    customerId:number;
    carId:number;
    rentDate:Date;
    returnDate?:Date;
}