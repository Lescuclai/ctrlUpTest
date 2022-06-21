import React, { useEffect } from "react";
import Header from "../header/Header";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { COLOR } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, gql } from "@apollo/client";

import * as projectActions from "../project/projectSlice";
import * as connectionAction from "../connection/connectionSlice";

const Member = () => {
  const dispatch = useDispatch();

  const userData = gql`
    {
      users {
        pseudo
        id
      }
    }
  `;

  const { loading, data } = useQuery(userData);

  const storedUserData = useSelector((state) => state.connection.data);

  useEffect(() => {
    if (loading) return;
    if (
      data &&
      !(
        !!Object.keys(data.users).length !==
        !!Object.keys(storedUserData.users).length
      )
    ) {
      dispatch(connectionAction.resolvedApiData(data));
      return;
    }
  }, [data, dispatch, storedUserData, loading]);

  const handleMemberSelection = (name) => {
    dispatch(projectActions.selectMember(name));
  };

  return (
    <div>
      <Header />
      <MembersSection>
        {storedUserData?.users?.map((user) => (
          <Members
            key={user.pseudo}
            onClick={() => handleMemberSelection(user?.pseudo)}
            to="/projects"
          >
            <MembersRepresentation>{user.pseudo[0]}</MembersRepresentation>
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
