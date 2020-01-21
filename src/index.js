import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import ApiExplorer from './components/ApiExplorer';
import InvalidConfig from './components/InvalidConfig';
import config from './config/config.json';

// TODO: Validate Config! If config is invalid, render an invalid
// config component! We can use fs.readFile() instead, makes it 
// possible to handle errors before file is brought into memory.
// Import can only be ran at top level, so try-catching it is out
// of the question...

// NOTE: This app doesn't need a router but would be nice 
// in case we wanted too add further functionality to it. 
if(typeof(config) == 'undefined'  || !(config.url && config.method))
	ReactDOM.render(<InvalidConfig/>, document.getElementById('root'));
else 
	ReactDOM.render(<ApiExplorer
										title={config.title}
										url={config.url}
										method={config.method}
										body={config.body}/>, document.getElementById('root'));

