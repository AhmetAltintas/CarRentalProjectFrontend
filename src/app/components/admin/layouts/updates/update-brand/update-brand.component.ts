import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { Brand } from 'src/app/models/entities/brand';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css'],
})
export class UpdateBrandComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  @Input() currentBrandFromParent: Brand;

  updateFormGroup: FormGroup;
  constructor(
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Güncelle';
  }

  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      brandName: [this.currentBrandFromParent.brandName, Validators.required],
    });
  }

  update() {
    if (this.updateFormGroup.valid) {
      let brand: Brand = Object.assign(
        { id: this.currentBrandFromParent.id },
        this.updateFormGroup.value
      );
      this.brandService.update(brand).subscribe(
        (response) => {
          this.toastrService.success(response.message);
        },
        (responseError) => {
          this.toastrService.error(responseError.error.message);
        }
      );
    } else this.toastrService.error(FormIsMissing);
  }
}
