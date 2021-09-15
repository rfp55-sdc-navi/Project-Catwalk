// eslint-disable-next-line no-use-before-define
import React from 'react';
// import axios from 'axios';

import Info from './Info';
import StyleSelector from './StyleSelector';
import AddtoCart from './AddtoCart';
import ImageGallery from './ImageGallery';

// class ProductOverviewWidget extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       rating: null,
//     };
//   }

//   componentDidMount() {
//     // axios.get('/product/rating/40355')
//     //   .then((response) => {
//     //     this.setState({
//     //       rating: response.data.toFixed(2),
//     //     });
//     //   });
//   }

//   render() {
//     return (
//       <div className="overview">Overview</div>
//     );
//   }
// }

const ProductOverviewWidget = ({ product, styles, selectedStyle }) => (
  <div className="overview">
    <Info product={product} styles={styles} selectedStyle={selectedStyle} />
    <img id="selected-style-image" src={selectedStyle.photos[0].url} />
    <StyleSelector styles={styles} />
    <AddtoCart />
    <ImageGallery />
  </div>
);

// PropTypes

export default ProductOverviewWidget;
