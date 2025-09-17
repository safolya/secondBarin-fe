import type { ReactElement } from "react";

 interface Buttonprops {
   variant:"primary"|"secondary";
   size:"sm"|"md"|"lg";
   text:string;
   startIcon?:ReactElement;
   endIcon?:ReactElement
   onClick:()=>void;
}
//#5046e4(600), #e0e7fe(300) , #3e38a7(500) 


const variantStyles={
    "primary":,
    "secondary":""
}

export const Button = (props:Buttonprops)=>{
    return (
        <button></button>
    )
}

<Button variant="primary" size="md" text={"djdhfjdh"} onClick={()=>{}} />