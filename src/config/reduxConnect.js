import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as actions from "./actions";

const mapRedux =
  (mapStateToProps = null, mapDispatchToProps = null) =>
  (Comp) => {
    const wrapper = class Wrapper extends Component {
      render() {
        return <Comp {...this.props} />;
      }
    };

    const mapDispatchToPropsAuto = (dispatch) => {
      const externalDispatchToProps = mapDispatchToProps
        ? mapDispatchToProps(dispatch)
        : {};
      return {
        dispatch,
        actions: bindActionCreators(actions, dispatch),
        ...externalDispatchToProps,
      };
    };

    const mapStateToPropsAuto = (state, props) => {
      const externalStateToProps = mapStateToProps
        ? mapStateToProps(state, props)
        : {};
      return {
        ...externalStateToProps,
      };
    };
    return withRouter(
      connect(mapStateToPropsAuto, mapDispatchToPropsAuto)(wrapper)
    );
  };

export default mapRedux;
