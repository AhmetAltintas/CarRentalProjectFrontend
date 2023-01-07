import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteToRentPageButtonComponent } from './route-to-rent-page-button.component';

describe('RouteToRentPageButtonComponent', () => {
  let component: RouteToRentPageButtonComponent;
  let fixture: ComponentFixture<RouteToRentPageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteToRentPageButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteToRentPageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
