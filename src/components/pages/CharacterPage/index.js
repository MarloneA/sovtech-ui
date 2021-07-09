import React from "react";
import { useQuery } from "@apollo/client";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery as useHomeWorldQuery } from "react-query";

import { GET_ONE_STAR_WARS_CHARACTER } from "../../../apollo/queries";
import AppTemplate from "../../templates/AppTemplate";
import ErrorPage from "../ErrorPage";
import Loading from "../Loader";

const Selection = styled.span`
  color: #24e5d8;
  font-size: 0.9rem;
`;
const DetailsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 50rem;
  height: 30rem;
  background-color: rgb(35, 47, 55);
  margin: auto;
`;
const DetailsLeft = styled.div`
  width: 25%;
  height: 100%;
  background-color: #223a40;
`;
const DetailsRight = styled.div`
  display: flex;
  width: 75%;
  height: 100%;
`;
const List = styled.ul`
  list-style: none;
  padding: 3rem;
  color: #24e5d7d1;
  font-size: 1.1rem;
  font-weight: bold;

  ${({ right }) =>
    right &&
    css`
      color: #d3d6d6;
    `}

  & > li {
    margin: 3rem 0;
  }
`;

const CharacterPage = ({ ...props }) => {
  let { name: queryParam } = useParams();

  const { data, error, loading } = useQuery(GET_ONE_STAR_WARS_CHARACTER, {
    variables: {
      name: queryParam,
    },
    fetchPolicy: "cache-and-network",
  });

  const { getPerson } = data || {};
  const { name, gender, mass, height, homeworld } = getPerson || {};

  const { isLoading, data: homeworldData } = useHomeWorldQuery(
    "getHomeWorld",
    () => fetch(homeworld).then((res) => res.json())
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <AppTemplate
      header={
        <p>
          {`Characters Details -`} <Selection>{`${name}`}</Selection>
        </p>
      }
    >
      <DetailsWrapper>
        <DetailsLeft>
          <List>
            <li>Name</li>
            <li>Gender</li>
            <li>Mass</li>
            <li>Height</li>
            <li>Homeworld</li>
          </List>
        </DetailsLeft>
        <DetailsRight>
          <List right>
            <li>{name}</li>
            <li>{gender}</li>
            <li>{mass}</li>
            <li>{height}</li>
            <li>{isLoading ? "...loading" : homeworldData?.name || "—"}</li>
          </List>
        </DetailsRight>
      </DetailsWrapper>
    </AppTemplate>
  );
};

CharacterPage.propTypes = {};

CharacterPage.defaultProps = {};

export default CharacterPage;
