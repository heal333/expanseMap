import React,{useState} from "react";
import './expenseBar.css'
function ExpenseBar(props){
    let heightFill = `${(props.data.amount * 100)/props.totalAmount}%`;
    return <div>
        <div className="outerFill">
            <div className="innerFill" style={{height:`${heightFill}`}}></div>
        </div>
    </div>
}

export default ExpenseBar;