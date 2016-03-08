import React from 'react';
import ReactDOM from 'react-dom';

//Stateless function Component:
//const App = () => <h1>Hello World!</h1>

class App extends React.Component {
  render() {
    let { text, cat } = this.props;
    return (
      <div>
        <h1>{cat}. {text}</h1>
      </div>
    )
  }
}
App.propTypes = {
  text: React.PropTypes.string.isRequired,
  cat: React.PropTypes.number.isRequired
}
App.defaultProps = {
  text: 'this is the default text',
  cat: 999
}

ReactDOM.render(
  <App text="this is the props text" cat={5} />,
  document.getElementById('app')
);


export default App;
