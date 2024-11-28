type PrimaryTextButtonProps = {
    type?: "submit" | "reset" | "button" | undefined;
    clickAction?: ()=> void;
    label: string;
    disabled?: boolean;
    width?:string;
    isLoading?: boolean;
};

export default function PrimaryTextButton(props:PrimaryTextButtonProps) {
    return (
        <button 
            className={`
                h-[45px]
                bg-white 
                text-black 
                font-semibold 
                px-[20px] 
                rounded-[8px]
                ${props.disabled && 'opacity-50 cursor-not-allowed'}
            `} 
            style={{width: props.width}}
            onClick={()=> !props.disabled && props.clickAction?.() }
            
        > {props.label} </button>
    );
}