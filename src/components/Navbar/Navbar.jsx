import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import store from '../../store';
import EDteam from '../../assets/images/edteam.png';
import avatar from '../../assets/images/avatar.jpg';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            authenticate: false
        }

        store.subscribe(() => {
            this.setState({
                user: store.getState().user,
                authenticate: store.getState().authenticate
            })
        })
    }
    render() {
        const AuthMenu = (authenticate) => {
            if(authenticate) {
                return(
                    <React.Fragment>
                    <ul className="navbar-nav from-m">
                        <li className="nav-item"><a>Mis cursos</a></li>
                        <li className="nav-item"><a>Suscripción</a></li>
                        <li className="nav-item"><a className="live-class"><FontAwesome name="play" /> En Vivo</a></li>
                        <li className="nav-item nav-profile"><a>{ this.state.user.firstname } { this.state.user.lastname } <div className="avatar"><img src={ avatar } alt={ this.state.user.firstname }/></div></a></li>
                    </ul>
                    <div className="navbar-toggle to-m"><FontAwesome name="bars" /></div>
                    </React.Fragment>
                )
            } else {
                return(
                    <ul className="navbar-nav">
                        <li className="nav-item"><button className="button btn-success text-small text-uppercase">Registrarse</button></li>
                    </ul>
                )
            }
        }

        return (
            <nav className="navbar">
                <div className="ed-container ed-fluid">
                    <div className="ed-item main-justify">
                        <h1 className="navbar-brand"><img src={ EDteam } className="logo" alt="EDteam" /></h1>
                        { AuthMenu(this.state.authenticate) }
                    </div>
                </div>
            </nav>
        )
    }
}