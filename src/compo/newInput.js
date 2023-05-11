import React,{useState} from "react";
import './newInput.css';
function NewInput(props){
    const [usedOn, setUsedOn] = useState('');
    const [useAmount, setAmount] = useState('');
    const [useDate, setDate] = useState('');
    const [addButton, setAddBsutton] = useState(false);

    function inputField(){
        setAddBsutton(true);
    }

    function usedOnHandler(event){
        setUsedOn(event.target.value);
    }
    function amoundChangeHandler(event){
        setAmount(event.target.value);
    }
    function dateChangeHandler(event){
        setDate(event.target.value)
    }
    function submitHandler(event){
        event.preventDefault();
        const expenseData = {
            usedOn: usedOn,
            amount: useAmount,
            date: new Date(useDate),
        };
        props.onSaveExpenseData(expenseData);
        setUsedOn("");
        setAmount("");
        setDate("");
    }

    return(
        <div>
            <div className={`addButton ${addButton?'hidden':''}`} onClick={inputField}>Add new expense</div>
            <form onSubmit={submitHandler} className={`inputField ${!addButton?'hidden':''}`}>
                <input placeholder="used on" value={usedOn} onChange={usedOnHandler}></input>
                <input type="number" placeholder="amount" value={useAmount} onChange={amoundChangeHandler}></input>
                <input type='date' placeholder="date" value={useDate} onChange={dateChangeHandler}></input>
                <button>submit</button>
            </form>
        </div>
        
    )
}

export default NewInput;