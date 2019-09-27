import React from 'react';
//import PropTypes from 'prop-types';
//
// local imports
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    if (fish.status === 'available') {
      return (
        <li key={key}>
          {count} lbs {fish.name}
          {formatPrice(count * fish.price)}
        </li>
      );
    }
    return (
      <li key={key}>
        Sorry, {fish ? fish.name : 'fish'} is no longer available.
      </li>
    )
  }
  render () {
    const order_keys = Object.keys(this.props.order);

    const total = order_keys.reduce((prev_total, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const item_total = fish.price * count;
      const is_available = fish && fish.status === 'available';
      if (is_available) {
        return prev_total + item_total;
      }
      return prev_total;
    }, 0);

    const order_items = order_keys.map(this.renderOrder);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {order_items}
        </ul>
        <div className="order-total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
