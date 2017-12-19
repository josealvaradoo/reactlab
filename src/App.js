import React from 'react';
import FormAuth from './components/Forms/FormAuth';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import { connect } from 'react-redux';
import './assets/css/ed-grid.min.css';
import './App.css';
import 'animate.css';
import 'font-awesome/css/font-awesome.min.css';

const App = (props) => {
	console.log(props.token)
	return (
		<Router>
		<div className="App">
				<Navbar />
				<Switch>
					<Route exact path='/' render={() => (
						(props.token === null) ? (
							<FormAuth />
						) : (
							<Redirect to='courses'/>
						))} />
					<PrivateRoute exact path='/courses' token={ props.token } component={ Courses }/>
				</Switch>
		</div>
		</Router>
	);
}

const mapStateToProps = (state) => {
	return {
		token: state.token
	}
}

const mapDispatchToProps = () => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
