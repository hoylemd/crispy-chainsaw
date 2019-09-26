import React from 'react';

// local imports
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  handleSubmit = (event) => {
    // stop the submittion request
    event.preventDefault();

    // get text
    console.log(this.myInput.current.value);

    // change page to /store/blah
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
