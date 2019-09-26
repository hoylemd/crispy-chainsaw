import React from 'react';

// local imports
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  handleSubmit(event) {
    // stop the submittion request
    event.preventDefault();
    alert('to the store!');
  }

  render() {
    return (
      <form className="store-picker" onSubmit={this.handleSubmit}>
        <h2>Enter the name for your store</h2>
        <input type="text" required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default StorePicker;
