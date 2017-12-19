import React, { Component } from 'react';
import axios from 'axios';
import store from '../../store';
import { authenticate } from '../../actionCreators';

export default class FormAuth extends Component {
    constructor() {
        super();
        this.state = {
            courses: [],
            user: {},
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
        // API Request
        axios.post('https://app.ed.team:1901/api/v1/login', data)
             .then(response => {
                 // Clear input
                 document.getElementById('email').value= '';
                 document.getElementById('password').value= '';
                 // Logged!
                 if(response.status === 200) {
                    this.userAuthenticate(response.data.data.user, response.data.data.token);
                    localStorage.setItem('token', response.data.data.token);
                 }
             })
             .catch(err => {
                 console.log(err)
             })
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
            return null;
        }
    }

    userAuthenticate(user, token) {
        store.dispatch(authenticate(user, token));
    }
}
