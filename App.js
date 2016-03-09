import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentWillMount() {
    console.log('mounting');
  }
  componentDidMount() {
    console.log('mounted');
  }
  componentWillUnmount() {
    console.log('bye!');
  }
  update() {
    this.setState({
      val: this.state.val + 1
    })
  }
  reset() {
    this.setState({
      val: 0
    })
  }
  render() {
    console.log('rendering!');
    return (
      <div className="container" style={{'textAlign': 'center'}}>
        <button className="btn btn-lg btn-success" style={{'padding': '10px 40px 10px 40px','marginTop':'10px'}} onClick={this.update}>{this.state.val}</button>
        <button className="btn btn-sma btn-warning" style={{'display':'block','margin':'10px auto'}} onClick={this.reset}>reset</button>
      </div>
    );
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
