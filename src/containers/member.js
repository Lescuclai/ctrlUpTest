import { connect } from "react-redux";
import Member from "../components/member/Member";

const mapState = (state) => ({
  user: state.connection.user,
  apiData: state.connection.apiData,
});

export default connect(mapState)(Member);
