import React, { Component } from 'react';

import skillsBanner from './skills.png';

import { Row, Column } from 'react-foundation';
import { SKILLS } from '../../../utils/Constants';

import './index.css';

class Skills extends Component {
	render() {

		return (
			<div>
				<Row className="section-skills">
					<Column className="show-for-large" medium={6}>
						<img src={skillsBanner} alt="skills" />
					</Column>
					<Column mediumn={12} large={6}>
						<ul className="skill-categories">
							{SKILLS.map((category) => {
								return (
									<li key={category.title} className="category" title="40">
										<div className="title">{category.title}</div>
										<div className="skillset">
											{category.skills.map((skill) => {
											 return <span key={skill} className="skill">{skill}</span>
											})}
										</div>
									</li>
							)})}
						</ul>
					</Column>
				</Row>
			</div>
		)}
}

export default Skills;