import React, { Component } from 'react';

import { Row, Column } from 'react-foundation';
import './index.css';

class Work extends Component {

	render() {
		const myWork = [{
			'title': 'Professional work',
			'description': 'Web Developer with a JAVA background(SCJP certified) and 8+ years of experience in Commercial Software Industry specialised in HTML, advanced Javascript, CSS and server side scripting technologies. Click here to contact me for a detailed resume.',
			'link': 'mailto:vishakapiyumali@gmail.com',
			'linkDesc': 'click here to open in a new window'
		}, {
			'title': 'Personal Projects',
			'description': 'Please checkout my Github account to see the source code for the personal projects available in the showcase',
			'link': '//github.com/vishaka-piyumali/',
			'linkDesc': 'click here to open in a new window'
		}];
		return (
			<Row className="section-work">
				{myWork.map((work) => {
					return <Column medium={6}>
						<a href={work.link} rel="noopener noreferrer" alt="" target="_blank">
							<h2>{work.title}</h2>
							<hr />
							<p>{work.description}</p>
						</a>
					</Column>
				})}
			</Row>
		)}
}

export default Work;