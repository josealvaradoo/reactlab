import React, { Component } from 'react';
import FormAuth from './components/Forms/FormAuth';
import './assets/css/ed-grid.min.css';
import './App.css';
import 'animate.css';

class App extends Component {
	render() {
		return (
			<div className="App cross-center">
				<div className="ed-container main-center">
					<div className="ed-item m-30">
						<FormAuth />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
