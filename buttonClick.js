import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
class defaultProps extends React.Component {
  render(){
    return(
      'I am a button'
    );
  }
}

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);
