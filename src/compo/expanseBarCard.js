import React,{setState} from "react";
import ExpanseBar from './expanseBar';
import './expanseBarCard.css';


function ExpanseBarCard(props){
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
    for(let i=0;i<props.expanseData.length;i++){
        dataPoint[props.expanseData[i].date.getMonth()].amount += parseInt(props.expanseData[i].amount)
    };
    let totalAmount = props.expanseData.reduce(function red(total,n){
        return total + parseInt(n.amount)
    },0);
    return<div className="barCard">
        {dataPoint.map((item)=>{
            return <div className="barItem">
                <ExpanseBar data ={item} totalAmount={totalAmount}></ExpanseBar>
            <label>{item.month}</label>
            </div>
        })}
    </div>
}

export default ExpanseBarCard;