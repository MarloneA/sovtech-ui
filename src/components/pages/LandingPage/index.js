import React from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import { GET_ALL_STAR_WARS_CHARACTERS } from "../../../apollo/queries";
import AppTemplate from "../../templates/AppTemplate";
import Card from "../../modules/Card";
import ErrorPage from "../ErrorPage";
import Loading from "../Loader";

const ListWrapper = styled.div`
  display: flex;
  flex-flow: column;
  overflow: scroll;
  padding: 5rem;
`;

const LandingPage = ({ ...props }) => {
  const { data, error, loading } = useQuery(GET_ALL_STAR_WARS_CHARACTERS, {
    variables: {
      page: "1",
    },
    fetchPolicy: "cache-and-network",
  });

  const { getPeople } = data || {};

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <AppTemplate>
      <ListWrapper>
        {getPeople.map((item) => (
          <Card {...item} />
        ))}
      </ListWrapper>
    </AppTemplate>
  );
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
