import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const FavButton = ({ liked, likes, onClick }) => {
  return (
    <Button onClick={onClick}>
      {likes} likes!{liked ? " LIKED" : null}
    </Button>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
