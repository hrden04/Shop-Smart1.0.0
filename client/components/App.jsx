import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';

class App extends React.Component {
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
      .then((response) => console.log('response: ', response))
      .catch((err) => console.log('Error: ', err));
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

export default App;
