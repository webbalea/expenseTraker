import ExpenseItem from "../ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = props => {
    if (props.items.length === 0) {
        return (
            <p className="expenses-list__fallback">
                No expenses found
            </p>
        )
    }

    return <ul className="expenses-list">
        {props.items.map((expenseItem) => (
            <ExpenseItem
                key={expenseItem.id}
                title={expenseItem.title}
                amount={expenseItem.amount}
                date={expenseItem.date}
            >
            </ExpenseItem>
        ))}
    </ul>
}

export default ExpensesList;
