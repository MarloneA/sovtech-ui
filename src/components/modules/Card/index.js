import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const createGaps = ({ columnGap, rowGap }) => css`
  grid-column-gap: ${`${columnGap}rem`};
  column-gap: ${`${columnGap}rem`};
  grid-row-gap: ${`${rowGap}rem`};
  row-gap: ${`${rowGap}rem`};
`;

const CardBodyGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    `repeat(${columns}, minmax(0, 1fr))`};
  grid-template-rows: auto;
  align-items: center;

  ${({ columnGap, rowGap }) => createGaps({ columnGap, rowGap })};

  padding: 2rem;
  height: 3.6rem;
  margin: 1rem 0px;
  background-color: rgb(32, 44, 51);
  border-radius: 0.4rem;
  width: 60vw;

  &:hover {
    cursor: pointer;
    background: #2c3c48;
  }
`;

const GridColumn = styled.div`
  grid-column: span ${({ column }) => column};
`;

const GroupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const GroupLabel = styled.label`
  color: rgb(98, 104, 109);
  font-family: Avenir, AvenirLTStd-Book, "Helvetica Neue", Helvetica, Roboto,
    sans-serif;
  font-size: 0.7rem;
  font-weight: bolder;
  letter-spacing: 1.7px;
  margin-top: 0.1rem;
  text-transform: uppercase;
`;

const GroupValue = styled.div`
  font-family: Avenir, AvenirLTStd-Book, "Helvetica Neue", Helvetica, Roboto,
    sans-serif;
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
  return (
    <CardBodyGrid columns={25} rowGap={2.3} columnGap={0.25}>
      <GridColumn column={5}>
        <GroupContent>
          <GroupValue>{name || "—"}</GroupValue>
          <GroupLabel>Name</GroupLabel>
        </GroupContent>
      </GridColumn>
      <GridColumn column={5}>
        <GroupContent>
          <GroupValue>{gender || "–"}</GroupValue>
          <GroupLabel>gender</GroupLabel>
        </GroupContent>
      </GridColumn>
      <GridColumn column={4}>
        <GroupContent>
          <GroupValue>{mass || "—"}</GroupValue>
          <GroupLabel>mass</GroupLabel>
        </GroupContent>
      </GridColumn>
      <GridColumn column={3}>
        <GroupContent>
          <GroupValue>{height || "—"}</GroupValue>
          <GroupLabel>height</GroupLabel>
        </GroupContent>
      </GridColumn>
      <GridColumn column={7}>
        <GroupContent>
          <GroupValue>{homeworld || "—"}</GroupValue>
          <GroupLabel>homeworld</GroupLabel>
        </GroupContent>
      </GridColumn>
    </CardBodyGrid>
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
