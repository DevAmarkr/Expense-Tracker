import React, { useState } from 'react';
import { Select, InputNumber, Input, Button } from 'antd';
const { Option } = Select;

interface Props {
  incomeName: string;
  incomeAmount: number;
  expenseName: string;
  expenseAmount: number;
  changeIncomeName(name: string): any;
  changeIncomeAmount(name: number): any;
  changeExpenseName(name: string): any;
  changeExpenseAmount(name: number): any;
  onIncomeSave(name: object): any;
  onExpenseSave(name: object): any;
}

const IncomeExpenseFormTemplate: React.FC<Props> = ({
  incomeName,
  incomeAmount,
  expenseName,
  expenseAmount,
  changeIncomeName,
  changeIncomeAmount,
  changeExpenseName,
  changeExpenseAmount,
  onIncomeSave,
  onExpenseSave,
}) => {
  return (
    <div id="IncomeExpense">
      <div>
        <Input
          value={incomeName}
          placeholder="Income Name"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            changeIncomeName(e.currentTarget.value)
          }
        />
        <InputNumber
          value={incomeAmount}
          className="inputNumber"
          placeholder="$ Amount"
          onChange={(e) => changeIncomeAmount(Number(e))}
        />
        <Button
          type="primary"
          className="button"
          onClick={() => onIncomeSave({ incomeName, incomeAmount })}
        >
          Add Income
        </Button>
      </div>
      <div>
        <Input
          value={expenseName}
          placeholder="Expense Name"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            changeExpenseName(e.currentTarget.value)
          }
        />
        <InputNumber
          value={expenseAmount}
          className="inputNumber"
          placeholder="$ Amount"
          onChange={(e) => changeExpenseAmount(Number(e))}
        />
        <Button
          type="primary"
          danger
          className="button"
          onClick={() => onExpenseSave({ expenseName, expenseAmount })}
        >
          Add Expense
        </Button>
      </div>
    </div>
  );
};
export default IncomeExpenseFormTemplate;
