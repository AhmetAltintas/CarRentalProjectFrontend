import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDetailListComponent } from './rent-detail-list.component';

describe('RentDetailListComponent', () => {
  let component: RentDetailListComponent;
  let fixture: ComponentFixture<RentDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentDetailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
