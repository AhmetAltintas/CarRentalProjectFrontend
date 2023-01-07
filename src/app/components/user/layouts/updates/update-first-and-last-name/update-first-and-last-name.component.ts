import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UpdateFirstAndLastNameDTO } from 'src/app/models/entities/dtos/updateFirstAndLastNameDTO';
import { UserDTO } from 'src/app/models/entities/dtos/userDto';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { UserChildComponentBaseComponent } from '../../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-update-first-and-last-name',
  templateUrl: './update-first-and-last-name.component.html',
  styleUrls: ['./update-first-and-last-name.component.css'],
})
export class UpdateFirstAndLastNameComponent
  extends UserChildComponentBaseComponent
  implements OnInit
{
  @Input() currentUserDTOFromParent: UserDTO;

  updateFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrServive: ToastrService,
    private userService: UserService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Güncelle';
    this.classFromParent = 'list-group-item';
  }

  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      firstName: [this.currentUserDTOFromParent.firstName, Validators.required],
      lastName: [this.currentUserDTOFromParent.lastName, Validators.required],
    });
  }

  updateFirstAndLastName() {
    if (this.updateFormGroup.valid) {
      let updateFirstAndLastNameDTO: UpdateFirstAndLastNameDTO = Object.assign(
        {},
        this.updateFormGroup.value
      );
      updateFirstAndLastNameDTO.id = this.currentUserDTOFromParent.id;
      this.userService
        .updateFirstAndLastName(updateFirstAndLastNameDTO)
        .subscribe(
          (response) => {
            this.toastrServive.success(response.message);
          },
          (responseError) => {
            this.toastrServive.error(responseError.error.message);
          }
        );
    } else this.toastrServive.error('Form eksik');
  }
}
