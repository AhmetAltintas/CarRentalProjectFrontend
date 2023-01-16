import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RentKey } from 'src/app/models/constants/local-storage-keys';
import { FormIsMissing, SaveYourCreditCard } from 'src/app/models/constants/messages';
import { Payment } from 'src/app/models/entities/payment';
import { Rent } from 'src/app/models/entities/rent';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  payFormGroup: FormGroup;
  constructor(
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private rentService:RentService,
    private formBuilder:FormBuilder,
    private localStorageService:LocalStorageService
    ) {}

  ngOnInit(): void {
    this.createPayFormGroup();
  }

  createPayFormGroup(){
    this.payFormGroup = this.formBuilder.group({
      fullName: ["", Validators.required],
      cardNumber: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvv: ['', Validators.required]
    })
  }

  pay(){
    if (this.payFormGroup.valid) {
      let rent: Rent = this.localStorageService.get(RentKey)
      let payment: Payment = Object.assign({
        customerId: rent.customerId
      }, this.payFormGroup.value);

      this.askForSave(payment);
      this.rentService.payAndRent(payment, rent)
    }else this.toastrService.error(FormIsMissing)
  }

  askForSave(payment:Payment){
    this.paymentService.checkIfThisCardIsAlreadySavedForThisCustomer(payment).subscribe(response=>{
      if (confirm(SaveYourCreditCard)) this.paymentService.add(payment)
    })
  }
}
