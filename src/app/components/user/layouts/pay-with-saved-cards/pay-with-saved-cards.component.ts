import { Component, OnInit } from '@angular/core';
import { RentKey } from 'src/app/models/constants/local-storage-keys';
import { Payment } from 'src/app/models/entities/payment';
import { Rent } from 'src/app/models/entities/rent';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-pay-with-saved-cards',
  templateUrl: './pay-with-saved-cards.component.html',
  styleUrls: ['./pay-with-saved-cards.component.css']
})
export class PayWithSavedCardsComponent implements OnInit{

  payments:Payment[];
  currentRent:Rent
  constructor(
    private paymentService:PaymentService,
    private rentService:RentService,
    private localStorageService:LocalStorageService
  ){}

  ngOnInit(): void {
    this.getCurrentRent()
    this.getAllByCustomerId()
  }

  payWithSavedCard(payment:Payment){
   this.rentService.payAndRent(payment,this.currentRent)
  }

  getAllByCustomerId(){
    this.paymentService.getAllByCustomerId(this.currentRent.customerId).subscribe(response=>{
      this.payments = response.data
    })
  }

  getCurrentRent(){
    let currentRent = this.localStorageService.getWithType<Rent>(RentKey)
    if (currentRent  !== null){
      this.currentRent = currentRent
    }
  }
}
