import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/entities/dtos/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  currentCar: CarDetailDto;
  cars: CarDetailDto[] = [];
  filterText="";

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCarDetails().subscribe((response) => {
      this.cars = response.data;
    })
  }


  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }


  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  setCurrentCar(car: CarDetailDto) {
    this.currentCar = car;
  }
}
