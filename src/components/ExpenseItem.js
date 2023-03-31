import React/*,{useState}*/ from 'react';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import Card from './Card/Card';


// props meaning properties:another name for the attributes(can be any other name as in JS) contains all the attributes that are called on the custom element in APP.js that can be used here
// {} is used to enter an element in the tags as shown below

function ExpenseItem(props){
    // using the useState hook for changing the value which gives an array of the current value and a function that can be used to change the value and the function naming convention is set<whatever name>

    // const  [title,setTitle] = useState(props.title);
    // const clickHandler = () => {
    //     setTitle('New Item');
    // }

    return (

        <Card className='expense-item'>
           <ExpenseDate date = {props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* each event handler in react starts like this */}
            {/* <button onClick={clickHandler}>Click</button> */}
        </Card>

    );

}

export default ExpenseItem;