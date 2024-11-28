import styles from "./circularringloader.module.css";

export default function CircularRingLoader(props:{ color:string }) {
    return (
        <div className={`${styles.lds_ring} ${styles.lds_wrapper}`}>
            <div style={{color: props.color}}></div>
            <div style={{color: props.color}}></div>
            <div style={{color: props.color}}></div>
            <div style={{color: props.color}}></div>
        </div>
    );
}