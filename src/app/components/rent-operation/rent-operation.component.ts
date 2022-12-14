import { Component, Input, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Rent } from 'src/app/models/rent';
import { DatePickerModule } from 'angular-material-datepicker/src/datepicker/datepicker.module';

@Component({
  selector: 'app-rent-operation',
  templateUrl: './rent-operation.component.html',
  styleUrls: ['./rent-operation.component.css'],
})
export class RentOperationComponent implements OnInit {
  dataLoaded = false;

  @Input() currentCarId: number;
  @Input() currentDailyPrice: number;
  currentCustomerId: number = 1;
  rentDate: Date;
  returnDate: Date;

  addRentForm: FormGroup;

  constructor(
    private rentService: RentService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePickerModule : DatePickerModule,
  ) {}

  ngOnInit(): void {
    this.createAddRentForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.currentCarId = Number(params['carId']);
      }
      if (params['customerId']) {
        this.currentCustomerId = Number(params['customerId']);
      }
    });
  }

  createAddRentForm() {
    this.addRentForm = this.formBuilder.group({
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  calculateDiff() {
    let rentDate = this.rentDate;
    let returnDate = this.returnDate;
    console.log(this.rentDate)
    console.log(this.returnDate)
    return Math.floor(
      (Date.UTC(
        returnDate.getFullYear(),
        returnDate.getMonth(),
        returnDate.getDate()
      ) -
        Date.UTC(
          rentDate.getFullYear(),
          rentDate.getMonth(),
          rentDate.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    );
    
  }

  checkRulesForAdding() {
    if (this.addRentForm.valid) {
      let rent: Rent = Object.assign({}, this.addRentForm.value);
      rent.carId = this.currentCarId;
      rent.customerId = this.currentCustomerId;

      this.rentService.checkRulesForAdding(rent).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.router.navigate([
            '/payment/' +
              this.currentCarId +
              '/' +
              this.calculateDiff().toString +
              '/' +
              this.rentDate +
              '/' +
              this.returnDate,
          ]);
        },
        (responseError) => {
          this.toastrService.error(responseError.error.message);
        }
      );
    } else {
      this.toastrService.error('Formunuz hatalı');
    }
  }
}
