import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import LeftDiv from './LeftDiv.jsx';

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

  // get # number of reviews


  render() {
    console.log(this.state);
    return (
      <div className="reviews_section">
        <LeftDiv />
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
