import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, gql } from "@apollo/client";

import logo from "../../icon.png";
import { Button } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import styled from "styled-components";
import Header from "../header/Header";
import * as connectionAction from "./connectionSlice";

const Connection = () => {
  const dispatch = useDispatch();

  const userData = gql`
    {
      users {
        pseudo
        id
      }
    }
  `;

  const { loading, error, data } = useQuery(userData);

  useEffect(() => {
    if (loading) {
      return;
    } else if (data) {
      dispatch(connectionAction.resolvedApiData(data));
      return;
    } else {
      dispatch(connectionAction.rejectedApiData(error));
      return;
    }
  }, [data, loading, error, dispatch]);

  const user = useSelector((state) => state.connection.user);

  const handleChange = (e) => {
    dispatch(connectionAction.changeForConnection(e.target.value));
  };

  let isRegistered = () => {
    if (!loading) {
      return Object.values(data?.users)
        ?.map((user) => user?.pseudo)
        ?.includes(user?.name);
    }
  };

  const handleSubmit = (e) => {
    if (isRegistered()) {
      return dispatch(
        connectionAction.submitForConnection({
          name: user?.name,
          isRegistered: isRegistered(),
          formErrorMessage: "",
          isFormSent: true,
        })
      );
    } else
      return dispatch(
        connectionAction.submitForConnection({
          name: user?.name,
          isRegistered: isRegistered(),
          formErrorMessage: "Désolé, vous n'êtes pas enregistré",
          isFormSent: true,
        })
      );
  };

  const component = () => {
    if (!user.isRegistered)
      return (
        <div>
          <Title>CtrlUpTest</Title>
          <Logo src={logo} className="App-logo" alt="logo" />
          <SubTitle>Se connecter</SubTitle>
          <AuthForm onSubmit={handleSubmit}>
            <Form.Field>
              <label>Nom et prénom</label>
              <input
                placeholder="Entrer votre nom et prénom"
                onChange={handleChange}
              />
              {user.isFormSent && (
                <ErrorMess>{user.formErrorMessage}</ErrorMess>
              )}
            </Form.Field>
          </AuthForm>
          {user.isFormSent && (
            <ButtonPosition>
              <Button>S'enregistrer</Button>
            </ButtonPosition>
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
  height: 35vh;
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
  padding-top: 1rem;
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
const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
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
