import React from 'react';
//import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    const input = event.currentTarget;

    // update dat fish
    const updated_fish = {
      ...this.props.fish,
      [input.name]: input.value
    };

    this.props.updateFish(this.props.i8r, updated_fish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
      </div>
    );
  }
}
EditFishForm.propTypes = {

};

export default EditFishForm;
