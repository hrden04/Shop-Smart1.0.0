import React from 'react';
import ReactDom from 'react-dom';
import Review from './components/review.jsx'

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
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
