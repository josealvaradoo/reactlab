import React, { Component } from 'react';
import FormAuth from './components/Forms/FormAuth';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import { connect } from 'react-redux';
import './assets/css/ed-grid.min.css';
import './App.css';
import 'animate.css';
import 'font-awesome/css/font-awesome.min.css';

const App = (props) => {
	return (
		<div className="App">
			<Navbar />
			{ (props.token === null) ? <FormAuth /> : <Courses /> }
		</div>
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
