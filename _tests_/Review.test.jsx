import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/components/Review';
import sampleReviews from './ReviewList.test.jsx'

describe('Unit Tests', () => {
  test('should render the Review component on the screen', () => {
    const wrapper = shallow(<Review review={sampleReviews[0]} />);
    expect(wrapper).toExist();
  });

});
