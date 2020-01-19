import React from 'react';
import Form from 'react-bootstrap/Form'
//import '../styles/App.css';

class RequestBody extends React.Component 
{	
	constructor(props) {
		super(props);
	}

	renderBody() {
		return this.props
				   .body
			       .map(param => (
						<Form.Group key={param.name} controlId={param.name + "_bodyParam"}>
							<Form.Label>{param.name}</Form.Label>
							<Form.Control {...param} onChange={this.props.onParamsChange}/>
						</Form.Group>
					));
	}

	render() {
		return this.renderBody();
	}	
}

export default RequestBody;
