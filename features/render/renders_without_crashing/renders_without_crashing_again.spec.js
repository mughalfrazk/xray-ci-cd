import React from 'react';
import App from '../../../src/App';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Configures Enzyme Adapter
configure({ adapter: new Adapter() });

Given('Render DOM Again', function () {
    const { JSDOM } = require('jsdom');
    const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
    const { window } = jsdom;
    global.window = window;
    global.document = window.document;
});

When('I shallow render a React component called: App Again', function () {
    this.wrapper = shallow(<App />);
});

Then('my app should contain the words: Learn React Again', function () {
    assert(this.wrapper.contains('Learn React'));
    this.wrapper.find('a').simulate('click')
});