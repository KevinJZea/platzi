import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegister } from "../services/useRegister";
import { useLogin } from "../services/useLogin";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  const [registerMutation, { loading: registerLoading, error: registerError }] =
    useRegister();
  const [loginMutation, { loading: loginLoading, error: loginError }] =
    useLogin();

  const errorMessage = registerError
    ? "El usuario ya existe o hay algún problema."
    : loginError && "La contraseña no es correcta o el usuario no existe.";

  const onSignUp = ({ email, password }) => {
    registerMutation({ variables: { input: { email, password } } }).then(
      ({ data }) => {
        const { signup } = data;
        activateAuth(signup);
      }
    );
  };

  const onLogIn = ({ email, password }) => {
    loginMutation({ variables: { input: { email, password } } }).then(
      ({ data }) => {
        const { login } = data;
        activateAuth(login);
      }
    );
  };

  return (
    <>
      <UserForm
        disabled={registerLoading}
        error={errorMessage}
        title="Sign Up"
        onSubmit={onSignUp}
      />
      <UserForm
        disabled={loginLoading}
        error={errorMessage}
        title="Log In"
        onSubmit={onLogIn}
      />
    </>
  );
};
