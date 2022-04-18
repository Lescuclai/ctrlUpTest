import React, { useEffect, useState } from "react";

import logo from "../../icon.png";
import { Button } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import styled from "styled-components";
import Header from "../header/Header";

const Connection = ({ user, handleChange, handleSubmit }) => {
  const [apiUsers, setApiUsers] = useState([]);

  const getActions = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setApiUsers(data);
  };
  useEffect(() => {
    getActions();
  }, []);

  const onHandleChange = (e) => {
    handleChange(e.target.value);
  };

  const isRegistered = apiUsers
    .map((apiUser) => apiUser.name)
    .includes(user.name);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered)
      handleSubmit({
        name: user.name,
        isRegistered,
        formErrorMessage: "",
        isFormSent: true,
      });
    handleSubmit({
      name: user.name,
      isRegistered,
      formErrorMessage: "Désolé, vous n'êtes pas enregistré",
      isFormSent: true,
    });
  };

  const component = () => {
    if (!user.isRegistered)
      return (
        <div>
          <Title>CtrlUpTest</Title>
          <Logo src={logo} className="App-logo" alt="logo" />
          <SubTitle>Se connecter</SubTitle>
          <AuthForm onSubmit={onHandleSubmit}>
            <Form.Field>
              <label>Nom et prénom</label>
              <input
                placeholder="Entrer votre nom et prénom"
                onChange={onHandleChange}
              />
              {user.isFormSent && (
                <ErrorMess>{user.formErrorMessage}</ErrorMess>
              )}
            </Form.Field>
          </AuthForm>
          {user.isFormSent && (
            <div>
              <Button>S'enregistrer</Button>
            </div>
          )}
        </div>
      );
    return (
      <div>
        <Header isAuthScreen={true} />
        <Main>
          <MemberRepresentation />
          <WelcomeSentence>Bonjour {user.name} !</WelcomeSentence>
        </Main>
      </div>
    );
  };

  return component();
};

const Title = styled.h1`
  padding-top: 8rem;
  font-size: 2.5em;
  text-align: center;
`;

const Logo = styled.img`
  height: 40vh;
  display: flex;
  margin: auto;
`;

const Main = styled.section`
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.h2`
  padding-top: 1.5rem;
  font-size: 1.5em;
  text-align: center;
`;

const AuthForm = styled(Form)`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const ErrorMess = styled.p`
  color: red;
`;

const MemberRepresentation = styled.div`
  background-color: #8ecae6;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WelcomeSentence = styled.p`
  padding: 2rem;
  font-size: 2rem;
  width: 50%;
  text-align: center;
`;

export default Connection;
