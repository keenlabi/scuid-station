import styles from "./form.module.css";

interface IFormProps {
    formHeading?:string; 
    extraStyle?:string;
    children:JSX.Element|JSX.Element[];
}

export default function Form(props:IFormProps) {
    return (
        <form 
            className={`${styles.form_container} ${props.extraStyle!}`}
            onSubmit={(e)=> e.preventDefault()}
        > 
            {(props.formHeading) ? <div className={styles.form_title}>{ props.formHeading }</div> : null }
            { props.children } 
        </form>
    );
}
