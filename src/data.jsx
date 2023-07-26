import React from "react";
export default function Data(props){
    const styles = { backgroundColor : props.isHeld ? "#59E391" : "white" }
    return(
        <div className="data-face" style={styles} onClick={props.holdDice}>
            <h2 className="data-num">{props.value}</h2>
        </div>
    )
}