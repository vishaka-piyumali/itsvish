import React, { Component } from 'react';

import { Row, Column } from 'react-foundation';
import './index.css';

class Work extends Component {
	render() {
		return (
			<Row className="section-work">
				<Column className="right-border" large={6}>
					<a href="https://github.com/vishaka-piyumali/portfolio" rel="noopener noreferrer" alt="githib click here to open in a new window" target="_blank">
						<h3>Personal portfolio</h3>
						<hr />
						<p>This is my online portfolio hand-crafted myself using RactiveJs framework. If you are keen to look at the code behind, click here to check it out in the github.</p>
					</a>
				</Column>
				<Column large={6}>
					<a href="mailto:vishakapiyumali@gmail.com" rel="noopener noreferrer" alt="click here to send an email">
						<h3>Professional work</h3>
						<hr />
						<p>Web Developer with a JAVA background(SCJP certified) and 8+ years of experience in Commercial Software Industry specialised in HTML, advanced Javascript, CSS and server side scripting technologies. Click here to contact me for a detailed resume.</p>
					</a>
				</Column>
			</Row>
		)}
}

export default Work;