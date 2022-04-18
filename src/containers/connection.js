import { connect } from "react-redux";
import Connection from "../components/connection/Connection";
import { handleChange, handleSubmit } from "../config/actions";

const mapState = (state) => ({
  user: state.connection.user,
});

const mapDispatch = (dispatch) => ({
  handleChange: (payload) => {
    dispatch(handleChange(payload));
  },
  handleSubmit: (payload) => {
    dispatch(handleSubmit(payload));
  },
});

export default connect(mapState, mapDispatch)(Connection);
