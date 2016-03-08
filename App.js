import React from 'react';

//Stateless function Component:
//const App = () => <h1>Hello World!</h1>

class App extends React.Component {
  constructor(){
    super();
    this.state = { txt: '' }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      txt: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Widget update={this.update} txt={this.state.txt} />
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
}

export default App;
