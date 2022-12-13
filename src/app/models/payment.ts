export interface Payment{
    cardNumber:Number;
    expiry:Date;
    ownerFullName:String;
    cvv:number;

    totalAmount:number;
}