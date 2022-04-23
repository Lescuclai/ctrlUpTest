import React from "react";
import styled from "styled-components";
import { Button, Label } from "semantic-ui-react";
import Header from "../../containers/header";
import { Link } from "react-router-dom";
import { COLOR } from "../../config/constants";

const Project = ({
  user,
  setSelectedTag,
  selectedTag,
  selectedMemberProject,
  selectedMemberTags,
}) => {
  const handleSelectedTag = (tag) => {
    if (selectedTag === tag) {
      return setSelectedTag("");
    }
    setSelectedTag(tag);
  };

  return (
    <React.Fragment>
      <Header userName={user.name} />
      {!selectedMemberProject ? (
        <Main>
          <NoProject>Aucun projet, il est temps d'en créer un !</NoProject>
          <Link to="/project/new">
            <Button>Nouveau projet</Button>
          </Link>
        </Main>
      ) : (
        <Main>
          <h3>Projets</h3>
          <Filters>
            {selectedMemberTags &&
              selectedMemberTags.map((tag) => (
                <Label onClick={() => handleSelectedTag(tag)}>
                  <span>{tag}</span>
                </Label>
              ))}
          </Filters>
          <Projects>
            {selectedMemberProject.map((project) => (
              <ProjectContainer>
                <Container>
                  <div>{project.formData?.projet}</div>
                  {project.formData.tag.map((tag) => (
                    <Label>{tag}</Label>
                  ))}
                </Container>
                <MembersRepresentation>
                  {project.formData.participant.map((participant) =>
                    participant[0].toUpperCase()
                  )}
                </MembersRepresentation>
              </ProjectContainer>
            ))}
          </Projects>

          <Link to="/project/new">
            <Button>Nouveau projet</Button>
          </Link>
        </Main>
      )}
    </React.Fragment>
  );
};

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 9rem;
  height: 90vh;
`;
const NoProject = styled.p`
  font-size: 2rem;
  width: 50vw;
  text-align: center;
  line-height: 2.5rem;
`;
const Projects = styled.section`
  margin: 2rem;
  width: 70%;
`;

const Filters = styled.div`
  display: flex;
`;
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid darkGrey;
  padding: 1rem;
  margin: 1rem 0;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MembersRepresentation = styled.div`
  background-color: ${COLOR.themeColor};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Project;
