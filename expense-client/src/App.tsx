import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/header';
import IncomeExpenseViewTemplate from './component/income_expense_view';
import IncomeExpenseFormTemplate from './component/income_expense_form';
import ExpenseList from './component/expense_list';
import { Button } from 'antd';

const App: React.FC = () => {
  let [incomeName, setIncomeName] = useState('');
  let [incomeAmount, setIncomeAmount] = useState(0);

  let [expenseName, setExpenseName] = useState('');
  let [expenseAmount, setExpenseAmount] = useState(0);

  let [data, setData]: any = useState([]);

  let changeIncomeName = (incomeName: string) => {
    setIncomeName(incomeName);
  };

  let changeIncomeAmount = (incomeAmount: number) => {
    setIncomeAmount(incomeAmount);
  };

  let changeExpenseName = (expenseName: string) => {
    setExpenseName(expenseName);
  };

  let changeExpenseAmount = (expenseAmount: number) => {
    setExpenseAmount(expenseAmount);
  };

  let onIncomeSave = (value: object) => {
    console.log(value, 'onIncomeSave');
  };
  let onExpenseSave = (value: any) => {
    let newData = [];
    newData.push(value);
    setData([...data, ...newData]);
  };

  useEffect(() => {
    console.log(data, 'DATA');
  }, [data]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div id="IE_conatiner">
          <IncomeExpenseViewTemplate
            incomeName={incomeName}
            incomeAmount={incomeAmount}
            expenseName={expenseName}
            expenseAmount={expenseAmount}
          />
          <IncomeExpenseFormTemplate
            incomeName={incomeName}
            incomeAmount={incomeAmount}
            expenseName={expenseName}
            expenseAmount={expenseAmount}
            changeIncomeName={changeIncomeName}
            changeIncomeAmount={changeIncomeAmount}
            changeExpenseName={changeExpenseName}
            changeExpenseAmount={changeExpenseAmount}
            onIncomeSave={onIncomeSave}
            onExpenseSave={onExpenseSave}
          />
          <ExpenseList Data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
