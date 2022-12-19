import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-operation',
  templateUrl: './brand-operation.component.html',
  styleUrls: ['./brand-operation.component.css'],
})
export class BrandOperationComponent implements OnInit {
  brandName: string;
  brands: Brand[] = [];
  dataLoaded = false;
  addBrandForm: FormGroup;

  constructor(
    private toastrService: ToastrService,
    private brandService: BrandService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.createAddBrandForm();
  }

  createAddBrandForm() {
    this.addBrandForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  getAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  addBrand() {
    if (this.addBrandForm.valid) {
      let brandModel: Brand = Object.assign({}, this.addBrandForm.value);
      this.brandService.add(brandModel).subscribe(
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

  deleteBrand(){

  }

  updateBrand(){

  }
}


