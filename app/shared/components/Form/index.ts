import Form from "./Form";
import { IFormField, ISetFormFieldFn, ISetInputFormFieldFn } from "./types";
export default Form;

export function setFormField(data:ISetInputFormFieldFn) {
    if(Array.isArray(data.inputValue)) data.model.values = data.inputValue;
    else data.model.value = data.inputValue;

    data.extraCallBack?.()
    const validatedModel:IFormField = data.validateModel?.(data.model) || data.model;
    data.setModel({...validatedModel});
}

export interface ISetFileFormFieldFn extends ISetFormFieldFn {
    selectedFiles:File[];
}

export function setFileFormField({selectedFiles, model, setModel, validateModel, extraCallBack}:ISetFileFormFieldFn) {
    const oldFiles = model.files ?? [];
    const newFiles = [...selectedFiles, ...oldFiles];
    model.files = newFiles;

    extraCallBack?.()
    const validatedModel:IFormField = validateModel? validateModel(model) : model;
    setModel({...validatedModel});
}