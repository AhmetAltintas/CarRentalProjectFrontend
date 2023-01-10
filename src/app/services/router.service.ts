import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  homePage() {
    this.router.navigate([""])
  }
  
  loginPage() {
    this.router.navigate(["login"])
  }

  registerPage() {
    this.router.navigate(["register"])
  }

  profilePage(){ 
    this.router.navigate(['profile'])
  }

  carsPage(){
    this.router.navigate(['cars'])
  }

  carsPageByBrandId(brandId:number){
    if (brandId>0) this.router.navigate(["cars/brand/" + brandId])
  }

  carsPageByColorId(colorId:number){
    if (colorId>0) this.router.navigate(["cars/color/" + colorId])
  }

  carDetailPageById(id: number) {
    this.router.navigate(["car-detail/" + id])
  }

  rentPage(carId: number) {
    if (carId > 0) this.router.navigate(["rent/" + carId])
  }

  addCarImagePageByCarId(carId: number){
    this.router.navigate(["add-car-image/" + carId])
  }

  paymentPage(){
    this.router.navigate(["pay"])
  }

  addBrandPage() {
    this.router.navigate(["add-brand"])
  }

  addCarPage() {
    this.router.navigate(["add-car"])
  }

  addColorPage() {
    this.router.navigate(["add-color"])
  }

  brandListPage() {
    this.router.navigate(["brand-list"])
  }

  colorListPage() {
    this.router.navigate(["color-list"])
  }

  rentDetailListPage() {
    this.router.navigate(["rent-detail-list"])
  }

  customerListPage() {
    this.router.navigate(["customer-list"])
  }

  carDetailListPage() {
    this.router.navigate(["car-detail-list"])
  }

}
