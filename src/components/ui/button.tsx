import type { ReactElement } from "react";

 interface Buttonprops {
   variant:"primary"|"secondary";
   size:"sm"|"md"|"lg";
   text:string;
   startIcon?:ReactElement;
   endIcon?:ReactElement
   onClick?:()=>void;
}
 
const defaultStyles= "rounded-md"

const variantStyles={
    "primary":"bg-brand-purple-600 text-white hover:bg-brand-purple-700",
    "secondary":"bg-purple-300 text-brand-purple-600 hover:bg-purple-500"
}

const variantSize={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

export const Button = (props:Buttonprops)=>{
    return (
        <button className={`${variantStyles[props.variant]} ${defaultStyles} ${variantSize[props.size]}`}>
            {props.startIcon}{props.text}{props.endIcon}</button>
    )
}

<Button variant="primary" size="md" text={"djdhfjdh"} onClick={()=>{}} />