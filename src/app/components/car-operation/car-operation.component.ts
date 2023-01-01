import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/entities/dtos/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-operation',
  templateUrl: './car-operation.component.html',
  styleUrls: ['./car-operation.component.css']
})
export class CarOperationComponent implements OnInit{
  id:number;
  brandId: number;
  colorId: number;
  modelYear: number;
  dailyPrice: number;
  description: string;
  modelName:string;

  cars: CarDetailDto[] = [];

  dataLoaded = false;

  addCarForm: FormGroup;
  updateCarForm: FormGroup;

  constructor(
    private toastrService:ToastrService,
    private carService:CarService,
    private formBuilder:FormBuilder
  ){}

  ngOnInit(): void {
    this.getCars();
    this.createAddCarForm();
    this.createUpdateCarForm();
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

  createUpdateCarForm(){
    this.updateCarForm = this.formBuilder.group({
      id: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      modelName: ['', Validators.required],
    })
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

  deleteCar(car:CarDetailDto){
    this.carService.delete(car).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarıyla silindi !');
    },
    (responseError) => {
      if (responseError.error.Errors.length > 0) {
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(
            responseError.error.Errors[i].ErrorMessage,
            'Silinemedi.'
          );
        }
      }
    }
    )
  }

  patchValueClick(car : any): void{
    this.updateCarForm.patchValue({
      id:car.id,
      brandId:car.brandId,
      colorId:car.colorId,
      modelYear:car.modelYear,
      dailyPrice:car.dailyPrice,
      description:car.description,
      modelName:car.modelName
    })
  }
  

  updateCar(){
    if (this.updateCarForm.valid) {
      let carModel: CarDetailDto = Object.assign({}, this.updateCarForm.value);
      this.carService.update(carModel).subscribe(response => {
        this.toastrService.success(response.message,"Başarılı")
      },errorResponse=>{
        if(errorResponse.error.Errors){
          if(errorResponse.error.Errors.length>0){
            for (let i = 0; i < errorResponse.error.Errors.length; i++) {
              this.toastrService.error(errorResponse.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
            }
          }
        }
        else{
          this.toastrService.error(errorResponse.error.message,"Doğrulama Hatası")
        }
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik")
    }
  }
}
