import React, { Component } from 'react';
import FormAuth from './components/Forms/FormAuth';
import Navbar from './components/Navbar/Navbar';
import './assets/css/ed-grid.min.css';
import './App.css';
import 'animate.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {}
		}
	}
	render() {
		return (
			<div className="App">
				<Navbar />
				<main className="main cross-center">
					<div className="ed-container ed-fluid main-center">
						<div className="ed-item m-30">
							<FormAuth />
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
