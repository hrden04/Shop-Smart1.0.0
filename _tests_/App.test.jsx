/* eslint-disable import/extensions */
import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import axios from 'axios';
import App from '../client/components/App.jsx';

 describe('Unit Tests', () => {
//   jest.mock('axios', () => {
//     const tasks = [
//       {
//         isComplete: false,
//         _id: '5e14daea497a3a48c5bd4612',
//         task: 'Write some tests!',
//         date: '2020-01-07T19:24:26.332Z',
//         __v: 0,
//       },
//     ];

  //     return {
  //       get: jest.fn(() => Promise.resolve(tasks)),
  //     };
  //   });

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
