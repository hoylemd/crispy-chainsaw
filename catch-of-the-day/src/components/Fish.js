import React from 'react';
//import PropTypes from 'prop-types';

// local imports
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {

    const {image, name, price, desc, status} = this.props.details;

    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fishName">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p className="desc">
          {desc}
        </p>
        <button>Add to Cart</button>
      </li>
    );
  }
}
Fish.propTypes = {

};

export default Fish;
