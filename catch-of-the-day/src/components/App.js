import React from 'react';
// import PropTypes from 'prop-types';

// component imports
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({fishes: fishes});
  };

  render() {
    return (
      <div className="catch-of-the-day">
        { /* Fish List component ? */ }
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}
App.propTypes = {

};

export default App;
