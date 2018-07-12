import React, { Component } from 'react';
import Icon from '../Icon';
import { ICONS } from '../../../utils/Constants';

import './index.css';

class Footer extends Component {
	render() {
		return (
				<footer>
					<ul className="menu align-center">
						<li>
							<a href="https://www.linkedin.com/in/vishaka-piyumali-6a196024/" rel="noopener noreferrer"target="_blank">
								<Icon name={ICONS.LINKEDIN} />
							</a>
						</li>
						<li>
							<a href="https://github.com/vishaka-piyumali">
								<Icon name={ICONS.GITHUB} />
							</a>
						</li>
						<li>
							<a href="mailto:vishakapiyumali@gmail.com">
								<Icon name={ICONS.EMAIL} />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/vishakapiyumali">
								<Icon name={ICONS.FACEBOOK} />
							</a>
						</li>
					</ul>
				</footer>
		)}
}

export default Footer;