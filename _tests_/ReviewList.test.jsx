import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/components/Review';
import ReviewList from '../client/components/ReviewList';

const sampleReviews = [
  {
    helpfulCount: 179,
    midDescription: 'Nihil cupiditate qui aliquid dolorem repellendus eius natus sit. Magni eius velit ducimus tempora voluptas perspiciatis voluptas. Hic in rerum eaque quia. Ea quam repellendus accusantium repellendus blanditiis sint non. Quia vero et. Nulla impedit tenetur non natus provident animi.'
     + 'Facilis distinctio consequuntur et. Provident impedit et. Quasi commodi non recusandae perferendis minus impedit. Dolorem pariatur quae. Unde reiciendis rerum consequatur.'
     + 'In facere velit sed. Sint quo autem blanditiis voluptatem hic et. Blanditiis quae quibusdam et corrupti ullam quod earum ut asperiores. Porro quae enim exercitationem quasi a.',
    productId: 1000,
    productImage: 'http://lorempixel.com/640/480/technics',
    reviewDate: 'Sat Mar 21 2020 06:09:20 GMT-0600 (Mountain Daylight Time)',
    reviewersEmail: 'Aglae_Corkery@hotmail.com',
    reviewersFirstName: 'Camryn',
    reviewersImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/thierrymeier_/128.jpg',
    reviewersLastName: 'Swaniawski',
    starsCount: 5,
    topDescription: 'Ducimus velit qui consequuntur accusantium quas deleniti explicabo.',
    verifiedPurchase: false,
    __v: 0,
    _id: '5eb1698c9ad930d0a40d4ad3',
  },
  {
    helpfulCount: 385,
    midDescription: 'Rerum est et eaque temporibus neque dolore. Eligendi et quis. Nisi itaque asperiores tempore non debitis itaque libero.'
    + 'Sed ipsam perspiciatis autem veritatis libero ut quibusdam. Debitis maiores sed quas omnis cum. Voluptas nulla sit officia sapiente voluptate doloremque est quasi. Nihil dolorum deserunt nisi neque.'
    + 'Praesentium est recusandae saepe sed. Ut perspiciatis at et perferendis nobis veritatis dolorem neque. Libero consequatur repellendus quod quia atque ut quia perspiciatis. Quis quasi vitae. Perspiciatis quisquam corrupti. Voluptatem voluptates dicta.',
    productId: 1006,
    productImage: 'http://lorempixel.com/640/480/technics',
    reviewDate: 'Sat Feb 08 2020 22:03:51 GMT-0700 (Mountain Standard Time)',
    reviewersEmail: 'Sigmund84@yahoo.com',
    reviewersFirstName: 'Santos',
    reviewersImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/funwatercat/128.jpg',
    reviewersLastName: 'Predovic',
    starsCount: 1,
    topDescription: 'Minus nobis adipisci assumenda et odio deserunt.',
    verifiedPurchase: true,
    __v: 0,
    _id: '5eb1698c9ad930d0a40d4ad9',
  },
  {
    helpfulCount: 363,
    midDescription: 'Debitis provident ut voluptates est a quaerat rem ex id. Dolor sint nulla animi fugit ipsam dolorem illum. Consequatur eos ipsa. Aut laboriosam recusandae quisquam numquam.'
    + 'Vel placeat est et aliquam. Dolorem eveniet accusamus non est. Cum nobis quaerat corrupti maiores. Omnis corrupti rerum.'
    + 'Quas sit fugiat adipisci facere quis et. Aliquid est ducimus error sed eos eveniet atque pariatur. Animi error provident nesciunt ullam qui sit sed deleniti quam. Animi doloremque doloribus quas sed et aut rem. Iste libero aliquid nihil minima odit suscipit eius qui et.',
    productId: 1008,
    productImage: 'http://lorempixel.com/640/480/technics',
    reviewDate: 'Mon Jan 27 2020 08:14:59 GMT-0700 (Mountain Standard Time)',
    reviewersEmail: 'Giovanny7@hotmail.com',
    reviewersFirstName: 'Cory',
    reviewersImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/cicerobr/128.jpg',
    reviewersLastName: 'Schaden',
    starsCount: 1,
    topDescription: 'Excepturi aliquid quam consequatur ea enim saepe voluptas aut.',
    verifiedPurchase: false,
    __v: 0,
    _id: '5eb1698c9ad930d0a40d4adb',
  },
];

describe('Unit Tests', () => {
  test('should render the ReviewList component on the screen', () => {
    const wrapper = shallow(<ReviewList reviews={sampleReviews} />);
    expect(wrapper).toExist();
  });

  // test('should render 3 ReviewList components', () => {
  //   const wrapper = shallow(
  //     <ReviewList
  //       reviews={sampleReviews}
  //     />,
  //   );
  //   expect(wrapper.find(sampleReviews)).toHaveLength(3);
  // });
});

export default sampleReviews;
