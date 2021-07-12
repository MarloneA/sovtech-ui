import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useQuery } from "react-query";

const CardBodyFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  padding: 2rem;
  margin: 1rem 0px;
  background-color: rgb(32, 44, 51);
  border-radius: 0.4rem;

  &:hover {
    cursor: pointer;
    background: #2c3c48;
  }
`;

const GroupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const GroupLabel = styled.label`
  color: rgb(98, 104, 109);
  font-size: 0.7rem;
  font-weight: bolder;
  letter-spacing: 1.7px;
  margin-top: 0.1rem;
  text-transform: uppercase;
`;

const GroupValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  white-space: initial;
  text-overflow: initial;
  overflow-wrap: break-word;
  overflow: hidden;
  background-color: transparent;
  text-align: inherit;
  color: rgb(233, 234, 234);
`;

const WGSRackListItem = ({
  name,
  gender,
  mass,
  height,
  homeworld,
  ...props
}) => {
  const { isLoading, data } = useQuery("getHomeWorld", () =>
    fetch(homeworld).then((res) => res.json())
  );

  return (
    <CardBodyFlex>
      <GroupContent>
        <GroupValue>{name || "—"}</GroupValue>
        <GroupLabel>Name</GroupLabel>
      </GroupContent>

      <GroupContent>
        <GroupValue>{gender || "–"}</GroupValue>
        <GroupLabel>gender</GroupLabel>
      </GroupContent>

      <GroupContent>
        <GroupValue>{mass || "—"}</GroupValue>
        <GroupLabel>mass</GroupLabel>
      </GroupContent>

      <GroupContent>
        <GroupValue>{height || "—"}</GroupValue>
        <GroupLabel>height</GroupLabel>
      </GroupContent>

      <GroupContent>
        <GroupValue>{isLoading ? "...loading" : data?.name || "—"}</GroupValue>
        <GroupLabel>homeworld</GroupLabel>
      </GroupContent>
    </CardBodyFlex>
  );
};

WGSRackListItem.propTypes = {
  barcodeId: PropTypes.string,
  dateCreated: PropTypes.number,
  id: PropTypes.string,
  index: PropTypes.number,
  pathname: PropTypes.string,
  readableRunId: PropTypes.string,
  totalSamples: PropTypes.number,
};

export default WGSRackListItem;
