import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/entities/color';
import { AuthService } from 'src/app/services/auth.service';
import { ColorService } from 'src/app/services/color.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-color',
  templateUrl: './delete-color.component.html',
  styleUrls: ['./delete-color.component.css']
})
export class DeleteColorComponent extends AdminChildComponentBaseComponent implements OnInit{
  @Input() currentColorFromParent:Color

  constructor(private colorService:ColorService, public override authService:AuthService, private toastrService:ToastrService) { 
    super(authService) 
    this.innerHTML = "Sil"
  }

  ngOnInit(): void {
  }

  delete(){
    this.colorService.delete(this.currentColorFromParent).subscribe(response=>{
      this.toastrService.success(response.message)
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    },errorResponse=>{
      this.toastrService.error(errorResponse.error)
      console.log(errorResponse.error)
    })
    console.log(this.currentColorFromParent)
  }
}
