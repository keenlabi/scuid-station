import CircularRingLoader from "../../CircularRingLoader";

interface IconButtonProps {
    type?:"button";
    label?:string;
    prefixIcon?:JSX.Element;
    suffixIcon?:JSX.Element;
    disabled?:boolean;
    isLoading?:boolean;
    clickAction:()=> void;
    loaderColor?:string;
    width?:string;
}

export default function IconButton(props:IconButtonProps) {
    return (
        <button 
            className={`h-[45px] bg-white px-[20px] rounded-[8px]`}
            style={{ width: props.width }}
        > 
            {
                props.isLoading
                ?  <CircularRingLoader color={props.loaderColor || "black"} />

                :   <div className={"flex items-center gap-4"}>
                        { props.prefixIcon && props.prefixIcon }
                        
                        <div className="text-black font-semibold">{ props.label }</div>

                        { props.suffixIcon && props.suffixIcon}
                    </div>
            }
        </button>
    );
}