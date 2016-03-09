import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      val: 0
    }
  }
  update() {
    this.setState({
      val: this.state.val + 1
    })
  }
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('mounted');
  }
  render() {
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
  render() {
    return (
      <div>
        <ButtonMixed txt="Button" classNames="btn btn-success" />
      </div>
    );
  }
}

export default App;
