import React,{useState} from "react";
import './newInput.css';
function NewInput(props){
    let bol = true;
    const [usedOn, setUsedOn] = useState('');
    const [useAmount, setAmount] = useState('');
    const [useDate, setDate] = useState('');
    const [addButton, setAddBsutton] = useState(false);
    const [errorView, setErrorView] = useState({
        usedOnE: false,
        useDateE: false,
        useAmountE: false,
    })
    const [usedOnError, setUsedOnError] = useState(false);
    const [useAmountError, setUseAmountError] = useState(false);
    const [useDateError, setUseDateError] = useState(false);

    function inputField(){
        setAddBsutton(true);
    }

    function usedOnHandler(event){
        setUsedOn(event.target.value);
        setUsedOnError(false)
    }
    function amoundChangeHandler(event){
        setAmount(event.target.value);
        setUseAmountError(false);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
        setUseDateError(false);
    }
    function submitHandler(event){
        event.preventDefault();
        let expenseData;
        if(useAmount === '' || usedOn.trim() === '' || useDate === ''){
            if(!useAmount) setUseAmountError(true);
            if(!usedOn.trim()) setUsedOnError(true);
            if(!useDate) setUseDateError(true)

        }else{
            expenseData = {
                usedOn: usedOn,
                amount: useAmount,
                date: new Date(useDate),
            };
            props.onSaveExpenseData(expenseData);

        };
        setUsedOn("");
        setAmount("");
        setDate("");
    }

    return(
        <div>
            <div className={`addButton ${addButton?'hidden':''}`} onClick={inputField}>Add new expense</div>
            <form onSubmit={submitHandler} className={`inputField ${!addButton?'hidden':''}`}>
                <input style={usedOnError?{borderColor:'red'}:{}} placeholder="used on" value={usedOn} onChange={usedOnHandler}></input>
                <input style={useAmountError?{borderColor:'red'}:{}} type="number" placeholder="amount" value={useAmount} onChange={amoundChangeHandler}></input>
                <input style={useDateError?{borderColor:'red'}:{}} type='date' placeholder="date" value={useDate} onChange={dateChangeHandler}></input>
                <button>submit</button>
            </form>
        </div>
        
    )
}

export default NewInput;