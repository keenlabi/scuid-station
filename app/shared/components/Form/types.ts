import { IInputField } from "../InputField/InputField";

export interface IFormField {
    name:string;
    required:boolean;
    value?:string;
    values?:string[];
    files?:File[];
    validated:boolean;
}

export type ISetFormField = React.Dispatch<React.SetStateAction<IFormField>>;

export interface ISetFormFieldFn {
    model:IFormField;
    setModel:ISetFormField;
    validateModel?:(model:IFormField)=>IFormField;
    extraCallBack?:()=> void
}

export interface ISetInputFormFieldFn extends ISetFormFieldFn {
    inputValue:string|string[];
}


export type IInputFormField = IFormField & IInputField;