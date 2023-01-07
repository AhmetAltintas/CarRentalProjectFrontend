import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/entities/payment';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';
import { UserChildComponentBaseComponent } from '../../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-delete-payment',
  templateUrl: './delete-payment.component.html',
  styleUrls: ['./delete-payment.component.css']
})
export class DeletePaymentComponent extends UserChildComponentBaseComponent implements OnInit{
  @Input() currentPaymentFromParent:Payment

  constructor(
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Sil"
  }
  ngOnInit(): void {
      
  }

  delete(){
    this.paymentService.delete(this.currentPaymentFromParent).subscribe(response=>{
      this.toastrService.success(response.message)
    },responseError=>{
      this.toastrService.error(responseError.error.message)
    })
  }
}
