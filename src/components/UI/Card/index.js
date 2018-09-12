import React, { Component } from 'react';
import UIKudos from '../Kudos';

import './index.css';

export default class Card extends Component {


	render () {
		return (
			<div className="card">
				<div>
					<div class="card-header">
						<div class="header-left">
							<div class="card-icon" aria-label="card">D</div>
						</div>
						<div class="header-middle">
							<span class="title">{this.props.title}</span>
							<span class="subtitle">September 14, 2016</span>
						</div>
						<div class="header-right">
							<button tabindex="0" class="menu-icon" type="button">
								<span class="menu-icon-inner">
									<svg class="menu-icon-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
										<path fill="none" d="M0 0h24v24H0z"></path>
										<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">

										</path>
									</svg>
								</span>
							</button>
						</div>
					</div>
					<img class="card-image" src={this.props.thumbnail} title="Contemplative Reptile"/>
					<div class="card-desc">
						<p>{this.props.description}</p>
					</div>
					<div class="card-footer">
						<ul class="menu align-left">
							{this.props.footerLinks.map((footerlink) => {
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
				</div>
			</div>
		)}
}

