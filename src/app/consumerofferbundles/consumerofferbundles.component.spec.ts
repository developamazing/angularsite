import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerofferbundlesComponent } from './consumerofferbundles.component';

describe('ConsumerofferbundlesComponent', () => {
  let component: ConsumerofferbundlesComponent;
  let fixture: ComponentFixture<ConsumerofferbundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerofferbundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerofferbundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
