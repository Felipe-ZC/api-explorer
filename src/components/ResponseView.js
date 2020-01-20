import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class ResponseView extends React.Component 
{	
	constructor(props) {
		super(props);
	}
	
	getStyle() {
		return {
			"margin": "auto", 
			"width": "90%",
			"display": Object.keys(this.props.responseData).length ? "inherit" : "none"
		};
	} 

	render() {
		return (
			<Card style={this.getStyle()}>
				<Card.Header>Response</Card.Header>
				<Card.Body>
					<pre>{JSON.stringify(this.props.responseData, null, 2)}</pre>	
				</Card.Body>
			</Card>
		);
	}	
}

export default ResponseView;
