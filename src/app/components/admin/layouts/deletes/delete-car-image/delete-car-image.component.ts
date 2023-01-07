import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/entities/carImage';
import { AuthService } from 'src/app/services/auth.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-car-image',
  templateUrl: './delete-car-image.component.html',
  styleUrls: ['./delete-car-image.component.css']
})
export class DeleteCarImageComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentCarImagesFromParent: CarImage[]

  constructor(
    private carImageService:CarImageService,
    private toastrService: ToastrService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Sil"
  }

  ngOnInit(): void {
      
  }

  delete(id: number){
    if (confirm("Bu resmi silmek istediğinizden emin misiniz?"))
      this.carImageService.delete(id).subscribe(response=>{
        this.toastrService.success(response.message)
        this.deleteFromArray(id)
      }, responseError=>{
        this.toastrService.error(responseError.error.message)
      })
  }

  deleteFromArray(id:number){
    let index = this.currentCarImagesFromParent.findIndex(x=>x.id == id)
    this.currentCarImagesFromParent.splice(index, 1)
  }

  getFullImagePath(imagePath:string){
    return 'https://localhost:44332/' + imagePath
  }

  reloadPage() {
    window.location.reload();
  }

  get getCurrentCarId(){
    return this.currentCarImagesFromParent.length > 0 ? this.currentCarImagesFromParent[0].carId : ""
  }
}
