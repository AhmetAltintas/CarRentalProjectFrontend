import { Component, Input, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rent-operation',
  templateUrl: './rent-operation.component.html',
  styleUrls: ['./rent-operation.component.css'],
})
export class RentOperationComponent implements OnInit {
  dataLoaded = false;

  @Input() carId: number;
  customerId: number = 1;
  rentDate: Date;
  returnDate: Date;

  addRentForm: FormGroup;
  constructor(
    private rentService: RentService,
    private formBuilder: FormBuilder,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.createAddRentForm();
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
        if(responseError.error.ValidationErrors.length>0){
          console.log(responseError.error.ValidationErrors)
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Doğrulama hatası")
          }
        }
      })
    }else{
      this.toastrService.error("Formunuz hatalı")
    }
  }
}
