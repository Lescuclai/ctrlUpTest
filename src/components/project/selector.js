import { createSelector } from "reselect";

const getAllProject = (state) => state.project.projects;
const getMember = (state) => state.project.member;
const getSelectedTag = (state) => state.project.selectedTag;

export const getSelectedMemberProject = createSelector(
  getAllProject,
  getMember,
  getSelectedTag,
  (allProjects = [], member = "", selectedTag = "") => {
    let currentMemberProjects = allProjects.filter(
      (project) => project.userName === member
    );

    selectedTag &&
      (currentMemberProjects = currentMemberProjects.filter((filteredProject) =>
        filteredProject.formData.tag.includes(selectedTag)
      ));

    return currentMemberProjects;
  }
);

export const getSelectedMemberTags = createSelector(
  getAllProject,
  getMember,
  (allProjects = [], member = "") => {
    let currentMemberProjects = allProjects.filter(
      (project) => project.userName === member
    );
    let uniqTagsForMember = [];
    currentMemberProjects.forEach((project) => {
      project?.formData?.tag.forEach((t) =>
        !uniqTagsForMember.includes(t) ? uniqTagsForMember.push(t) : null
      );
    });

    return uniqTagsForMember;
  }
);
