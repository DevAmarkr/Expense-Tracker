import React from 'react';
import { List } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

interface Props {
  Data: any;
}

interface DataProps {
  expenseName: string;
  expenseAmount: number;
}

const ExpenseList: React.FC<Props> = (props) => {
  console.log(props.Data, 'DATA1');

  return (
    <div className="expense_list">
      <h2 className="text">Expense List</h2>
      <ul>
        {props.Data.map((item: any, index: any) => {
          return (
            <div>
              <List.Item key={index} className="list">
                <div className="listDataContainer">
                  <span>{item.expenseName}</span>
                  <span>{item.expenseAmount}</span>
                </div>
                <DeleteTwoTone />
              </List.Item>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default ExpenseList;
