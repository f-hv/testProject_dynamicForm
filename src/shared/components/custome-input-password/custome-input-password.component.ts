import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldModel } from '../../models/form-data.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custome-input-password',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './custome-input-password.component.html',
  styleUrl: './custome-input-password.component.scss'
})
export class CustomeInputPasswordComponent {
@Input() model!: FieldModel;
  @Input() formControl: any
}
