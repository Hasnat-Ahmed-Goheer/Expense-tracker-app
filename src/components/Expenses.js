import React,{useState} from 'react';
import './Expenses.css';
import Card from './Card/Card';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpensesChart';

function Expenses(props){

  const [year,setYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
  setYear(selectedYear);
  }
  const filteredYears = props.expenses.filter((expense)=>{ return expense.date.getFullYear().toString() === year});

  
    // array doesn,t have to be deconstructed to be used as a JSX element as shown below meaning that {<array>} can be used as is and React will render it by itself NICE!!
  return(
        <Card className='expenses'>
     <ExpenseFilter selected ={year} onDropFilter = {filterChangeHandler}/>
     <ExpenseChart dataPoints ={filteredYears}/>
        <ExpenseList filteredYears ={filteredYears}/>

        
        {/* we can use the teritary conditonals for this too like
        filterYears.length === 0 ? <p></p> : filterYears.map(); */
       /* <ExpenseItem
        id={props.expenses[0].id}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        id={props.expenses[1].id}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        id={props.expenses[2].id}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        id={props.expenses[3].id}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem> */}
     
    </Card>
 );

}

export default Expenses;