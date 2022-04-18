import React from "react";
import styled from "styled-components";
import logo from "../../icon.png";
import { Link } from "react-router-dom";

const Header = ({ userName, isAuthScreen }) => {
  return (
    <HeaderSection>
      {!isAuthScreen && (
        <MemberConnected>
          <MemberRepresentation />
          <MemberName>{userName}</MemberName>
        </MemberConnected>
      )}
      <EnterpriseRepresentation>
        {isAuthScreen && <Title>CtrlUpTest</Title>}
        <Link to="/members">
          <LogoHeader src={logo} className="App-logo" alt="logo" />
        </Link>
      </EnterpriseRepresentation>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  position: fixed;
  background-color: white;
  width: 100%;
`;

const EnterpriseRepresentation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5em;
  flex: 1;
`;

const Title = styled.h2`
  padding-right: 2rem;
`;

const LogoHeader = styled.img`
  height: 10vh;
  display: flex;
  margin: auto;
`;

const MemberConnected = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  color: inherit;
`;

const MemberRepresentation = styled.div`
  background-color: #8ecae6;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const MemberName = styled.p`
  padding: 0 1.5rem;
  font-size: 1.5rem;
`;

export default Header;