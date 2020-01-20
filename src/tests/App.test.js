import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme'; 
import {expect} from 'chai';
import ApiExplorer from '../components/ApiExplorer.js';
import config from './config/test.json'

Enzyme.configure({ adapter: new Adapter() });

describe('<ApiExplorer/>', function () {
  it('Url input field should match config value', function () {
    const wrapper = mount(<ApiExplorer
													   title="test"
														 url=""
														 method={config.method}
														 body={config.body}/>);
    expect(wrapper.find('#fomUrl')).to.have.lengthOf(1);
  });
});
