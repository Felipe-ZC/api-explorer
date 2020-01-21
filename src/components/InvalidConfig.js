import React from 'react';
import '../styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class InvalidConfig  extends React.Component 
{	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Container fluid>
				<Row>
					<Col>
						<h4 className="App-header">
							API Explorer
						</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card style={{"margin": "auto", "width": "90%"}}>
							<Card.Header>Invalid Config</Card.Header>
							<Card.Body>
								<h4 className="text-center">
									Looks like theres an error with your configuration,
									please make sure you have at least defined a url and
			            method!
								</h4>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}	
}

export default InvalidConfig;
