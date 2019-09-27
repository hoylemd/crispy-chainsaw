import React from 'react';
//import PropTypes from 'prop-types';

class Order extends React.Component {
  render () {
    const order_items = Object.keys(this.props.order).map(key =>
      <li key={'o' + key}>
        {this.props.fishes[key].name} ({this.props.order[key]} lbs)
      </li>
    );
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul>
          {order_items}
        </ul>
        <div className="order-total">

        </div>
      </div>
    );
  }
}

export default Order;
