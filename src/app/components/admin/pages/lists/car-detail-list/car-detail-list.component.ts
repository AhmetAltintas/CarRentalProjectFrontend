import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entities/dtos/car';
import { CarDetailDto } from 'src/app/models/entities/dtos/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail-list',
  templateUrl: './car-detail-list.component.html',
  styleUrls: ['./car-detail-list.component.css']
})
export class CarDetailListComponent implements OnInit {

  filterText: string
  carDetailDTOs:CarDetailDto[]
  cars: Car[]
  constructor(private carService: CarService){}

  ngOnInit(): void {
      this.getCarDetails();
      this.getAll();
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetailDTOs = response.data
    })
  }

  getAll(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })
  }

  getByIdFromInMemory(id:number):Car {
    return this.cars.filter(c=>c.id ===id)[0]
  }
}
