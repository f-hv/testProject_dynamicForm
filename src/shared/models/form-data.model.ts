export interface FormDataModel {
  form: {
    fieldDescriptionShowType: string;
    fields: FieldModel[];
    forms: [];
    name: string;
    nestedFormShowType: string;
    submitLabel: string;
    title: string;
  };
  current: number;
  errors: [];
  fieldErrors: {};
  steps: number;
}

export interface FieldModel {
  '@type': string;
  name: string;
  title: string;
  description: string;
  errorMessage: string;
  required: boolean;
  minLength: number;
  maxLength: number;
  type: string;
  regex:string;
}

export interface validationModel {
  required: boolean;
  minLength?: number;
  maxLength: number;
  regex?: string
}
