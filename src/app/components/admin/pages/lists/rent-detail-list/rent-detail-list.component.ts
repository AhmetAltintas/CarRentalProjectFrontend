import { Component, OnInit } from '@angular/core';
import { RentDetailDTO } from 'src/app/models/entities/dtos/rent-detail-dto';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rent-detail-list',
  templateUrl: './rent-detail-list.component.html',
  styleUrls: ['./rent-detail-list.component.css']
})
export class RentDetailListComponent implements OnInit {

  rentDetailDTOs: RentDetailDTO[]
  constructor(private rentService:RentService){}

  ngOnInit(): void {
      this.getDetails();
  }

  getDetails(){
    this.rentService.getRentDetails().subscribe(response=>{
      this.rentDetailDTOs=response.data
    })
  }
}
