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
  id:number;
  
  brands: Brand[] = [];
  addBrandForm: FormGroup;
  updateBrandForm: FormGroup;

  dataLoaded = false;
  

  constructor(
    private toastrService: ToastrService,
    private brandService: BrandService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.createAddBrandForm();
    this.createUpdateBrandForm();
  }

  createAddBrandForm() {
    this.addBrandForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  createUpdateBrandForm() {
    this.updateBrandForm = this.formBuilder.group({
      brandName: ['', Validators.required],
      id: ['', Validators.required]
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

  deleteBrand(brand:Brand){
    this.brandService.delete(brand).subscribe((response)=> {
      this.toastrService.success(response.message, 'Başarıyla silindi !');
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
    )
  }

  patchValueClick(brand : any): void{
    this.updateBrandForm.patchValue({
      id:brand.id,
      brandName:brand.brandName
    })
  }

  updateBrand(){
    if (this.updateBrandForm.valid) {
      let brandModel: Brand = Object.assign({}, this.updateBrandForm.value);
      this.brandService.update(brandModel).subscribe(response=>{
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



