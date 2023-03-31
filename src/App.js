import React,{useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

 const DUMMY_EXPENSES = [
        { id: "e1", title: "Washer", amount: 2344, date: new Date(2020, 2, 20) },
        {
          id: "e2",
          title: "Car Insurance",
          amount: 234,
          date: new Date(2020, 3, 12),
        },
        { id: "e3", title: " New TV", amount: 2000, date: new Date(2020, 2, 2) },
        { id: "e4", title: "New Desk", amount: 234, date: new Date(2020, 4, 3) },
        
      ];

function App(props) {
  
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

 const expenseDataHandler = (expenseData) => {
  setExpenses(prevExpense => {
     return [expenseData,
      ...prevExpense,
     ]
  } )
}
  
  
  return (
    <div>
      <NewExpense onNewExpenseData ={expenseDataHandler}/>
    <Expenses expenses = {expenses}  />
    </div>
  );
}

export default App;
