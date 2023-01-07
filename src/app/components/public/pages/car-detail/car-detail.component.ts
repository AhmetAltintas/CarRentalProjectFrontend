import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/entities/dtos/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetail: CarDetailDto;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) this.getDetailById(params['carId']);
    });
  }

  getDetailById(id: number) {
    this.carService.getCarById(id).subscribe((response) => {
      this.carDetail = response.data;
    });
  }
}
