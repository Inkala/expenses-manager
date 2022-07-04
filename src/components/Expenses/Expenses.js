import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterChangeHandler = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  const filteredExpenses =
    selectedFilter === 'All'
      ? expenses
      : expenses.filter(
          (exp) => exp.date.getFullYear().toString() === selectedFilter,
        );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        filterValue={selectedFilter}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
