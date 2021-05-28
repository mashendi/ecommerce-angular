import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderindexComponent } from './orderindex.component';

describe('OrderindexComponent', () => {
  let component: OrderindexComponent;
  let fixture: ComponentFixture<OrderindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
