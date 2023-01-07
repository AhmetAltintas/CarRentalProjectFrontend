import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UpdateEmailDTO } from 'src/app/models/entities/dtos/updateEmailDTO';
import { UserDTO } from 'src/app/models/entities/dtos/userDto';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { UserChildComponentBaseComponent } from '../../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.css']
})
export class UpdateEmailComponent extends UserChildComponentBaseComponent implements OnInit{
  @Input() currentUserDTOFromParent: UserDTO

  updateFormGroup:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private userService:UserService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Güncelle"
    this.classFromParent = "list-group-item"
  }
  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup(){
    this.updateFormGroup = this.formBuilder.group({
      email: [this.currentUserDTOFromParent.email, Validators.required]
    })
  }

  updateEmail(){
    if (this.updateFormGroup.valid) {
      let updateEmailDTO: UpdateEmailDTO = Object.assign({}, this.updateFormGroup.value)
      updateEmailDTO.id = this.currentUserDTOFromParent.id
      this.userService.updateEmail(updateEmailDTO).subscribe(response=>{
        this.toastrService.success(response.message)
      },responseError=>{
        this.toastrService.error(responseError.error.message)
      })
    }else this.toastrService.error("Form eksik")
  }
}
