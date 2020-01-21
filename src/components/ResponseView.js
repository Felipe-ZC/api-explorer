import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class ResponseView extends React.Component 
{	
	constructor(props) {
		super(props);
		this.getStyle = this.getStyle.bind(this);
	}
	
	getStyle() {
		// Only show compnent when there is data.
		return {
			"margin": "auto", 
			"width": "90%"
		};
	} 

	render() {
		// Use <pre> tags to preserve spaces and line breaks
		// from JSON.stringify(). This way we can 'pretty print'
		// the response data JSON.
		return (
			<Card style={this.getStyle()} id="responseBodyView">
				<Card.Header>Response</Card.Header>
				<Card.Body>
					<pre>{JSON.stringify(this.props.responseData, null, 2)}</pre>	
				</Card.Body>
			</Card>
		);
	}	
}

export default ResponseView;
