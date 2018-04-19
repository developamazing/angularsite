import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierOffersComponent } from './supplieroffers.component';

describe('SupplierOffersComponent', () => {
  let component: SupplierOffersComponent;
  let fixture: ComponentFixture<SupplierOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
