import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-operation',
  templateUrl: './car-operation.component.html',
  styleUrls: ['./car-operation.component.css']
})
export class CarOperationComponent implements OnInit{
  brandId: number;
  colorId: number;
  modelYear: number;
  dailyPrice: number;
  description: string;
  modelName:string;
  cars: CarDetailDto[] = [];
  dataLoaded = false;
  addCarForm: FormGroup;

  constructor(
    private toastrService:ToastrService,
    private carService:CarService,
    private formBuilder:FormBuilder
  ){}

  ngOnInit(): void {
    this.getCars();
    this.createAddCarForm();
  }

  createAddCarForm() {
    this.addCarForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      modelName: ['', Validators.required],
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  addCar() {
    if (this.addCarForm.valid) {
      let carModel: CarDetailDto = Object.assign({}, this.addCarForm.value);
      this.carService.addCar(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı!');
        },
        (responseError) => {
          console.log(responseError);

          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Lütfen tüm alanları doldurunuz.', 'Hata!');
    }
  }

  deleteCar(){

  }

  updateCar(){

  }
}
