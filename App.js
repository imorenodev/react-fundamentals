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
        <button className="btn btn-lg btn-danger" style={{'padding': '10px 40px 10px 40px','marginTop':'10px'}} onClick={this.update}>{this.state.val}</button>
        <button className="btn btn-sma btn-warning" style={{'display':'block','margin':'10px auto'}} onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default App;
