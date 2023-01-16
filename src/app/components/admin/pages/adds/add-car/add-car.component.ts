import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/entities/brand';
import { Color } from 'src/app/models/entities/color';
import { Car } from 'src/app/models/entities/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { FormIsMissing } from 'src/app/models/constants/messages';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  brands: Brand[];
  colors: Color[];

  addFormGroup: FormGroup;
  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
    this.createAddFormGroup()
  }

  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelName: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      minFindeksScore: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  add() {
    if (this.addFormGroup.valid) {
      let car: Car = Object.assign({}, this.addFormGroup.value)
      this.carService.addCar(car).subscribe(response=>{
        this.toastrService.success(response.message)
        window.location.reload();
      }, errorResponse=>{
        console.log(errorResponse.error)
        this.toastrService.error(errorResponse.error.message)
      })
    }
    else this.toastrService.error(FormIsMissing)
  }

  getBrands() {
    this.brandService.getAll().subscribe(response=> {
      this.brands = response.data
    })
  }

  getColors() {
    this.colorService.getAll().subscribe(response=> {
      this.colors = response.data
    })
  }
}
