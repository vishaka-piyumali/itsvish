import React, { Component } from 'react';

import './App.css';
import '../styles/foundation.6.4.css';

import UIHeader from '../components/UI/Header';
import UIMain from '../components/UI/Main';
import UIFooter from '../components/UI/Footer';

class App extends Component {

	render() {
		return (
			<div className="App">
				<div>
					<UIHeader />
					<UIMain />
					<UIFooter />
				</div>
			</div>
		);
	}
}

export default App;
