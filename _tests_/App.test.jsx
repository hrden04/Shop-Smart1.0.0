/* eslint-disable import/extensions */
import React from 'react';
import Enzyme from 'enzyme';
import axios from 'axios';
import App from '../client/components/App.jsx';

 describe('Unit Tests', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
  test('should invoke getReviewsByProdId on componentDidMount', () => {
    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().getReviewsByProdId = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  });
});
