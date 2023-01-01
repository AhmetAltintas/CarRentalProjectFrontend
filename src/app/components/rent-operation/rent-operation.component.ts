import { RentService } from 'src/app/services/rent.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Rent } from 'src/app/models/entities/rent';
import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rent-operation',
  styleUrls: ['./rent-operation.component.css'],
  templateUrl: './rent-operation.component.html',
})
export class RentOperationComponent implements OnInit {
  dataLoaded = false;

  @Input() carId: number;
  @Input() dailyPrice: number;
  @Input() minFindeksScore: number;

  customerId: number = 1;
  rentDate: Date;
  returnDate: Date;

  addRentForm: FormGroup;

  constructor(
    private rentService: RentService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.createAddRentForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId = Number(params['carId']);
      }
      if (params['customerId']) {
        this.customerId = Number(params['customerId']);
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
    const rentDate = new Date(this.rentDate);
    const returnDate = new Date(this.returnDate);

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
      rent.carId = this.carId;
      rent.customerId = this.customerId;

      this.rentService.checkRulesForAdding(rent).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.router.navigate([
            '/payment/' +
              this.carId +
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
