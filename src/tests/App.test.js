import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme'; 
import {expect} from 'chai';
import ApiExplorer from '../components/ApiExplorer.js';
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
    expect(wrapper.find('#formMethod')).to.have.lengthOf(1);
  });

  it('Default value for url should match value in config', function () {
    const wrapper = mount(<ApiExplorer {...config}/>);
    expect(wrapper.find("#formUrl").props().defaultValue).to.equal(config.url);
  });

  it('Default value for method should match value in config', function () {
    const wrapper = mount(<ApiExplorer {...config}/>);
    expect(wrapper.find("#formMethod").props().defaultValue).to.equal(config.method);
  });

});
