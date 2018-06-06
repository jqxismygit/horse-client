import React, { Component } from 'react';

class Login extends Component {
    render() {
        return <div>
            <h2>用户登录</h2>
            <p><span>用户名：</span><input /></p>
            <p><span>密  码：</span><input /></p>
            <p><input type="submit" value="登录" /></p>
            <p><input type="submit" value="创建账号" /></p>
        </div>
    }
}

export default Login;