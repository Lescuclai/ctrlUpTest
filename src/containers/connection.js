import { connect } from "react-redux";
import Connection from "../components/connection/Connection";
import { handleChange, handleSubmit, saveApiData } from "../config/actions";

const mapState = (state) => ({
  user: state.connection.user,
  apiData: state.connection.apiData,
});

const mapDispatch = (dispatch) => ({
  handleChange: (payload) => {
    dispatch(handleChange(payload));
  },
  handleSubmit: (payload) => {
    dispatch(handleSubmit(payload));
  },
  saveApiData: (payload) => {
    dispatch(saveApiData(payload));
  },
});

export default connect(mapState, mapDispatch)(Connection);
