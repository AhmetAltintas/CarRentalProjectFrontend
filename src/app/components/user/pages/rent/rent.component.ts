import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RentKey } from 'src/app/models/constants/local-storage-keys';
import { Customer } from 'src/app/models/entities/customer';
import { Rent } from 'src/app/models/entities/rent';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentService } from 'src/app/services/rent.service';
import { RouterService } from 'src/app/services/router.service';


@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  
  addFormGroup: FormGroup
  currentCarId: number
  currentCustomer:Customer
  
  constructor(
    private localStorageService:LocalStorageService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private routerService:RouterService,
    private rentService:RentService,
    private toastrService:ToastrService,
    private customerService:CustomerService
  ) {}

  ngOnInit(): void {
    this.getCurrentCustomer()
    this.createAddFormGroup()

    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) this.currentCarId = Number(params["carId"])
    })
  }

  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      rentDate: ["", Validators.required],
      returnDate: [undefined]
    })
  }

  rentInfoSave(){
    if (this.addFormGroup.valid) {
      let rent: Rent = Object.assign({}, this.addFormGroup.value)
      rent.carId = this.currentCarId
      rent.customerId = this.currentCustomer.id
      rent.returnDate = rent.returnDate?rent.returnDate:undefined

      this.rentService.checkRulesForAdding(rent).subscribe(response=>{
        this.localStorageService.save(RentKey, rent)
        this.routerService.paymentPage()
      }, errorResponse=>{
        this.toastrService.error(errorResponse.error)
      })
    }
    else this.toastrService.error("Form eksik")
  }

  getCurrentCustomer(){
    this.customerService.getCurrentCustomer().subscribe(response=>{
      this.currentCustomer = response.data
    })
  }

}
