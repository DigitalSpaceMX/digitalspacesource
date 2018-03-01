import React from 'react';
import { render } from 'react-dom';

class Customer extends React.Component {

  render() {
    return (
      <div className="customer">
        <div className="customer-info">
          <img src={this.props.logo} alt={this.props.name + "_logo"} className="customer_logo" />
        </div>
      </div>
    );
  };

};

export default Customer;
