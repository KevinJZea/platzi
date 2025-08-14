import { useMutation, gql } from "@apollo/client";

const MUTATION_REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegister = () => {
  return useMutation(MUTATION_REGISTER);
};
