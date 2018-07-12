import React, { Component } from 'react';

class Demo extends Component {
	render() {
		return (
				<div>
					<h3>Hey there!</h3>
					{this.props.match.params.id}
				</div>
		)}
}

export default Demo;