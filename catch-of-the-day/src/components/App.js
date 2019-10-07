// library imports
import React from 'react';
import PropTypes from 'prop-types';

// component imports
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

// other local imports
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    fishes: {},
    order: {}
  }

  componentDidMount() {
    const { params } = this.props.match;

    this.ref = base.syncState(
      `${params.storeId}/fishes`,
      {context: this, state: 'fishes'}
    );

    // reload local order
    const order_string = localStorage.getItem(params.storeId);

    if (order_string) {
      this.setState({order: JSON.parse(order_string)});
    }
  }

  componentDidUpdate() {
    const order = JSON.stringify(this.state.order);

    localStorage.setItem(this.props.match.params.storeId, order);
    console.log(order);
  }

  componentWillUnmount() {
    // Disconnect from firebase
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({fishes: fishes});
  }

  updateFish = (key, fish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = fish;
    this.setState({fishes: fishes});
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder = (fish_id) => {
    const order = {...this.state.order};

    order[fish_id] = order[fish_id] + 1 || 1;

    this.setState({order: order});
  }


  render() {
    const fish_list = Object.keys(this.state.fishes).map(key =>
      <Fish
        key={key}
        i8r={key}
        details={this.state.fishes[key]}
        addToOrder={this.addToOrder}
      />
    );

    return (
      <div className="catch-of-the-day">
        { /* Fish List component ? */ }
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {fish_list}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory
          fishes={this.state.fishes}
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
