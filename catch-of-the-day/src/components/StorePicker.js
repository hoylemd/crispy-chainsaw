import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-picker">
        <h2>Enter the name for your store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default StorePicker;
