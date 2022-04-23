import { connect } from "react-redux";
import Member from "../components/member/Member";
import { handleMemberSelection } from "../components/member/memberAction";

const mapState = (state) => ({
  user: state.connection.user,
  apiData: state.connection.apiData,
});

const mapDispatch = (dispatch) => ({
  handleMemberSelection: (payload) => {
    dispatch(handleMemberSelection(payload));
  },
});

export default connect(mapState, mapDispatch)(Member);
