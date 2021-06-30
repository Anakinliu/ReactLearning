import React, { Component } from 'react'
import  axios  from 'axios';

export default class Main extends Component {

    handleBtn1 = () => {
        axios.get('http://localhost:3000/api1/students')
            .then((response) => {
                console.log('students axios get');
                console.log('response : ', response);
                console.log('response.data : ', response.data);
            })
    };
    handleBtn2 = () => {
        axios.get('http://localhost:3000/api2/cars')
            .then((response) => {
                console.log('cars axios get');
                console.log('response : ', response);
                console.log('response.data : ', response.data);
            })
    };

    render() {
        return (
            <div id="data-list">
                <button onClick={ this.handleBtn1 }>student发送GET请求</button>
                <button onClick={ this.handleBtn2 }>car发送GET请求</button>
            </div>
        )
    };
}
