import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const SubmitButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};
