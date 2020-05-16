import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewReport from './ReviewReport.jsx';

class CustomerReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
    this.getReviewsByProdId = this.getReviewsByProdId.bind(this);
  }

  componentDidMount() {
    this.getReviewsByProdId();
  }
  // create axios call for data from server

  // get reviews by product id

  getReviewsByProdId() {
    axios.get('/api/products/reviews', {
      params: { productId: 1000 },
    })
      .then((response) => {
        this.setState({
          reviews: response.data,
        });
      })
      .catch((err) => console.log('Error: ', err));
  }


  render() {
    return (
      <div className="reviews_wrapper">
        <hr />
        <div className="reviews_section">
          <ReviewReport reviews={this.state.reviews} />
          <ReviewList reviews={this.state.reviews} />
        </div>
      </div>

    );
  }
}

export default CustomerReviews;
