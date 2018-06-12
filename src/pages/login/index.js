import React, { Component } from 'react';
import styles from './login.scss';

class Login extends Component {
    render() {
        return <div className={styles.page}>
            <div className={styles.container}>
                {/* <h2>用户登录</h2>
                <p><span>用户名：</span><input /></p>
                <p><span>密  码：</span><input /></p>
                <p><input type="submit" value="登录" /></p>
                <p><input type="submit" value="创建账号" /></p> */}
            </div>
        </div>
    }
}

export default Login;