import React from "react";
import Header from "../header/Header";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { COLOR } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";

import * as projectActions from "../project/projectSlice";

const Member = () => {
  const dispatch = useDispatch();
  const handleMemberSelection = (name) => {
    dispatch(projectActions.selectMember(name));
  };

  const data = useSelector((state) => state.connection.data);
  return (
    <div>
      <Header />
      <MembersSection>
        {data.map((user) => (
          <Members
            key={user.name}
            onClick={() => handleMemberSelection(user.name)}
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
