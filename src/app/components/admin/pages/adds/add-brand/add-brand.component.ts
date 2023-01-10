import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent  implements OnInit{

  addFormGroup:FormGroup
  constructor(
    private brandService:BrandService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ){}

  ngOnInit(): void {
      
  }

  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      brandName: ["", Validators.required]
    })
  }

  add() {
    if (this.addFormGroup.valid) {
      let brand: Brand = Object.assign({}, this.addFormGroup.value)
      this.brandService.add(brand).subscribe(response=>{
        this.toastrService.success(response.message)
      }, errorResponse=>{
        this.toastrService.error(errorResponse.error.message)
      })
    }
    else this.toastrService.error("Form eksik")
  }
}
