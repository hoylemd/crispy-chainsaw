import React from 'react';

// local imports
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();

    const name = this.myInput.current.value;
    this.props.history.push(`/store/${name}`);
  }

  render() {
    return (
      <form className="store-picker" onSubmit={this.handleSubmit}>
        <h2>Enter the name for your store</h2>
        <input type="text" required
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default StorePicker;
