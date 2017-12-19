/**
 * searchForGame.js
 *
 * @author Philip Van Raalte
 * @date 2017-12-29
 *
 * A query for searching for games
 */
import gql from 'graphql-tag';

{
  Search(q: "Zelda", games: true) {
    pageInfo {
      total
      hasNextPage
      hasPreviousPage
      cursor
    }
    edges {
      node {
        ... on Game {
          id
          title
          released_at
          description
        }
      }
    }
  }
}