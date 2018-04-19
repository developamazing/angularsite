import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeroffersComponent } from './consumeroffers.component';

describe('ConsumeroffersComponent', () => {
  let component: ConsumeroffersComponent;
  let fixture: ComponentFixture<ConsumeroffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeroffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeroffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
