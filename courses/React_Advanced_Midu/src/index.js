import React from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { App } from "./App";
import Context from "./Context";

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token"); // asegúrate que el token esté guardado así
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: "https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  request: (operation) => {
    const token = window.sessionStorage.getItem("token");
    const authorization = token ? `bearer ${token}` : "";
    console.log(authorization);

    operation.setContext({
      headers: { authorization },
    });
  },

  onError: (error) => {
    const { networkError } = error;

    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      window.location.href = "/";
    }
  },
});

const root = createRoot(document.getElementById("app"));
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
);
