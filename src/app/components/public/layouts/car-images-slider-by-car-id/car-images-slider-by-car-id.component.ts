import { Component, Input, OnInit } from '@angular/core';
import { BaseUrl } from 'src/app/models/constants/url';
import { CarImage } from 'src/app/models/entities/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-images-slider-by-car-id',
  templateUrl: './car-images-slider-by-car-id.component.html',
  styleUrls: ['./car-images-slider-by-car-id.component.css']
})
export class CarImagesSliderByCarIdComponent implements OnInit{
  @Input() currentCarIdFromParent: number

  carImages: CarImage[]
  constructor(
    private carImageService:CarImageService
  ){}

  ngOnInit(): void {
      if (this.currentCarIdFromParent)
        this.getAllByCarId(this.currentCarIdFromParent)
  }

  getAllByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data
    })
  }

  getFullImagePath(imagePath:string){
    return BaseUrl + imagePath;
  }

  getActiveString(carImage:CarImage){
    if (carImage === this.carImages[0]) {
      return "active"
    }return ""
  }
}

