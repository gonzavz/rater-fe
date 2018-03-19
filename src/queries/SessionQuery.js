import gql from 'graphql-tag';

export default gql`
query Session {
  session {
    person {
      username
      name
      surname
    }
  }
}
`