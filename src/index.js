import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps/App';

import { HashRouter } from 'react-router-dom';

ReactDOM.render((
	<HashRouter>
		<App />
	</HashRouter>
), document.getElementById('root'));
