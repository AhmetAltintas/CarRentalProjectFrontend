import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { Payment } from 'src/app/models/payment';
import { Rent } from 'src/app/models/rent';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  car: CarDetailDto;
  carImages: CarImage[] = [];
  cardOwner:string = "";
  cardNumber:string = "";
  expiryMonthAndYear:string = "";
  cvv:string = "";
  datesDiff:number;
  total:any;
  rentDate:string;
  returnDate:string;
  carDataUpdated = false;
  carImagesUpdated = false;
  currentCarId:number;
  currentCustomerId:number;
  
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImagesService:CarImageService,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private rentService:RentService,
    private router:Router
    ) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if (params["carId"]) {
          this.datesDiff = Number(params["datesDiff"]);
          this.currentCarId = Number(params["carId"]);
          this.rentDate = params["rentDate"];
          this.returnDate = params["returnDate"];
        }
      })
  }

  addRent(){
    let rent:Rent = Object.assign({});
    rent.customerId = this.currentCustomerId;
    rent.carId = this.currentCarId;
    rent.rentDate = new Date(this.rentDate);
    rent.returnDate = new Date(this.returnDate);

    this.rentService.addRent(rent).subscribe(response=> {
      this.toastrService.success(response.message);
    });
  }

  pay(){
    if (this.expiryMonthAndYear && this.cardNumber && this.cardOwner && this.cvv) {
      let payment: Payment = Object.assign({});
      
      let expiryies = this.expiryMonthAndYear.split("/");
      let replaceCardNumber = this.cardNumber.split(' ').join('');
      payment.fullName = this.cardOwner;
      payment.cardNumber = replaceCardNumber;
      payment.expiryMonth = Number(expiryies[0]);
      payment.expiryYear = Number(expiryies[1]);
      payment.cvv = this.cvv;

      this.paymentService.pay(payment).subscribe(response=>{
        this.toastrService.success(response.message);
        this.addRent();
        setTimeout(() =>
        {
          this.router.navigate(['/']);
        },
        1000);
      }, responseError => {
        this.toastrService.error(responseError.error.message);
      });
    }else{
      this.toastrService.error("Lütfen boş alan bırakmayınız!")
    }
  }

 

  

}
