import React, { Component } from 'react';

import skillsBanner from './skills.png';

import { Row, Column } from 'react-foundation';
import './index.css';

class Skills extends Component {
	render() {
		const skills = [{
				"title": "JavaScript Frameworks",
				"skills": [ 'RactiveJs', 'ReactJs', 'BlazeJs' , 'BackboneJs', 'AngularJs']
			}, {
				"title": "Native Web Deveopment",
				"skills": ['html', 'css3', 'Javascript']
			},{
				"title": "Content Management Systems",
				"skills": ['Vignette', 'AEM']
			}, {
				"title": "Testing tools",
				"skills": ['Cucumber', 'Jasmine', 'Jest', 'Chai']
			}, {
				"title": "Server Side Scripting",
				"skills": ['Jsp', 'Freemarker', 'PHP', 'NodeJs', 'ExpressJs']
			}, {
				"title": "Continuous Integration",
				"skills": ['Gulp', 'Grunt', 'Jenkins', 'Webpack']
			}];
		return (
			<div>
				<Row className="section-skills">
					<Column className="show-for-large-only" medium={6}>
						<img src={skillsBanner} alt="skills" />
					</Column>
					<Column mediumn={12} large={6}>
						<ul class="skill-categories">
							{skills.map((category) => {
								return (
									<li class="category" title="40">
										<div class="title">{category.title}</div>
										<div class="skillset">
											{category.skills.map((skill) => {
											 return <span class="skill">{skill}</span>
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