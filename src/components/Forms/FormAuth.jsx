import React, { Component } from 'react';
import axios from 'axios';
import store from '../../store';
import { authenticate } from '../../actionCreators';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

export default class FormAuth extends Component {
    constructor() {
        super();
        this.state = {
            courses: [],
            user: {},
            auth: null,
            token: null
        }

        store.subscribe(() => {
            this.setState({
                auth: store.getState().auth,
                user: store.getState().user,
                token: store.getState().token
            })
        })

        this.authenticate = this.authenticate.bind(this);
    }

    authenticate(e) {
        e.preventDefault();
        // Params
        const form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        const data = { email, password };
        // API Request
        axios.post('https://app.ed.team:1901/api/v1/login', data)
             .then(response => {
                 // Clear input
                 document.getElementById('email').value= '';
                 document.getElementById('password').value= '';
                 // Show notification
                 if(response.status === 200) {
                    this.userAuthenticate(response.data.data.user, true, response.data.data.token);
                    localStorage.setItem('token', response.data.data.token);
                 }
             })
             .catch(err => {
                 console.log(err)
                 // Show notification
                 this.setState({ auth: false });
             })

        // Remove notification
        setTimeout(() => {
            const notification = document.getElementsByClassName('alert');
            if (notification.length > 0) {
                notification[0].classList.add('bounceOutDown');
            }
        }, 5000);
    }

    render() {
        if(localStorage.getItem('token') === null) {
            return (
                <main className="main cross-center">
				    <div className="ed-container ed-fluid main-center">
    					<div className="ed-item m-35">
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
                            </form>
                        </div>
                    </div>
                </main>
            )
        } else {
            return (
                <Router>
                    <Switch>
                        <Redirect to='courses'/>
                    </Switch>
                </Router>
            )
        }
    }

    userAuthenticate(user, auth, token) {
        store.dispatch(authenticate(user, auth, token));
    }
}
