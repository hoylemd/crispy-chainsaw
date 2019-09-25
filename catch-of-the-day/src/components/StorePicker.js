import React from 'react';

// local imports
import { getFunName } from '../helpers';

const StorePicker = () => (
  <form className="store-picker">
    <h2>Enter the name for your store</h2>
    <input type="text" required
      placeholder="Store Name"
      defaultValue={getFunName()}
    />
    <button type="Visit Store">Go</button>
  </form>
);

export default StorePicker;
