import React from 'react';
import App from '../../../src/App';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const assert = require('assert');
const { Given, Then } = require('cucumber');

// Configures Enzyme Adapter
configure({ adapter: new Adapter() });

Given('the DOM', function () {
    const { JSDOM } = require('jsdom');
    const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
    const { window } = jsdom;
    global.window = window;
    global.document = window.document;
});

Given('the App is rendered', function () {
    this.wrapper = shallow(<App />);
});

Then('the user can open the documentation', function () {
    assert(this.wrapper.contains('Learn React'));
    this.wrapper.find('a').simulate('click')
});