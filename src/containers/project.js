import { connect } from "react-redux";
import Project from "../components/project/Project";
import { setSelectedTag } from "../components/project/projectAction";
import {
  getSelectedMemberProject,
  getSelectedMemberTags,
} from "../components/project/selector";

const mapState = (state) => ({
  user: state.connection.user,
  projects: state.project.projects,
  member: state.project.member,
  selectedTag: state.project.selectedTag,
  selectedMemberProject: getSelectedMemberProject(state),
  selectedMemberTags: getSelectedMemberTags(state),
});

const mapDispatch = (dispatch) => ({
  setSelectedTag: (payload) => {
    dispatch(setSelectedTag(payload));
  },
});

export default connect(mapState, mapDispatch)(Project);
