import React from "react";
import Second from "./Second";

const First=()=>{
    let college="BEC"
    let name="sri"
    return(
        <div>
        <h1>hi {name} welcome to {college}</h1>
        <Second/>
        </div>
    );
}
export default First