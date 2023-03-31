import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {
const addExpenseDataHandler = (expenseData) =>{
    const expense = {
        ...expenseData,
        id: (Math.floor(Math.random())).toString(),
    };
    // props.onSaveExpenseData(expense);
    // console.log(expense);
    props.onNewExpenseData(expense)
}

return <div className="new-expense">
    <ExpenseForm  onSaveExpenseData = {addExpenseDataHandler}/>
</div>

}

export default NewExpense;