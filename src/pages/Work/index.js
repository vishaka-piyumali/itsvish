import React, { Component } from 'react';

import { Row, Column } from 'react-foundation';
import './index.css';

class Work extends Component {

	render() {
		const myWork = [{
			'title': 'Personal Portfolio',
			'description': 'This is my online portfolio hand-crafted myself using ReactJs framework. If you are keen to look at the code behind, click here to check it out in the github.',
			'link': '//github.com/vishaka-piyumali/portfolio',
			'linkDesc': 'click here to open in a new window'
		},{
			'title': 'Professional work',
			'description': 'Web Developer with a JAVA background(SCJP certified) and 8+ years of experience in Commercial Software Industry specialised in HTML, advanced Javascript, CSS and server side scripting technologies. Click here to contact me for a detailed resume.',
			'link': 'mailto:vishakapiyumali@gmail.com',
			'linkDesc': 'click here to open in a new window'
		}];
		return (
			<Row className="section-work">
				{myWork.map((work) => {
					return <Column large={6}>
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