import React from "react";
import './ExpenseList.css';

import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) =>{
  if(props.filteredYears.length === 0){
    return <h2 className="expenses-list__fallback">Expenses Not Available</h2>
  }

  return(
    <ul className="expenses-list">
        {props.filteredYears.map((expense) => 
        <ExpenseItem  key = {expense.id}
        title ={expense.title}
        amount = {expense.amount}
        date = {expense.date}
        />
      )}
    </ul>
  )


}

export default ExpenseList;