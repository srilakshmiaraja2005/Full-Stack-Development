import React from "react";
import Second from "./Second";

const First=()=>{
    let college="BEC"
    let name="sri"
    return(
        <div>
        <h1>welcome {name} to my {college}</h1>
        <Second/>
        </div>
    );
}
export default First