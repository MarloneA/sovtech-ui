import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

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

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
const MaterialComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const LandingPage = ({ ...props }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const useBaseStyles = makeStyles((theme) => ({
    root: {
      "& .MuiPaginationItem-outlined": {
        border: "1px solid #62686c",
        color: "#62686c",
      },
      "& .Mui-selected": {
        backgroundColor: "transparent",
        borderColor: "#24e5d8",
        color: "#24e5d8",
      },
    },
  }));

  const classesBase = useBaseStyles();

  const { data, error, loading, refetch } = useQuery(
    GET_ALL_STAR_WARS_CHARACTERS,
    {
      variables: {
        page: currentPage.toString(),
      },
      fetchPolicy: "cache-and-network",
    }
  );

  const { getPeople } = data || {};
  const { totalCount, page } = getPeople || {};
  const { pageInfo } = page || {};
  const { perPageCount } = pageInfo || { perPageCount: 1 };

  const getPageCount = (totalCount, perPageCount) => {
    let count = 1;

    if (perPageCount === 10) {
      count = Math.ceil(totalCount / perPageCount);
      return count;
    }
    return Math.ceil(totalCount / 10);
  };

  const count = getPageCount(totalCount, perPageCount);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <AppTemplate header={<p>{`Star Wars Characters (${totalCount})`}</p>}>
      <ListWrapper>
        {getPeople?.page?.edges.map((person) => (
          <a href={`/characters/${person?.node?.name}`}>
            <Card {...person.node} />
          </a>
        ))}
        <MaterialComponent className={classesBase.root}>
          <Pagination
            count={count}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={(event, value) => {
              setCurrentPage(value);
              refetch({
                variables: {
                  page: parseInt(value),
                },
              });
            }}
          />
        </MaterialComponent>
      </ListWrapper>
    </AppTemplate>
  );
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
