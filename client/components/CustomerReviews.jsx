import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewReport from './ReviewReport.jsx';

// essentially App but not named app
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
    const { reviews } = this.state;

    return (
      <div className="reviews_wrapper">
        <hr />
        <div className="reviews_section">
          <ReviewReport reviews={reviews} />
          <ReviewList reviews={reviews} />
        </div>
      </div>

    );
  }
}

export default CustomerReviews;
