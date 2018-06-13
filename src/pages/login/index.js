import React, { Component } from 'react';
import styles from './login.scss';
// import './login.scss';
class Login extends Component {
    
    render() {
        console.log(styles.page);
        return <div className='page'>
            <div className='container'>
                <h2>用户登录</h2>
                <p><span>用户名：</span><input /></p>
                <p><span>密  码：</span><input /></p>
                <p><input type="submit" value="登录" /></p>
                <p><input type="submit" value="创建账号" /></p>
            </div>
        </div>
    }
}

export default Login;