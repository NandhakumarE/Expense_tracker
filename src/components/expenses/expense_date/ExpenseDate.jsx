import './ExpenseDate.css';
const ExpenseDate = (props) => {

    const { date } = props;
    const month = date.toLocaleString('US-en', {month: 'long'});
    const date_ = date.toLocaleDateString('US-en', {day: 'numeric'});
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{date_}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    )
};

export default ExpenseDate;