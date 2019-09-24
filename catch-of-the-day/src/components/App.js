import React from 'react';
// import PropTypes from 'prop-types';

// component imports
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        { /* Fish List component ? */ }
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}
App.propTypes = {

};

export default App;
