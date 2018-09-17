import React, { Component } from 'react';
import UIKudos from '../Kudos';

import './index.css';

const CardHeader = props => (
	<div class="card-header">
		<div class="header-left">
			<div class="card-icon" aria-label="card">D</div>
		</div>
		<div class="header-middle">
			<span class="title">{props.title}</span>
			<span class="subtitle">{props.date}</span>
		</div>
		<div class="header-right">
			<button tabindex="0" class="menu-icon" type="button">
				<span class="menu-icon-inner">
					<span className="fi-heart large icon" rel="noopener noreferrer" aria-hidden="true"></span>
				</span>
			</button>
		</div>
	</div>
);

const FlipContent = props => (
	<div className="flip-container">
		<div className="flipper">
			<div className="front">
				<img class="card-image" src={props.thumbnail} title={props.shortDesc} />
			</div>
			<div className="back">
				{props.secondaryContent}
			</div>
		</div>
	</div>
);

const CardFooter = props => (
	<div class="card-footer">
		<ul class="menu align-left">
			{props.footerLinks.map((footerlink) => {
				return (
					<li key={footerlink.title}>
						<a href={footerlink.link} alt={footerlink.label} rel="noopener noreferrer" target="_blank">
							<span class={footerlink.icon} rel="noopener noreferrer" aria-hidden="true"></span>
						</a>
					</li>
				)
			})}
		</ul>
	</div>
);


export default class Card extends Component {

	render () {
		return (
			<div className="card">
				<CardHeader title={this.props.title} date={this.props.date} />
				<FlipContent thumbnail={this.props.thumbnail} shortDesc={this.props.title} secondaryContent={this.props.secondaryContent} />
				<div class="card-desc">
					<div>{this.props.description}</div>
				</div>
				<CardFooter footerLinks={this.props.footerLinks} />
			</div>
		)}
}

