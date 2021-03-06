import React from 'react';
import FontAwesome from 'react-fontawesome';
import store from '../../store';
import { closeSession } from '../../actionCreators';
import { connect } from 'react-redux';
import EDteam from '../../assets/images/EDteam-logo.svg';
import avatar from '../../assets/images/avatar.jpg';

const toggleNavbar = () => {
    document.getElementsByClassName('nav-dropdown')[0].classList.toggle('active');
}

const AuthMenu = (props) => {
    if(props.token !== null) {
        return(
            <React.Fragment>
            <ul className="navbar-nav from-m">
                <li className="nav-item"><a>Mis cursos</a></li>
                <li className="nav-item"><a>Suscripción</a></li>
                <li className="nav-item"><a className="live-class"><FontAwesome name="play" /> En Vivo</a></li>
                <li className="nav-item nav-profile dropdown" onClick={ toggleNavbar }>
                    <a>{ props.user.firstname } { props.user.lastname } <div className="avatar"><img src={ avatar } alt={ props.user.firstname }/></div></a>
                    <ul className="nav-dropdown">
                        <li className="dropdown-item"><a onClick={ props.handleCloseSession }>Salir</a></li>
                    </ul>
                </li>
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

const Navbar = props => {
    return (
        <nav className="navbar">
            <div className="ed-container ed-fluid">
                <div className="ed-item main-justify">
                    <h1 className="navbar-brand"><img src={ EDteam } className="logo" alt="EDteam" /></h1>
                    { AuthMenu(props) }
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCloseSession() {
            store.dispatch(closeSession());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);