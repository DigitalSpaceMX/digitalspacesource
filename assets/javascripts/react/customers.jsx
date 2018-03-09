import React from 'react';
import { render } from 'react-dom';
import VisibilitySensor from 'react-visibility-sensor';

import Customer from './customer.jsx';
import data from './customer_data';
import { TweenMax } from 'gsap';

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.onScreen = this.onScreen.bind(this);
    this.state = { visible: false };
  }

  componentDidUpdate(){
    if(this.state.visible == true){
      TweenMax.staggerTo(".customer", 2, { scale: 1, opacity: 1, delay: 0.5, ease: Elastic.easeOut.config(1, 0.5), force3D: true }, 0.2);
    } else {
      TweenMax.set(".customer", {scale: 0.7, opacity: 0});
    }
  }

  onScreen(isVisible) {
    isVisible ? this.setState({ visible: true }) : this.setState({ visible: false });
  };


  render() {
    var customers;
    customers = data.map(info => <Customer key={info['id']} {...info} />);

    return (
      <div className="customers">
        { customers }
        <VisibilitySensor onChange={this.onScreen} partialVisibility={'bottom'}/>
      </div>
    );
  }
};

var elementExists = document.getElementById("customers");
if(elementExists != null) {
  render(<Customers />, elementExists)
}

