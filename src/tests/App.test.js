import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import axios from 'axios';;
import { mount, shallow } from 'enzyme'; 
import {expect} from 'chai';
import sinon from 'sinon';
import ApiExplorer from '../components/ApiExplorer.js';
import RequestForm from '../components/RequestForm.js';
import config from './config/test.json'

Enzyme.configure({ adapter: new Adapter() });

describe('<ApiExplorer/>', function () {
  it('Should render url input field', function () {
    const wrapper = mount(<ApiExplorer {...config}/>);
    expect(wrapper.find('#formUrl')).to.have.lengthOf(1);
  });
	
  it('Should render method select option field', function () {
    const wrapper = mount(<ApiExplorer {...config}/>);
		expect(wrapper.find('#formMethod')).to.have.lengthOf(1);
  });

  it('Should render components for each entry in config body', function () {
    const wrapper = mount(<ApiExplorer {...config}/>);
		config.body.forEach(param => {
    	expect(wrapper.find(`#${param.name}_bodyParam`)).to.have.lengthOf(1);
		})
  });

  it('Should render response on submit event', function (done) {
    const wrapper = mount(<ApiExplorer {...config}/>);
		wrapper.find(`form`).props().onSubmit({preventDefault: () => {}}); 
		setTimeout(() => {
			expect(wrapper.html().match(`responseBodyView`));
			done();
		}, 2000);
	});

  it('Default value for url should match value in config', function () {
    const wrapper = mount(<ApiExplorer {...config}/>);
    expect(wrapper.find("#formUrl").props().defaultValue).to.equal(config.url);
  });

  it('Default value for method should match value in config', function () {
    const wrapper = mount(<ApiExplorer {...config}/>);
    expect(wrapper.find("#formMethod").props().defaultValue).to.equal(config.method);
  });

  it('Attributes of body components should match those in config', function () {
    const wrapper = mount(<ApiExplorer {...config}/>);
		config.body.forEach(param => {
			// For all the attributes in the config, check if they exist as attributes
			// in the input field. 
			let configAttrs = Object.keys(param);
			let attrs = wrapper.find(`#${param.name}_bodyParam`).props();
			configAttrs.forEach(attr => expect(attrs[attr]).to.equal(param[attr]));
		})
  });
});
