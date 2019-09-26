import React from 'react';
//import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();

    var fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    this.props.addFish(fish);
    event.currentTarget.reset();
  }

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  render() {
    return (
      <form className="fish-edit" onSubmit={this.onSubmit}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}
AddFishForm.propTypes = {

};

export default AddFishForm;
