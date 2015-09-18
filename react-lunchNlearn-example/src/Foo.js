import React, { Component } from 'react';

var LastName = ({name}) => (
  <div>
    My lastname is {name}
  </div>
);
let primary = 'red';
let styles = {
  mine: {
    color: `${primary}`,
    border: 'solid 1px pink',
    borderRadius: '5px',
    padding: '5px'
  }

}
class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    setInterval(::this.tick, 1000);
  }

  tick() {
    this.setState({
      count: this.state.count + 15
    });
  }

  render() {
    return (
      <div>
        <h1 style={styles.mine}>Hello my name is Ronn</h1>
        <LastName name="Ross" />
        Count is {this.state.count}
      </div>
    )
  }
}

export default Foo;
