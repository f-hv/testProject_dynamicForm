import {
  Component,
  Inject,
  model,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormDataService } from '../../shared/services/form-data.service';
import {
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FieldModel, FormDataModel } from '../../shared/models/form-data.model';
import { FormFieldType } from '../../shared/enums/form-type.enum';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../../shared/components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    DynamicFormComponent,
  ],
  providers: [FormDataService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  @ViewChild('containerRef', { read: ViewContainerRef })
  containerRef!: ViewContainerRef;
  data!: FieldModel[];
  dynamicForm!: FormGroup;
  formFieldType: typeof FormFieldType = FormFieldType;
  constructor(
    private formService: FormDataService,
  ) { }

  ngOnInit(): void {
    this.formService.getFormData().subscribe((res: FormDataModel) => {
      this.data = res.form.fields;
      setTimeout(() => {
        const comRef = this.containerRef.createComponent(DynamicFormComponent);
        comRef.setInput('model', this.data);
        comRef.instance.onSubmit.subscribe((formValue) => {
          console.log("form submited", formValue);

        });
      }, 0);
    });
  }
}
