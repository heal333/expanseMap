import React,{useState} from "react";
import './expanseBar.css'
function ExpanseBar(props){
    let heightFill = `${(props.data.amount * 100)/props.totalAmount}%`;
    return <div>
        <div className="outerFill">
            <div className="innerFill" style={{height:`${heightFill}`}}></div>
        </div>
    </div>
}

export default ExpanseBar;