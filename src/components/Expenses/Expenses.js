import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses, onFilterExpenses }) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  const filterChangeHandler = (filterValue) => {
    setSelectedYear(filterValue);
    onFilterExpenses(filterValue);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        filterValue={selectedYear}
      />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
