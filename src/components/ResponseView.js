import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class ResponseView extends React.Component 
{	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Card>
				<Card.Body>
					{JSON.stringify(this.props.responseData)}	
				</Card.Body>
			</Card>
		);
	}	
}

export default ResponseView;
