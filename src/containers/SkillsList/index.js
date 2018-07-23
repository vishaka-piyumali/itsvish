import React, { Component } from 'react';

import skillsBanner from './skills.png';

import { Row, Column } from 'react-foundation';
import { connect } from 'react-redux';

import './index.css';

class SkillsList extends Component {

	renderSkillsSection () {
		return (
			<Row className="section-skills">
				<Column className="show-for-large" medium={6}>
					<img src={skillsBanner} alt="skills" />
				</Column>
				<Column mediumn={12} large={6}>
					<ul className="skill-categories">
						{this.props.skills.map((category) => {
							return (
								<li key={category.title} className="category" title="40">
									<div className="title">{category.title}</div>
									<div className="skillset">
										{category.skills.map((skill) => {
											return <span key={skill} className="skill">{skill}</span>
										})}
									</div>
								</li>
							)
						})}
					</ul>
				</Column>
			</Row>
		)
	}

	render() {
		return (
			<div>
				{this.renderSkillsSection()}
			</div>
		)
	}
}


function mapStateToProps (state) {
	return {
		skills: state.skills
	}
}
export default connect(mapStateToProps)(SkillsList);