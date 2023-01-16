import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { UpdatePasswordDTO } from 'src/app/models/entities/dtos/updatePasswordDTO';
import { UserDTO } from 'src/app/models/entities/dtos/userDto';
import { AuthService } from 'src/app/services/auth.service';
import { UserChildComponentBaseComponent } from '../../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent extends UserChildComponentBaseComponent implements OnInit{
  @Input() currentUserDTOFromParent:UserDTO

  updateFormGroup:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    public override authService:AuthService
  ){
    super(authService);
    this.innerHTML = "Güncelle"
    this.classFromParent = "list-group-item"
  }

  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup(){
    this.updateFormGroup=this.formBuilder.group({
      password:["",Validators.required],
      newPassword:["",Validators.required],
      newPasswordAgain:["",Validators.required],
    })
  }

  updatePassword(){
    if (this.updateFormGroup.valid) {
      let updatePasswordDTO: UpdatePasswordDTO = Object.assign({},this.updateFormGroup.value)
      updatePasswordDTO.id = this.currentUserDTOFromParent.id
      this.authService.updatePassword(updatePasswordDTO).subscribe(response=>{
        this.toastrService.success(response.message)
        window.location.reload();
      },errorResponse=>{
        this.toastrService.error(errorResponse.error.message)
      })
    }
    else this.toastrService.error(FormIsMissing)
  }
}
