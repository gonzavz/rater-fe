import gql from 'graphql-tag';

export default gql`
  mutation Register($username: String, $password: String) {
    register(username: $username, password: $password) {
      token
    }
  }
`;
