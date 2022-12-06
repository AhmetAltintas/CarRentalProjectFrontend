import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color | undefined;
  dataLoaded = false;


  colorForm = new FormGroup({
    color: new FormControl(this.colors),
  });

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color; 
  }

  getCurrentColorClass(color: Color):string {
    if (color == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  setCurrentColorEmpty() {
    this.currentColor = undefined;
  }

  submit() {
    console.log(this.colorForm.value.color);
  }
}
