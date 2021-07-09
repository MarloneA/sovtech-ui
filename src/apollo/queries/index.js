import gql from "graphql-tag";

export const GET_ONE_STAR_WARS_CHARACTER = gql`
  query getOneStarWarsCharacter($name: String) {
    getPerson(name: $name) {
      name
      gender
      mass
      height
      homeworld
    }
  }
`;

export const GET_ALL_STAR_WARS_CHARACTERS = gql`
  query getAllStarWarsCharacters($page: String) {
    getPeople(page: $page) {
      page {
        edges {
          node {
            name
            gender
            mass
            height
            homeworld
          }
        }
        pageInfo {
          nextPage
          prevPage
          perPageCount
        }
      }
      totalCount
    }
  }
`;
