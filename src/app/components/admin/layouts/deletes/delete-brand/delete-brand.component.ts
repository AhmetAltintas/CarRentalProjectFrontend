import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/entities/brand';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.css'],
})
export class DeleteBrandComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  @Input() currentBrandFromParent: Brand;

  constructor(
    private brandService: BrandService,
    public override authService: AuthService,
    private toastrService: ToastrService
  ) {
    super(authService);
    this.innerHTML = 'Sil';
  }

  ngOnInit(): void {}

  delete() {
    this.brandService.delete(this.currentBrandFromParent).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.toastrService.error(errorResponse.error.message)
    );
  }
}
