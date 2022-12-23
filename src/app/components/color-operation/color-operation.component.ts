import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-operation',
  templateUrl: './color-operation.component.html',
  styleUrls: ['./color-operation.component.css'],
})
export class ColorOperationComponent implements OnInit {
  
  colorName: string;
  id:number;

  colors: Color[] = [];
  
  addColorForm: FormGroup;
  updateColorForm: FormGroup;
  dataLoaded = false;

  constructor(
    private toastrService: ToastrService,
    private colorService: ColorService,
    private formBuilder: FormBuilder,
  ) {}


  ngOnInit(): void {
    this.getAll();
    this.createAddColorForm();
    this.createUpdateColorForm();
  }


  createAddColorForm() {
    this.addColorForm = this.formBuilder.group({
      colorName: ['', Validators.required]
    });
  }

  createUpdateColorForm() {
    this.updateColorForm = this.formBuilder.group({
      colorName: ['', Validators.required],
      id: ['', Validators.required]
    });
  }


  getAll() {
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }


  addColor() {
    if (this.addColorForm.valid) {
      let colorModel: Color = Object.assign({}, this.addColorForm.value);
      this.colorService.add(colorModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı!');
        },
        (responseError) => {
          console.log(responseError);

          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Lütfen tüm alanları doldurunuz.', 'Hata!');
    }
  }


  deleteColor(color:Color) {
    this.colorService.delete(color).subscribe(
      (response) => {
        this.toastrService.success(response.message, 'Başarıyla silindi!');
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(
              responseError.error.Errors[i].ErrorMessage,
              'Silinemedi.'
            );
          }
        }
      }
    );
  }


  patchValueClick(color : any): void{
    this.updateColorForm.patchValue({
      id:color.id,
      colorName:color.colorName
    })
  }

  updateColor() {
    if (this.updateColorForm.valid) {
      let colorModel: Color = Object.assign({}, this.updateColorForm.value);
      this.colorService.update(colorModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },errorResponse=>{
        if(errorResponse.error.Errors){
          if(errorResponse.error.Errors.length>0){
            for (let i = 0; i < errorResponse.error.Errors.length; i++) {
              this.toastrService.error(errorResponse.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
            }
          }
        }
        else{
          this.toastrService.error(errorResponse.error.message,"Doğrulama Hatası")
        }
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik")
    }

    
  }
}
