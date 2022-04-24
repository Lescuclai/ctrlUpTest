import { connect } from "react-redux";
import Header from "../components/header/Header";
import { handleMemberSelection } from "../components/header/headerAction";

const mapDispatch = (dispatch) => ({
  handleMemberSelection: (payload) => {
    dispatch(handleMemberSelection(payload));
  },
});

export default connect(null, mapDispatch)(Header);
