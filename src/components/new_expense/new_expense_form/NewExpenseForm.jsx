import React, { useState } from "react";
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const onTitleChangehandler = (event) => setEnteredTitle(event.target.value);
    const onAmounChangehandler = (event) => setEnteredAmount(event.target.value);
    const onDateChangehandler = (event) => setEnteredDate(event.target.value);

    const onFormSubmit = (event) => { 
        event.preventDefault();
        const new_expense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSave(new_expense);
        console.log('new_expense', new_expense);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value ={enteredTitle} onChange={onTitleChangehandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0" value={enteredAmount} onChange={onAmounChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2025-01-01" value={enteredDate} onChange={onDateChangehandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;