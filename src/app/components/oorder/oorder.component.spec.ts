import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OorderComponent } from './oorder.component';

describe('OorderComponent', () => {
  let component: OorderComponent;
  let fixture: ComponentFixture<OorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
