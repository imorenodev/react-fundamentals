import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
<<<<<<< HEAD
      value: 0
=======
      val: 0
>>>>>>> master
    }
  }
  update() {
    this.setState({
<<<<<<< HEAD
      value: ReactDOM.findDOMNode(this.refs.value.refs.input).value
=======
      val: this.state.val + 1
>>>>>>> master
    })
  }
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('mounted');
  }
  render() {
<<<<<<< HEAD
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

class NumInput extends React.Component{
=======
    return <InnerComponent
      update={this.update}
      {...this.props}
      {...this.state} />
  }
}

const Button = (props) => <button className={props.classNames} onClick={props.update}>
                            {props.txt} - {props.val}
                          </button>

let ButtonMixed = Mixin(Button);

class App extends React.Component {
>>>>>>> master
  render() {
    let label = this.props.label !== '' ? <label style={{'padding': '10px', 'margin': '10px'}}>{this.props.label} - {this.props.val}</label> : '';
    return (
<<<<<<< HEAD
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
=======
      <div>
        <ButtonMixed txt="Button" classNames="btn btn-success" />
>>>>>>> master
      </div>
    );
  }
}

<<<<<<< HEAD
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

=======
>>>>>>> master
export default App;
