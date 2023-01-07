import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/entities/brand';
import { Color } from 'src/app/models/entities/color';
import { Car } from 'src/app/models/entities/dtos/car';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentCarFromParent: Car

  brands: Brand[]
  colors: Color[]

  updateFormGroup: FormGroup
  constructor(
    private carService:CarService,
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastrService:ToastrService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Güncelle"
  }

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
    this.createUpdateFormGroup()
  }

  createUpdateFormGroup(){
    this.updateFormGroup = this.formBuilder.group({
      brandId: [this.currentCarFromParent.brandId, Validators.required],
      colorId: [this.currentCarFromParent.colorId, Validators.required],
      modelName: [this.currentCarFromParent.modelName, Validators.required],
      modelYear: [this.currentCarFromParent.modelYear, Validators.required],
      dailyPrice: [ this.currentCarFromParent.dailyPrice, Validators.required],
      minFindeksScore: [this.currentCarFromParent.minFindeksScore, Validators.required],
      description: [this.currentCarFromParent.description, Validators.required]
    })
  }

  update(){
    if (this.updateFormGroup.valid) {
      let car: Car = Object.assign({ id : this.currentCarFromParent.id}, this.updateFormGroup.value)
      this.carService.update(car).subscribe(response=>{
        this.toastrService.success(response.message)
      }, responseError=>{
        this.toastrService.error(responseError.error.message)
      })
    }else this.toastrService.error("Form eksik")
  }

  getBrands(){
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getAll().subscribe(response=>{
      this.colors = response.data
    })
  }
}
