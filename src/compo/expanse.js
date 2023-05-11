import './expanse.css'
function Expense(attri){
    return (<div className='expanse'>
        <div>your expanse on {attri.date.toDateString()}</div>
        <div className='usedOn'>{attri.usage}</div>
        <div></div>
        <div></div>
        <div className='value'>{attri.value}</div>
    </div>)

};

export default Expense;