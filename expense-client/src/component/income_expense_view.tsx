import React from 'react';

interface Props {
  incomeName: string;
  incomeAmount: number;
  expenseName: string;
  expenseAmount: number;
}

const IncomeExpenseViewTemplate: React.FC<Props> = ({
  incomeName,
  incomeAmount,
  expenseName,
  expenseAmount,
}) => {
  return (
    <div id="IncomeExpense">
      <div>
        <h2>{incomeName.toLocaleUpperCase() || 'INCOME'}</h2>
        <h3>${incomeAmount}</h3>
      </div>
      <div>
        <h2>EXPENSE</h2>
        <h3>${expenseAmount}</h3>
      </div>
    </div>
  );
};
export default IncomeExpenseViewTemplate;
