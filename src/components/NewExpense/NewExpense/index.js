import './style.css';
import ExpenseForm from '../ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setEditing] = useState(false);
    const startEditingHandler = () => {
        setEditing(true);
    }

    const cancelEditingHandler = () => {
        setEditing(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    return (
        <div className="new-expense">

            {!isEditing &&
                <button className='new-expense-button' onClick={startEditingHandler}>
                    Add New Expense
                </button>
            }

            {isEditing &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={cancelEditingHandler}
                />
            }

        </div >
    )
};

export default NewExpense;