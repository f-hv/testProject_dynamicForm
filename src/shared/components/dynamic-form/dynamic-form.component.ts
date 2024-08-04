import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  model,
} from "@angular/core";
import { CustomInputTextComponent } from "../custom-input-text/custom-input-text.component";
import { FieldModel, validationModel } from "../../models/form-data.model";
import { FormFieldType } from "../../enums/form-type.enum";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CustomeInputPasswordComponent } from "../custome-input-password/custome-input-password.component";

@Component({
  selector: "app-dynamic-form",
  standalone: true,
  imports: [CustomInputTextComponent, CommonModule,CustomeInputPasswordComponent],
  templateUrl: "./dynamic-form.component.html",
  styleUrl: "./dynamic-form.component.scss",
})
export class DynamicFormComponent implements OnInit {
  @Input() model!: FieldModel[];
  @Output() onSubmit = new EventEmitter();
  formFieldType: typeof FormFieldType = FormFieldType;
  dynamicForm!: FormGroup;
  fieldData: any;
  formGroup: Record<string, any> = {};
  isDirty: boolean = false
  handelErrors: any;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.generateForm();
    console.log("model:", this.model);

  }
  generateForm() {
    this.model.forEach((control) => {
      this.formGroup[control.name] = ["" || "", this.addvalidators(control)];
    });
    this.dynamicForm = this.formBuilder.group(this.formGroup);
  }

  getInputData(event: any, item: any) {
    this.handelErrors = this.dynamicForm.get(item.name)?.errors
    console.log(this.handelErrors);
    
    this.dynamicForm.get(item.name)?.setValue(event)
  }

  getPasswordData(event: any, item: any){
    this.dynamicForm.get(item.name)?.setValue(event)
  }

  addvalidators(field: any) {
    if (!field) {
      return [];
    }
    const validators: any = []
    for (const [name, value] of Object.entries(field)) {
      if (name === "required") {
        validators.push(Validators.required)
      }
      else if (name == "maxLength") {
        validators.push(Validators.maxLength(30))
      } else if (name == "minLength") {
        validators.push(Validators.minLength(3))
      }
      else if (name == "regex") {
        validators.push(Validators.pattern(field.regex.toString()))
      }
    }
    return validators
  }

  submitForm($event: any) {
    console.log("this.dynamicForm:", this.dynamicForm);
    this.isDirty = false;
    this.onSubmit.emit(this.dynamicForm.getRawValue())
    this.isDirty = true


  }

}
