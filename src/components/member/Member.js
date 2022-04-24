import React from "react";
import Header from "../../containers/header";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { COLOR } from "../../config/constants";

const Member = ({ user, apiData, handleMemberSelection }) => {
  const onHandleMemberSelection = (userName) => {
    handleMemberSelection(userName);
  };
  return (
    <div>
      <Header userName={user.name} />
      <MembersSection>
        {apiData.map((user) => (
          <Members
            key={user.name}
            onClick={() => onHandleMemberSelection(user.name)}
            to="/projects"
          >
            <MembersRepresentation>{user.name[0]}</MembersRepresentation>
          </Members>
        ))}
      </MembersSection>
      <AddMemberButton>
        <Button>Inviter</Button>
      </AddMemberButton>
    </div>
  );
};

const MembersSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  position: relative;
  top: 9rem;
`;
const Members = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const AddMemberButton = styled.footer`
  display: flex;
  padding: 2rem;
  justify-content: center;
  position: absolute;
  bottom: 0;
  z-index: 20000;
  background-color: white;
  width: 100%;
`;
const MembersRepresentation = styled.div`
  background-color: ${COLOR.themeColor};
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export default Member;
