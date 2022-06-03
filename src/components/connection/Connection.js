import { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

import logo from "../../icon.png";
import { Button } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import styled from "styled-components";
import Header from "../header/Header";
import { changeValue, submitData } from "./connectionAction";
import { fetchOrUpdateApiData } from "./connectionReducer";

const Connection = () => {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    fetchOrUpdateApiData(store);
    // On suit la recommandation d'ESLint de passer le store
    // en dépendances car il est utilisé dans l'effet
    // cela n'as pas d'impacte sur le fonctionnement car le store ne change jamais
  }, [store]);

  const data = useSelector((state) => state.connection.data);
  const user = useSelector((state) => state.connection.user);

  const handleChange = (e) => {
    dispatch(changeValue(e.target.value));
  };

  const isRegistered = data
    ?.map((apiUser) => apiUser?.name)
    .includes(user?.name);

  const handleSubmit = (e) => {
    if (isRegistered)
      return dispatch(
        submitData({
          name: user?.name,
          isRegistered,
          formErrorMessage: "",
          isFormSent: true,
        })
      );
    else
      return dispatch(
        submitData({
          name: user?.name,
          isRegistered,
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
