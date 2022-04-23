import { connect } from "react-redux";
import ProjectCreation from "../components/project/ProjectCreation";
import { handleSubmit } from "../components/project/projectAction";

const mapState = (state) => ({
  user: state.connection.user,
  apiData: state.connection.apiData,
});

const mapDispatch = (dispatch) => ({
  handleSubmit: (payload) => {
    dispatch(handleSubmit(payload));
  },
});

export default connect(mapState, mapDispatch)(ProjectCreation);
