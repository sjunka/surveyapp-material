import React, { Component } from "react";

import Layout from "./containers/Layout/Layout";
class App extends Component {
  render() {
    return <Layout>{this.props.children}</Layout>;
  }
}

export default App;
