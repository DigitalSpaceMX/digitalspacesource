import React from 'react';
import { render } from 'react-dom';
import Dot from './dot.jsx';

class Dots extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var dots = [];
    for (var i = 0; i < 50; i++) {
      dots.push(<Dot key={i} />);
    }
    return <div className="dots-container">{dots}</div>;
  }
};

var elementExists = document.getElementById("dots");
if (elementExists != null) {
  render(<Dots />, elementExists)
}