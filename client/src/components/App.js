import React from 'react';

export default class App extends React.Component {

  render() {

    return (
      <div>
        <div className="container">
          { /* Each Smaller Components */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
