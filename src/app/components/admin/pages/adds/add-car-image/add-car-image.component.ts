import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from 'src/app/models/responseModels/responseModel';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-add-car-image',
  templateUrl: './add-car-image.component.html',
  styleUrls: ['./add-car-image.component.css']
})
export class AddCarImageComponent implements OnInit {
  
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  response: string;

  currentCarId: number
  constructor(
    private carImageService:CarImageService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.currentCarId = params["carId"]
      this.initializeUploader(this.currentCarId)
    })
  }

  initializeUploader(carId: number) {
    this.uploader = new FileUploader({
      url: this.carImageService.apiUrl + "add?carId=" + carId,
      removeAfterUpload: true,
      allowedFileType: ["image"]
    });

    this.onBefore()

    this.onError();

    this.onSuccess()

    this.hasBaseDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe(res => this.response = res);
  }

  onBefore() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
  }

  onSuccess() {
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        let newResponse: ResponseModel = JSON.parse(response)
        this.toastrService.success(newResponse.message)
        window.location.reload()
      }
    }
  }

  onError() {
    this.uploader.onErrorItem = (item, response) => {
      if (response) {
        let newResponse: any = JSON.parse(response)
        let message = newResponse.message ?? newResponse.Message
        this.toastrService.error(message)
      }
    }
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
