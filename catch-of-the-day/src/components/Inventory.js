import React from 'react';

import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
  render () {
    const fish_keys = Object.keys(this.props.fishes);
    const fish_list = fish_keys.map(key => (
      <EditFishForm
        key={key}
        i8r={key}
        fish={this.props.fishes[key]}
        updateFish={this.props.updateFish}
      />
    ));

    return (
      <div className="inventory">
        <h2>Inventory!</h2>
        {fish_list}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
