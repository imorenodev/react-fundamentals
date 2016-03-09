import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      value: 0
    }
  }
  update() {
    this.setState({
      value: ReactDOM.findDOMNode(this.refs.value.refs.input).value
    })
  }
  render() {
    return (
      <div>
        <NumInput
          ref="value"
          min={0}
          max={255}
          step={1}
          update={this.update}
          val={+this.state.value}
          label="RED SLIDER" />
      </div>
    );
  }
}

class NumInput extends React.Component {
  render() {
    let label = this.props.label !== '' ? <label style={{'padding': '10px', 'margin': '10px'}}>{this.props.label} - {this.props.val}</label> : '';
    return (
      <div className="container">
        <div className="row">
          {label}
        </div>
        <div className="row">
          <input style={{'margin': '10px'}}
            ref="input"
            type={this.props.type}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            defaultValue={this.props.val}
            onChange={this.props.update} />
        </div>
      </div>
    );
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default App;
