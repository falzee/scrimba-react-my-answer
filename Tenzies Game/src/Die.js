import React from "react"

export default function Die (props){
    const styles = {
        backgroundColor: props.isHeld ? "#94fa34" : "white"
    };
    return(
        //Math.floor((Math.random() * 6) + 1)
        <div 
        className="grid-item" 
        style={styles}
        onClick={props.holdDice}>
            <h2>{props.value}</h2>
        </div>
    )
}