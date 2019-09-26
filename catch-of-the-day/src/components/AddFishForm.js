import React from 'react';
//import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
  render() {
    return (
      <form className="fish-edit">
        <input name="name" type="text" placeholder="Name" />
        <input name="price" type="text" placeholder="Price" />
        <select name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="description" placeholder="Description" />
        <input name="image" type="text" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}
AddFishForm.propTypes = {

};

export default AddFishForm;
