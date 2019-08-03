import React, { Component } from 'react';
import Switch from 'react-switch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    checked: false,
    cwd: '',
    packageManager: '',
    packages: {
      ReactRouter: false,
      Redux: false,
      ReduxThunk: false,
      Unstated: false,
      UnstatedNext: false,
      TypeScript: false,
      NodeSass: false,
      StyledComponents: false,
      types: {
        Node: false,
        ReactRouter: false,
        Redux: false,
        Jest: false
      }
    }
  };

  getCWD = e => {
    // const { name, value } = e.target;
    fetch('/fileSystem')
      .then(res => res.json())
      .then(data => this.setState({ cwd: data.path }));
  };

  packageCheckHandler = e => {
    console.log(e);
    const { name } = e;
    this.setState({ packages: { [name]: !this.state.packages[name] } });
  };

  render() {
    console.log(this.state.packages);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label>
            <h6>React Router</h6>
            <Switch
              id="ReactRouter"
              name="ReactRouter"
              onChange={() =>
                this.packageCheckHandler({
                  name: 'ReactRouter'
                })
              }
              checked={this.state.packages.ReactRouter}
            />
          </label>
          <br />
          <br />
          <button onClick={() => this.getCWD()}>Access File System</button>
          {this.state.cwd > '' ? (
            <h5>
              Your Current Working Directory is: <br />{' '}
              <em>{this.state.cwd}</em>
            </h5>
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
