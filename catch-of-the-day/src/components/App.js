import React from 'react';
// import PropTypes from 'prop-types';

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
