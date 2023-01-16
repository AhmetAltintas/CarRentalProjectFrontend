import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/entities/car';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentCarFromParent: Car

  constructor(
    private carService:CarService,
    public override authService:AuthService,
    private toastrService:ToastrService
  ){
    super(authService)
    this.innerHTML = "Sil"
  }

  ngOnInit(): void {
      
  }

  delete(){
    this.carService.delete(this.currentCarFromParent).subscribe(response=>{
      this.toastrService.success(response.message)
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    },errorResponse=> this.toastrService.error(errorResponse.error.message))
  }
}
