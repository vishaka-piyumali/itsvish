import React, { Component } from 'react';

import './normalize.css';
import '../styles/foundation.6.4.css';

import './App.css';

import UIPage from '../components/UI/Page';

class App extends Component {

	render() {
		return (
			<div className="App">
				<UIPage />
			</div>
		);
	}
}

export default App;
