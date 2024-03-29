import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  addFormGroup: FormGroup
  constructor(
    private colorService:ColorService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.createAddFormGroup();
  }

  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      colorName: ["", Validators.required]
    })
  }

  add(){
    if (this.addFormGroup.valid) {
      let color: Color = Object.assign({}, this.addFormGroup.value)
      this.colorService.add(color).subscribe(response=>{
        this.toastrService.success(response.message)
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      },errorResponse=>{
        this.toastrService.error(errorResponse.error.message)
      })
    }else this.toastrService.error(FormIsMissing)
  }
}
