import { Component, Input} from '@angular/core';
import { FieldModel } from '../../models/form-data.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-input-text',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './custom-input-text.component.html',
  styleUrl: './custom-input-text.component.scss',
})
export class CustomInputTextComponent {
  @Input() model!: FieldModel;
  @Input() formControl: any


}
