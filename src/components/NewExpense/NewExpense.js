import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  };

  const showFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className='new-expense'>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideForm={showFormHandler}
        />
      ) : (
        <button onClick={showFormHandler}>New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
