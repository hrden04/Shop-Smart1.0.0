import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

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
      .then((response) => {
        this.setState({
          reviews: response.data,
        });
      })
      .catch((err) => console.log('Error: ', err));
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <h2>hello from in react app</h2>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;