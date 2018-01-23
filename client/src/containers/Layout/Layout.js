import React, { Component } from "react";
import PropTypes from "prop-types";

import AppBar from "../../components/UI/AppBar/AppBar";
import Drawer from "../../components/UI/Drawer/Drawer";

import Typography from "material-ui/Typography";

class Layout extends Component {
  state = {
    isDrawerOpen: false,
    trasni: {
      enter: 1000,
      exit: 1000
    },
    top: "top"
  };
  abrirDrawer = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  render() {
    return (
      <div>
        <AppBar abrirCajon={this.abrirDrawer} />
        <Drawer
          openDrawer={this.state.isDrawerOpen}
          onClose={this.abrirDrawer}
          transitionDuration={this.state.trasni}
        />
        <Typography type="title" color="inherit">
          Materialidad
        </Typography>
      </div>
    );
  }
}

export default Layout;
