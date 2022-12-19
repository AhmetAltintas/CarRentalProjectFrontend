import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-operation',
  templateUrl: './color-operation.component.html',
  styleUrls: ['./color-operation.component.css']
})
export class ColorOperationComponent implements OnInit{
  colorName: string;
  colors: Color[] = [];
  dataLoaded = false;
  addColorForm: FormGroup;

  constructor(
    private toastrService:ToastrService,
    private colorService:ColorService,
    private formBuilder:FormBuilder
  ){}

  ngOnInit(): void {
    this.getAll();
    this.createAddColorForm();
  }

  createAddColorForm() {
    this.addColorForm = this.formBuilder.group({
      colorName: ['', Validators.required],
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

  deleteColor(){

  }

  updateColor(){

  }
}
