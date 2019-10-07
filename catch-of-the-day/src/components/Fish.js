// library imports
import React from 'react';
import PropTypes from 'prop-types';

// local imports
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.object,
    i8r: PropTypes.string,
    addToOrder: PropTypes.func
  }

  render() {

    const {image, name, price, desc, status} = this.props.details;
    const is_available = status === 'available';

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
        <button
          disabled={!is_available}
          onClick={() => this.props.addToOrder(this.props.i8r)}
        >
          {is_available ? 'Add to Cart' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}
Fish.propTypes = {

};

export default Fish;
