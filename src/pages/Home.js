import React, { Component } from 'react';

import './home.css';
import jQuery from 'jquery'
const $ = jQuery;

class Home extends Component {

    getStyle = (type) => {
        if (type === 0) {
            return { background: 'red' };
        } else if (type === 1) {
            return { background: 'green' };
        } else if (type === 2) {
            return { background: 'blue' };
        }
    }

    render() {
        const numbers = [
            { number: 1, type: 0 },
            // { number: 2, type: 0 },
            // { number: 3, type: 0 },
            // { number: 4, type: 0 },
            // { number: 5, type: 1 },
            // { number: 6, type: 1 },
            // { number: 7, type: 1 },
            // { number: 8, type: 1 },
            // { number: 9, type: 1 },
            // { number: 10, type: 1 },
            // { number: 11, type: 1 },
            // { number: 12, type: 2 },
            // { number: 13, type: 2 },
            // { number: 14, type: 2 },
            // { number: 15, type: 2 },
            // { number: 16, type: 2 },
            // { number: 17, type: 2 },
            // { number: 18, type: 2 },
            // { number: 19, type: 2 },
            // { number: 20, type: 2 },
            // { number: 21, type: 0 },
            // { number: 22, type: 0 },
            // { number: 23, type: 0 },
            // { number: 24, type: 0 },
            // { number: 25, type: 2 },
            // { number: 26, type: 2 },
            // { number: 27, type: 2 },
            // { number: 28, type: 2 },
            // { number: 29, type: 2 },
            // { number: 30, type: 2 },
            // { number: 31, type: 2 },
            // { number: 32, type: 2 },
            // { number: 33, type: 2 },
            // { number: 34, type: 2 },
            // { number: 35, type: 2 },
            // { number: 36, type: 2 },
            // { number: 37, type: 2 },
            // { number: 38, type: 2 },
            // { number: 39, type: 2 },
            // { number: 40, type: 2 },
            // { number: 41, type: 2 },
            // { number: 42, type: 2 },
            // { number: 43, type: 2 },
            // { number: 44, type: 2 },
            // { number: 45, type: 2 },
            // { number: 46, type: 2 },
            // { number: 47, type: 2 },
            // { number: 48, type: 2 },
            // { number: 49, type: 2 },
        ];
        return (
            <div className='app'>
                <p>请选择:</p>
                <select className='sel' ref={(ref) => {
                    $(ref).change(() => {
                        console.log($(ref).val());
                    });
                }}>
                    <option value="总共">总共</option>
                    <option value="金潜">金潜</option>
                    <option value="金鹏">金鹏</option>
                </select>
                <div className='container'>
                    {
                        numbers.map((c) => {
                            return (
                                <div key={c.number} className='num' title='5￥' style={this.getStyle(c.type)} onClick={() => { console.log(c.number); }}>{c.number} </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;