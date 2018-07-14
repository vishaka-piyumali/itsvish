import React, { Component } from 'react';
import Icon from '../Icon';
import { ICONS } from '../../../utils/Constants';

import './index.css';

class Footer extends Component {
	render () {
		const socialLinks = [{
			link: '//www.linkedin.com/in/vishaka-wele-uhulanage-6a196024/',
			desc: 'Linkedin',
			icon: ICONS.LINKEDIN
		},
		{
			link: '//github.com/vishaka-piyumali',
			desc: 'Github',
			icon: ICONS.GITHUB
		},
		{
			link: 'mailto:vishakapiyumali@gmail.com',
			desc: 'Linkedin',
			icon: ICONS.EMAIL
		},
		{
			link: '//www.facebook.com/vishakapiyumali',
			desc: 'Facebook',
			icon: ICONS.FACEBOOK
		}];
		return (
			<footer>
				<ul className="menu align-center">
					{socialLinks.map((social) => {
					return (
						<li>
							<a href={social.link} rel="noopener noreferrer" target="_blank">
								<Icon name={social.icon}/>
							</a>
						</li>
						)
					})}
				</ul>
			</footer>
		)}
}

export default Footer;