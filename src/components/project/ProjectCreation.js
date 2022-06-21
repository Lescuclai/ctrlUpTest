import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Label, Icon } from "semantic-ui-react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { RANDOM_COLOR } from "../../config/constants";
import { gql, useMutation } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation toto($projet: String!, $tags: [String]!, $participants: [ID]!) {
    addProject(name: $projet, tags: $tags, participants: $participants) {
      name
      tags
      participants {
        id
      }
      id
    }
  }
`;

const ProjectCreation = () => {
  const [formData, setFormData] = useState();
  const [multiValueParticipant, setMultiValueParticipant] = useState([]);
  const [multiValueTag, setMultiValueTag] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const [toto, { data, loading, error }] = useMutation(ADD_PROJECT);

  const projectDataSubmit = () => {
    formData &&
      toto({
        variables: {
          projet: formData?.projet,
          tags: formData?.tags,
          participants: formData?.participants,
        },
      });
  };

  const handleSubmit = () => {
    projectDataSubmit();
  };

  const manageKeyPress = (e) => {
    if (
      e.target.name === "participants" &&
      e.target.value &&
      !multiValueParticipant.includes(e.target.value)
    )
      setMultiValueParticipant([...multiValueParticipant, e.target.value]);

    if (
      e.target.name === "tags" &&
      e.target.value &&
      !multiValueTag.includes(e.target?.value)
    )
      setMultiValueTag([...multiValueTag, e.target.value]);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target?.value,
      tags: multiValueTag.length === 0 ? [e.target.value] : [...multiValueTag],
      participants:
        multiValueParticipant.length === 0
          ? [e.target.value]
          : [...multiValueParticipant],
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      manageKeyPress(e);
    }

    return;
  };

  const handleOnClick = (chip) => {
    if (multiValueParticipant.includes(chip)) {
      const participants = multiValueParticipant.filter(
        (participant) => participant !== chip
      );
      setMultiValueParticipant([...participants]);
    } else if (multiValueTag.includes(chip)) {
      const tags = multiValueTag.filter((tag) => tag !== chip);
      setMultiValueTag([...tags]);
    }
    return;
  };

  const handleOnFocus = () => {
    setIsFocus(true);
  };
  const handleOnBlur = (e) => {
    manageKeyPress(e);
    handleChange(e);
    setIsFocus(false);
  };

  return (
    <NewProjectSection>
      <Header />
      <Container>
        <h3>Nouveau projet</h3>
        <Link to="/projects">
          <Button>Annuler</Button>
        </Link>
      </Container>

      <ProjectCreationForm onSubmit={(e) => e.preventDefault}>
        <Form.Field required>
          <label>Nom du projet</label>
          <Form.Input
            required
            placeholder="Entrer le nom de votre projet"
            name="projet"
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </Form.Field>
        <Form.Field required>
          <label>{`Tag(s)`}</label>
          <Form.Input
            required
            placeholder="Taper 'Enter' entre chaque tag"
            name="tags"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />

          <div>
            {multiValueTag.map((tag) => (
              <Label
                key={tag}
                circular
                color={RANDOM_COLOR()}
                onClick={() => handleOnClick(tag)}
              >
                {tag}
                <Icon name="delete" />
              </Label>
            ))}
          </div>
        </Form.Field>

        <Form.Field required>
          <label>{`Participant(s)`}</label>
          <Form.Input
            required
            placeholder="Taper 'Enter' entre chaque participant"
            name="participants"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          {
            <div>
              {multiValueParticipant.map((participant) => (
                <Label
                  key={participant}
                  circular
                  color={RANDOM_COLOR()}
                  onClick={() => handleOnClick(participant)}
                >
                  {participant}
                  <Icon name="delete" />
                </Label>
              ))}
            </div>
          }
        </Form.Field>

        <SendForm>
          <Button
            disabled={
              !!(
                !formData?.tags ||
                !formData?.projet ||
                !formData?.participants
              ) || isFocus
            }
            onClick={handleSubmit}
          >
            <Link to="/projects">Commencer</Link>
          </Button>
        </SendForm>
      </ProjectCreationForm>
    </NewProjectSection>
  );
};

const NewProjectSection = styled.section`
  padding-top: 9rem;
`;
const ProjectCreationForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 80%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  width: 80%;
  margin: 2rem 0;
`;

const SendForm = styled.div`
  display: flex;
  justify-content: center;
`;

export default ProjectCreation;
