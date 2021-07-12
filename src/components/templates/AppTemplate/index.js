import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

const MainWrapper = styled.main`
  display: flex;
  background-color: #1c262b;
  height: 100vh;
  overflow: hidden;
`;

const HeaderWrapper = styled.header`
  background-color: #2a353a;
  height: 3.5rem;
  margin: auto;
  width: 100%;
  position: fixed;
  left: 44px;

  & > p {
    font-size: 1.1rem;
    font-weight: 600;
    color: rgb(233, 234, 234);
    padding: 1rem;
  }
  & > span {
    color: #24e5d8;
  }
`;

const SideNavigation = styled.aside`
  background-color: #223a40;
  width: 3rem;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  z-index: 10;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-flow: column;

  margin: 0 auto;
  padding: 1em 0;
`;

const AppTemplate = ({ children, header }) => {
  return (
    <>
      <HeaderWrapper>{header}</HeaderWrapper>
      <MainWrapper>
        <SideNavigation>
          <a href="/">
            <HomeOutlinedIcon style={{ color: "#24e5d8", padding: "0 1rem" }} />
          </a>
        </SideNavigation>
        <ContentWrapper>{children}</ContentWrapper>
      </MainWrapper>
    </>
  );
};

AppTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  linkUrl: PropTypes.string,
};

export default AppTemplate;
