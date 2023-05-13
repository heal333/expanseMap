import './expense.css'
function Expense(attri){
    return (<div className='expense'>
        <div>your expense on {attri.date.toDateString()}</div>
        <div className='usedOn'>{attri.usage}</div>
        <div></div>
        <div></div>
        <div className='value'>{attri.value}</div>
    </div>)

};

export default Expense;