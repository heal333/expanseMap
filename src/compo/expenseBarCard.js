import React,{setState} from "react";
import ExpenseBar from './expenseBar';
import './expenseBarCard.css';


function ExpenseBarCard(props){
    let totalAmount = 1;
    const dataPoint = [
        {month:'Jan', amount:0},
        {month:'Feb', amount:0},
        {month:'Mar', amount:0},
        {month:'Apr', amount:0},
        {month:'May', amount:0},
        {month:'Jun', amount:0},
        {month:'Jul', amount:0},
        {month:'aug', amount:0},
        {month:'Sep', amount:0},
        {month:'Oct', amount:0},
        {month:'Nov', amount:0},
        {month:'Dec', amount:0},
    ];

    if(props.expenseData.length !== 0){
        for(let i=0;i<props.expenseData.length;i++){
        dataPoint[props.expenseData[i].date.getMonth()].amount += parseInt(props.expenseData[i].amount)}
        totalAmount = props.expenseData.reduce(function red(total,n){
            return total + parseInt(n.amount)
        },0);
    
    };
    return<div className="barCard">
        {dataPoint.map((item)=>{
            return <div className="barItem">
                <ExpenseBar data ={item} totalAmount={totalAmount}></ExpenseBar>
            <label>{item.month}</label>
            </div>
        })}
    </div>
}

export default ExpenseBarCard;