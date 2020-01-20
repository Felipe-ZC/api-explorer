import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import ApiExplorer from './components/ApiExplorer';
import config from './config/config.json';


// TODO: Validate Config! If config is invalid, render an invalid
// config component!
ReactDOM.render(<ApiExplorer
									title={config.title}
									url={config.url}
									method={config.method}
									body={config.body}/>, document.getElementById('root'));
