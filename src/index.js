import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import ApiExplorer from './components/ApiExplorer';
import config from './config/config.json';

ReactDOM.render(<ApiExplorer
									title={config.title}
									url={config.url}
									method={config.method}
									body={config.body}/>, document.getElementById('root'));
