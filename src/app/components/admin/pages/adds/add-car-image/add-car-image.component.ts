import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-add-car-image',
  templateUrl: './add-car-image.component.html',
  styleUrls: ['./add-car-image.component.css']
})
export class AddCarImageComponent implements OnInit {
  
  currentCarId:number
  selectedFile:File;
  imagePath:string="wwwroot\Images"

  constructor(
    private carImageService:CarImageService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.currentCarId = params["carId"]
    })
    console.log(this.currentCarId)

  }


  onFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
  }



  onUpload(){
    const filedata= new FormData();
    filedata.append('file', this.selectedFile, this.selectedFile.name);
    filedata.append("carId", this.currentCarId.toString());
    filedata.append("imagePath", this.imagePath)

    this.carImageService.add(filedata).subscribe(response=>{
      this.toastrService.success(response.message)
    }, errorResponse=> {
      console.log(errorResponse.error)
      this.toastrService.error(errorResponse.error)
    })
    
  }
}
