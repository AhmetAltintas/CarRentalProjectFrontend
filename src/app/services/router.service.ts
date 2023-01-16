import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AddBrandPath, AddCarImagePath, AddCarPath, AddColorPath, BrandListPath, CarDetailByIdPath, CarDetailListPath, CarsByBrandIdPath, CarsByColorIdPath, CarsPath, ColorListPath, CustomerListPath, DeleteCarImagePath, HomePagePath, LoginPath, PayPath, ProfilePath, RegisterPath, RentDetailListPath, RentPath } from '../models/constants/paths';


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  homePage() {
    this.router.navigate([HomePagePath])
  }
  
  loginPage() {
    this.router.navigate([LoginPath])
  }

  registerPage() {
    this.router.navigate([RegisterPath])
  }

  profilePage(){ 
    this.router.navigate([ProfilePath])
  }

  carsPage(){
    this.router.navigate([CarsPath])
  }

  carsPageByBrandId(brandId:number){
    if (brandId>0) this.router.navigate([CarsByBrandIdPath + brandId])
  }

  carsPageByColorId(colorId:number){
    if (colorId>0) this.router.navigate([CarsByColorIdPath + colorId])
  }

  carDetailPageById(id: number) {
    this.router.navigate([CarDetailByIdPath + id])
  }

  rentPage(carId: number) {
    if (carId > 0) this.router.navigate([RentPath + carId])
  }

  paymentPage(){
    this.router.navigate([PayPath])
  }

  addCarImagePageByCarId(carId: number){
    this.router.navigate([AddCarImagePath + carId])
  }

  addBrandPage() {
    this.router.navigate([AddBrandPath])
  }

  addCarPage() {
    this.router.navigate([AddCarPath])
  }

  addColorPage() {
    this.router.navigate([AddColorPath])
  }

  brandListPage() {
    this.router.navigate([BrandListPath])
  }

  colorListPage() {
    this.router.navigate([ColorListPath])
  }

  rentDetailListPage() {
    this.router.navigate([RentDetailListPath])
  }

  customerListPage() {
    this.router.navigate([CustomerListPath])
  }

  carDetailListPage() {
    this.router.navigate([CarDetailListPath])
  }

  deleteCarImageComponent(){
    this.router.navigate([DeleteCarImagePath])
  }
}
