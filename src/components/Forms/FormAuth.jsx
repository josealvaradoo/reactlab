import React, { Component } from 'react';
import axios from 'axios';
import Alert from '../Alerts/Alert';

export default class FormAuth extends Component {
    constructor() {
        super();
        this.state = {
            courses: [],
            user: {},
            authenticate: null,
            token: null
        }

        this.authenticate = this.authenticate.bind(this);
    }

    authenticate(e) {
        e.preventDefault();
        // Params
        const form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        const data = { email, password };
        //const headers = { 'Content-Type': 'application/json' };
        console.log(data);
        // API Request
        axios.post('https://app.ed.team:1901/api/v1/login', data)
             .then(response => {
                 console.log(response)
                 // Clear input
                 document.getElementById('email').value= '';
                 document.getElementById('password').value= '';
                 // Show notification
                 if(response.status === 200) this.setState({ authenticate: true });
             })
             .catch(err => {
                 console.log(err)
                 // Show notification
                 this.setState({ authenticate: false });
             })

        // Remove notification
        setTimeout(() => {
            const notification = document.getElementsByClassName('alert');
            if (notification.length > 0) {
                notification[0].classList.add('bounceOutDown');
            }
        }, 5000);

        this.setState({ authenticate: null });
    }

    render() {
        // Select a notification to show to user
        const notifications = () => {
            switch(this.state.authenticate) {
                case true:
                    return <Alert type="success" title="Successful" text="Has iniciado sesión exitosamente"/>
                case false:
                    return <Alert type="danger" title="Error" text="Las credenciales no coinciden"/>
                default:
                    return null;
            }
        }

        return (
            <form onSubmit={ this.authenticate } className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" autoComplete="off" required="required" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" autoComplete="off" required="required" className="form-control" id="password"/>
                </div>
                <div className="form-group main-end">
                    <button type="submit" className="button btn-primary btn-block">Acceder</button>
                </div>
                <br/>
                { notifications() }
            </form>
        )
    }
}
