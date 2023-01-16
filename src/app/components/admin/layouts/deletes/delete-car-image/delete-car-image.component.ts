import { TemplatesService } from './../../../../../services/templates.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../../../services/auth.service';
import { CarImageService } from './../../../../../services/car-image.service';
import { Component, Input, OnInit } from '@angular/core';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';
import { CarImage } from 'src/app/models/entities/carImage';
import { BaseUrl } from 'src/app/models/constants/url';
import { AreYouSureForDeleteThisImage } from 'src/app/models/constants/messages';

@Component({
  selector: 'app-delete-car-image',
  templateUrl: './delete-car-image.component.html',
  styleUrls: ['./delete-car-image.component.css']
})
export class DeleteCarImageComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentCarImagesFromParent: CarImage[]

  constructor(private carImageService: CarImageService, public override authService: AuthService,
    private toastrService: ToastrService, private templatesService: TemplatesService) {
    super(authService)
    this.innerHTML = "Sil"
  }

  ngOnInit(): void {
  }

  delete(image: CarImage) {
    console.log(image.id)
    if (confirm(AreYouSureForDeleteThisImage)){
      this.carImageService.delete(image).subscribe(response => {
        this.toastrService.success(response.message)
        this.deleteFromArray(image.id)
      }, errorResponse => this.templatesService.errorResponse(errorResponse))}
  }

  deleteFromArray(id: number) {
    let index = this.currentCarImagesFromParent.findIndex(x => x.id == id)
    this.currentCarImagesFromParent.splice(index, 1)
  }

  getFullImagePath(imagePath: string) {
    return BaseUrl + imagePath;
  }

  reloadPage() {
    window.location.reload()
  }

  get getCurrentCarId() {
    return this.currentCarImagesFromParent.length > 0 ? this.currentCarImagesFromParent[0].carId : ""
  }
}