import React from "react";
import ExpenseItem from "../expense_item/ExpenseItem";
import './ExpensesList.css';
const ExpensesList = (props) => {

  const {items, isListLoading = false} = props;
    if (items.length === 0 || !items) {
     return (
        <h2 className="expenses-list__fallback">No expenses found.</h2>
     );
    }

   return (
        <ul className="expenses-list">
            {
                items.map(each_expense => (
                    <ExpenseItem
                        key={each_expense.id}
                        date={each_expense.date}
                        title={each_expense.title}
                        amount={each_expense.amount}
                        isLoading={isListLoading}
                    />
                ))
            }
        </ul>
    )
  }

  export default ExpensesList;