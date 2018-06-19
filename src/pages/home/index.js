import React, { Component } from 'react';
import { Form, Table, Input, Button } from 'antd';

import _ from 'lodash';

const FormItem = Form.Item;


export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const dataSource = [
      {
        index: '1',
        number: 10,
        income: 100,
        payment: 50,
        profit: 50
      },
      {
        index: '2',
        number: 10,
        income: 100,
        payment: 50,
        profit: 50
      },
      {
        index: '3',
        number: 10,
        income: 100,
        payment: 50,
        profit: 50
      }
    ];

    const columns = [
      {
        title: '期数',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: '开奖号码',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: '本期收入',
        dataIndex: 'income',
        key: 'income',
      },
      {
        title: '本期支出',
        dataIndex: 'payment',
        key: 'payment',
      },
      {
        title: '本期盈利',
        dataIndex: 'profit',
        key: 'profit',
      },
      {
        title: '详情',
        key: 'action',
        render: (text, record) => {
          return (
            <Button>详情</Button>
          );
        }
      }
    ];

    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Table dataSource={dataSource} columns={columns} footer={() => {
          return (
            <div style={{ width: '100%', height: '100%', justifyContent: 'center', display: 'flex' }}>
              <Button icon="plus-circle-o" size='large'>添加</Button>
            </div>

          );
        }} />
      </div>
    );
  }
}
