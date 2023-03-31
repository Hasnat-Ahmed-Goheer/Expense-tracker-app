import React,{useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) =>{
   

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const [form , setForm] = useState(false);
    const titleHandler = (event) =>{
        // console.log(event.target.value);
        setEnteredTitle(event.target.value)
    }
    const amountHandler = (event) =>{
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }
    const dateHandler = (event) =>{
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        
        const expenseData = {
            title : enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        // console.log(expenseData);
        hideFormHandler();
    }
    
   const showFormHandler = () =>{
    setForm(true);    
   }
   const hideFormHandler = () => {
    setForm(false)
   }

     // one way of writing the useState hook to call each state change individually and the other is to call all the state changes together as shown below
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate:'',
    // });
    // another way to call the event listener function is the following for every function
    //    const titleHandler = (event) =>{
    //   setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    //   })
    // }
    // const amountHandler = (event) =>{
    //    setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    //   })
    // }
    // same for the date too but if the function depends on the previous state then we should not use the above method but instead do it in the form of a function
    // const dateHandler = (event) =>{
    //    setUserInput( (prevState) =>{
    //    return {...prevState,
    //     enteredDate:event.target.value,}
    //   })
    //   this method ensures that the state it receives is always the latest prev snapshot of the state and then we can easily work with it
    
    return (<div>
        
        {form ? 
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input type="text" onChange={titleHandler}  value ={enteredTitle} placeholder="Enter the Expense Item"/>
            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input type="number" placeholder="Enter the Amount" value={enteredAmount} min='0.01' step='0.01' onChange={amountHandler} />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input type="date" min='01-01-2019' max= '31-12-2022' placeholder="Enter the Date" value={enteredDate} onChange={dateHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
         : <button onClick={showFormHandler} >
Add New Expense
    </button>}
    
    </div>
    )

 };


    export default ExpenseForm;