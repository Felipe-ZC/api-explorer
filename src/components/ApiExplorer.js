import React from 'react';
import '../styles/App.css';
import RequestForm from './RequestForm.js';
import ResponseView from './ResponseView.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ApiExplorer extends React.Component 
{	
	constructor(props) {
		super(props);
		this.state = {"responseData" : {}};
		this.handleResponse = this.handleResponse.bind(this);
	}
	
	handleResponse(response) {
		this.setState({"responseData": response});
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
						<RequestForm
							title={this.props.title}
							url={this.props.url}
							method={this.props.method}
							body={this.props.body}
							onResponse={this.handleResponse}
					  />
					</Col>
				</Row>
				{
					Object.keys(this.state.responseData).length 
					&& 
					<Row>
						<Col style={{"paddingTop": "1.2em"}}>	
							<ResponseView responseData={this.state.responseData}/> 
						</Col>
					</Row>
				}
			</Container>
		)
	}	
}

export default ApiExplorer;
