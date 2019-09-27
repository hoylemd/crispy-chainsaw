import React from 'react';
// import PropTypes from 'prop-types';

// component imports
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';

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

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = (fish_id) => {
    const order = {...this.state.order};

    order[fish_id] = order[fish_id] + 1 || 1;

    this.setState({order: order});
  };

  render() {
    return (
      <div className="catch-of-the-day">
        { /* Fish List component ? */ }
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key =>
              <Fish key={key} details={this.state.fishes[key]}/>
            )}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}
App.propTypes = {

};

export default App;
