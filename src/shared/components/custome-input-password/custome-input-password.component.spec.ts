import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeInputPasswordComponent } from './custome-input-password.component';

describe('CustomeInputPasswordComponent', () => {
  let component: CustomeInputPasswordComponent;
  let fixture: ComponentFixture<CustomeInputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeInputPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomeInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
