import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";
import List from "material-ui/List";
import Divider from "material-ui/Divider";

const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          repellat. Itaque repellat esse vero quam?
        </List>
        <Divider />
        <List>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          sit.
        </List>
      </div>
    );

    return (
      <div>
        <Drawer
          transitionDuration={this.props.transitionDuration}
          open={this.props.openDrawer}
          onClose={this.props.onClose}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.onClose}
            onKeyDown={this.props.onClose}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
