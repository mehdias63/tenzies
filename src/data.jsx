import React from "react";
export default function Data(props){
    return(
        <div className="data-face">
            <h2 className="data-num">{props.value}</h2>
        </div>
    )
}