import ExpenseItem from "./expense_item/ExpenseItem";
import './Expenses.css';
import Card from "../ui/Card";
import ExpenseFilter from "./expense_filter/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./expenses_list/ExpensesList";

const Expenses = (props) => {
  const { expenses = [] , isListLoading = false} = props;
  const [filterYear, setFilterYear] = useState('2021');

  const onChangeFilterHandler = (selected_year) => {
    setFilterYear(selected_year);
    console.log('ghvhkjbnk', selected_year)
  }

  const filter_expenses = expenses.filter(
    (each_expense) => {
      console.log(each_expense.date.getFullYear());
       return (each_expense.date.getFullYear() == filterYear)
  });

  return (
    <Card className="expenses">
        <ExpenseFilter 
            selectedValue={filterYear}
            onChangeFilterHandler={onChangeFilterHandler} 
          />
        <ExpensesList items={filter_expenses} isListLoading={isListLoading}/>
    </Card>
  )
}

export default Expenses;