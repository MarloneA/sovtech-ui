import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainWrapper = styled.main`
  display: flex;
  background-color: #1c262b;
  height: 100vh;
  overflow: hidden;
`;

const HeaderWrapper = styled.header`
  background-color: yellow;
  height: 10vh;
  width: 100vw;
`;

const SideNavigation = styled.aside`
  background-color: #223a40;
  width: 3vw;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-flow: column;

  margin: 0 auto;
  padding: 1em 0;
`;

const AppTemplate = ({ children, linkUrl }) => {
  return (
    <MainWrapper>
      <SideNavigation />
      <ContentWrapper>
        {/* <HeaderWrapper /> */}
        {children}
      </ContentWrapper>
    </MainWrapper>
  );
};

AppTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  linkUrl: PropTypes.string,
};

export default AppTemplate;
