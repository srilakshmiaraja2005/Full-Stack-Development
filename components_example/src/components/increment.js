import { useState } from "react";
const Increment=()=>{
    const[count,setcount]=useState(0)
    return(
        
        <div>
        <h1>hello from 3rd component</h1>
        <button onClick={()=>setcount(count+1)}>{count}</button>
        </div>
    );
}
export default Increment 