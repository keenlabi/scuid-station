"use client"
import styles from "./inputfield.module.css";
import { useEffect, useState } from "react";
import SizedBox from "../SizedBox";

export interface IInputField {
  type?:"text"|"password"|"number"|"email"|"file";
  label?:string;
  error?:string;
  disabled?:boolean;
  suffixIcon?:string;
  placeholder?:string;
  prefixIcon?:string;
  inputWidth?:string;
  backgroundColor?:string;
}

export interface IInputFieldProps {
  type?:"text"|"password"|"number"|"email"|"file"|"date"|"time"|"month";
  label?:string;
  placeholder?:string;
  name?:string;
  error?:string;
  required?:boolean;
  disabled?:boolean;
  onInput:(value: string) => void;
  suffixIcon?:React.ReactElement;
  suffixIconAction?:() => void;
  prefixIcon?:string;
  inputWidth?:string;
  backgroundColor?:string;
  maxLength?:number;
  value?:string;
  readonly?:boolean;
}

const typesThatAreTextDefault = ["text","number","email","file","date","time","month"];

export default function InputField(props: IInputFieldProps) {

  const [currentInputType, setCurrentInputType] = useState<string>(typesThatAreTextDefault.includes(props.type!) ? "text" : props.type!);

  useEffect(() => {
    if (currentInputType !== props.type) setCurrentInputType(props.type === "month" || props.type === "date" || props.type === "time" || props.type === "text" ? "text" : props.type!);
  }, [currentInputType, props.type]);

  return (
    <div className={styles.input_field_wrapper} style={{ width: props.inputWidth }}>
      {
        props.label && <label
          className={styles.label}
          children={props.label}
        />
      }
      
      <SizedBox height="10px" />
      <div className={styles.input_wrapper} style={props.backgroundColor ? { background: props.backgroundColor } : undefined}>
        {
          props.prefixIcon &&
          <span className={styles.prefix_icon}>
            <img src={props.prefixIcon} alt="" />
          </span>
        }

        <input
          className={styles.input}
          type={currentInputType}
          name={props.name}
          defaultValue={props.value}
          onChange={(e) => props.onInput(e.target.value)}
          disabled={props.disabled}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          readOnly={props.readonly}
          onFocus={() =>  typesThatAreTextDefault.includes(props.type!) && setCurrentInputType(props.type!)}
          onBlur={() =>  setCurrentInputType(typesThatAreTextDefault.includes(props.type!) ? "text" : props.type!)}
        />

        {
          props.suffixIcon && 
          <div 
            className={styles.suffix_icon} 
            onClick={()=> props.suffixIconAction?.()}
          >
            {props.suffixIcon}
          </div>
        }
      </div>

      <SizedBox height="5px" />
      {props.error ? (
        <div className={styles.error}>
          <p className={styles.error_text}>{props.error}</p>
        </div>
      ) : null}
    </div>
  );
}
