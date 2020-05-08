/* eslint-disable import/extensions */
import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import axios from 'axios';
import App from '../client/components/App.jsx';

 describe('Unit Tests', () => {

  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
  test('should invoke getAllReviews on componentDidMount', () => {
    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().getAllReviews = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  });
});

// describe('Integration Tests', () => {

// });
