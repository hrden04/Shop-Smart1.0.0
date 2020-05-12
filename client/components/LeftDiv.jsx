import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReviewTable from './ReviewTable.jsx';


class LeftDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    this.getReviewsByProdId();
  }

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
    console.log(this.state);
    return (
      <div className="left_div">
        <div className="left_wrapper">
          <h2>Customer reviews</h2>
        </div>
        <div className="left_reviews">
          <ReviewTable reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default LeftDiv;
