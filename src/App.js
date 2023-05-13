import React,{useState} from 'react';
import Expense from './compo/expense';
import NewInput from './compo/newInput';
import ExpenseBarCard from './compo/expenseBarCard';
import Filter from './compo/filter'

function App() {
  const expense = [
    {
      usedOn: "car",
      amount: "28000",
      date: new Date(2022,10,8)
    },
    {
      usedOn: "university",
      amount: 25000,
      date: new Date(2023,1,15)
    },
    {
      usedOn: "loan",
      amount: "25000",
      date: new Date(2023,8,10)
    },
    {
      usedOn:"house",
      amount:"10000",
      date: new Date(2021,1,2),
    },
    {
      usedOn: "pc",
      amount: 70000,
      date: new Date(2021,3,1)
    },
  ]


  const [statefulExp, setExpense] = useState(expense);
  const [filteredExp, setFilteredExp] = useState(expense);

  function newExpense(props) {
    setExpense((prv)=>{
      return [props, ...prv]
    });
    setFilteredExp((prv)=>{
      return [props, ...prv]
    })

  }
  function yearChangeHandeler(year){
    if(!(year ==='All')){
      setFilteredExp(statefulExp.filter(exp=>{
        return exp.date.getFullYear().toString() === year;
      }))
    }else{
      setFilteredExp(statefulExp)
    }
  }


  return (
    <div>
      <NewInput onSaveExpenseData={newExpense} />
      <ExpenseBarCard expenseData={filteredExp} key={2}></ExpenseBarCard>
      <Filter className='filter' yearChange={yearChangeHandeler}></Filter>
      <div className='expenseList'>
        {filteredExp.length === 0 ? 'no expense in this year': <div>{filteredExp.map((data) => (
          <Expense usage={data.usedOn} value={data.amount} date={data.date}></Expense>
        ))}</div>}
      </div>
    </div>
  );
}

export default App;
