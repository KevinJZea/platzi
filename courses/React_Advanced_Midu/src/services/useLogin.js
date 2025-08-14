import { useMutation, gql } from "@apollo/client";

const MUTATION_LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLogin = () => {
  return useMutation(MUTATION_LOGIN);
};
