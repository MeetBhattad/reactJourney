import {useState, useContext} from "react";
import GlobalContext from "./global.js"

export default function Decrement(){

    const {count, setCount} = useContext(GlobalContext);
    return(
    <>
    <h3>I can print {count} as well </h3>
    <button onClick = {()=> setCount(count - 1)}>Decrement</button>
    
    </>
    )
}