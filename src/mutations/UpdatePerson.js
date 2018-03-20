import gql from 'graphql-tag';

export default gql`
  mutation UpdatePersonName($id: ID!, $name: String, $surname: String) {
    updatePerson(id:$id, name: $name, surname: $surname) {
      id
      name
      surname
    }
  }
`;
