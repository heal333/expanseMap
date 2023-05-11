import React,{useState} from 'react';
import Expense from './compo/expanse';
import NewInput from './compo/newInput';
import ExpanseBarCard from './compo/expanseBarCard';
import Filter from './compo/filter'

function App() {
  const expanse = [
    {
      usedOn: "car",
      amount: "580000",
      date: new Date(2022,10,8)
    },
    {
      usedOn: "loan",
      amount: "25000",
      date: new Date(2023,8,10)
    },
    {
      usedOn:"house",
      amount:"100000",
      date: new Date(2021,1,2),
    }
  ]


  const [statefulExp, setExpanse] = useState(expanse);
  const [filteredExp, setFilteredExp] = useState(expanse);

  function newExpanse(props) {
    setExpanse((prv)=>{
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
      <NewInput onSaveExpenseData={newExpanse} />
      <ExpanseBarCard expanseData={filteredExp} key={2}></ExpanseBarCard>
      <Filter className='filter' yearChange={yearChangeHandeler}></Filter>
      <div className='expanseList'>
        {filteredExp.map((data) => (
          <Expense usage={data.usedOn} value={data.amount} date={data.date}></Expense>
        ))}
      </div>
    </div>
  );
}

export default App;
