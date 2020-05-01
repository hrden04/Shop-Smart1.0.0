/* eslint-disable import/extensions */
import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Review from './components/review.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }
  // create axios call for data from server

  getAllReviews() {
    axios.get('/api/products/reviews')
      .then((response) => console.log('response: '))
      .catch((err) => console.log('Error: '));
  }


  render() {
    const { reviews } = this.context;
    return (
      <div>
        <h2>hello from in react app</h2>
        <Review reviews={reviews} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
