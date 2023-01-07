import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationDropdownComponent } from './administration-dropdown.component';

describe('AdministrationDropdownComponent', () => {
  let component: AdministrationDropdownComponent;
  let fixture: ComponentFixture<AdministrationDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
