import React, { Component } from 'react';

class CreateAccount extends Component {
    render() {
        return <div>
            <h2>创建账号</h2>
            <p><span>用户名：</span><input /></p>
            <p><span>密码：</span><input /></p>
            <p><span>重复密码：</span><input /></p>
            <p><input type="submit" value="创建账号" /></p>
        </div>
    }
}

export default CreateAccount;