import React from 'react';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import RequestBody from './RequestBody.js'
import axios from 'axios';

class RequestForm extends React.Component 
{	
	constructor(props) {
		super(props);
		this.state = {};
		this.sendRequest = this.sendRequest.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	sendRequest(event) {
		event.preventDefault();
		this.props.onResponse({});
		this.setState({"loading" : true});
		axios({
			"method": this.state.method || this.props.method,
			"url": this.state.url || this.props.url,
			"data": this.state.data
		})
		.then(response => {
			console.log(response);
			this.props.onResponse(response);
			this.setState({"loading" : false});
		})
		.catch(response => {
			this.props.onResponse(response);
			this.setState({"loading" : false});
		})	
	}

	handleChange(e) {
		if(e.target.id.match(/_bodyParam$/)) {
			let newData = this.state.data || {};
			newData[e.target.name] = e.target.value;
			this.setState({data: newData});
		}
		else 
			this.setState({[e.target.name]: e.target.value});
	}

	render() {
		return (
			<Card style={{"margin" : "auto", "width" : "90%"}}>
				<Card.Header>{this.props.title}</Card.Header>
				<Card.Body>
					<Form onSubmit={this.sendRequest}>
						<Form.Group controlId="formUrl">
							<Form.Label>URL</Form.Label>
							<Form.Control type="text" name="url" defaultValue={this.props.url} onChange={this.handleChange}/>
						</Form.Group>
						<Form.Group controlId="formMethod">
							<Form.Label>Method</Form.Label>
							<Form.Control as="select" name="method" defaultValue={this.props.method.toUpperCase()} onChange={this.handleChange}>
								<option value="GET">GET</option>
								<option value="POST">POST</option>
								<option value="PUT">PUT</option>
								<option value="DELETE">DELETE</option>
								<option value="PATCH">PATCH</option>
							</Form.Control>
						</Form.Group>	
						<Form.Group controlId="formRequestBody">
							<Form.Label>Body</Form.Label>
							<RequestBody body={this.props.body} onParamsChange={this.handleChange}/> 	
						</Form.Group>
  						<Button type="submit">	
								<Spinner
									as="span"
									animation="border"
									size="sm"
									role="status"
									aria-hidden="true"
									style={this.state.loading ? {"display":"inherit"} : {"display":"none"}}
								/>
								<span style={!this.state.loading ? {"display":"inherit"} : {"display":"none"}}>
									Send
								</span>
								</Button> 
						</Form>
				</Card.Body>
			</Card>
		)
	}	
}

export default RequestForm;
