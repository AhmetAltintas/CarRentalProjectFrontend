import { Component, Input, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-operation',
  templateUrl: './rent-operation.component.html',
  styleUrls: ['./rent-operation.component.css'],
})
export class RentOperationComponent implements OnInit {
  dataLoaded = false;

  @Input() carId: number;
  @Input() dailyPrice: number;
  customerId: number = 1;
  rentDate: Date;
  returnDate: Date;

  addRentForm: FormGroup;
  constructor(
    private rentService: RentService,
    private formBuilder: FormBuilder,
    private toastrService:ToastrService,
  ) {}

  ngOnInit(): void {
    this.createAddRentForm();
    this.calculateDiff();
  }

  createAddRentForm(){
    this.addRentForm = this.formBuilder.group({
      customerId:["",Validators.required],
      carId:["",Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required]
    })
  }
  
  addRent() {
    if(this.addRentForm.valid){
      let rentModel =Object.assign({}, this.addRentForm.value) 
      this.rentService.addRent(rentModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.ValidationErrors!=null){
          console.log(responseError.error.ValidationErrors)
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Doğrulama hatası")
          }
        }
        else if (responseError.error.success==false) {
          this.toastrService.error(responseError.error.message,"Doğrulama hatası")
        }
      })
    }else{
      this.toastrService.error("Formunuz hatalı")
    }
  }

  calculateDiff() {
    let rentDate = this.rentDate;
    let returnDate = this.returnDate;
    return Math.floor((Date.UTC(returnDate.getFullYear(), returnDate.getMonth(), returnDate.getDate()) - Date.UTC(rentDate.getFullYear(), rentDate.getMonth(), rentDate.getDate()) ) /(1000 * 60 * 60 * 24));
  }
}
