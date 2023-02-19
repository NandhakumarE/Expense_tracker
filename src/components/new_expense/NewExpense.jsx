import React, { useState } from "react";
import NewExpenseForm from "./new_expense_form/NewExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditing = () => setIsEditing(true);
    const stopEditing = () => setIsEditing(false);

    const onSaveNewExpense = (expense) => {
      const new_expense_data = {
          ...expense,
          id: Math.random.toString(),
      }
      console.log('onSaveNewExpense', new_expense_data);
      props.onAddNewExpense(new_expense_data);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>New Expense</button>}
            {isEditing && <NewExpenseForm  onSave={onSaveNewExpense} onCancel={stopEditing}/>}
        </div>
    );
}

export default NewExpense;