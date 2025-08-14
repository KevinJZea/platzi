import React from "react";
import { Article, Img, ImgWrapper } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useToggleLike } from "../../services/useToggleLike";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [mutation] = useToggleLike();

  const [show, element] = useNearScreen();

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={element}>
      {show ? (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      ) : null}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: function (props, propName, componentName) {
    const propsValue = props[propName];

    if (propsValue === undefined)
      return new Error(`${propName} value must be defined`);

    if (propsValue < 0)
      return new Error(`${propName} value must be greater than 0`);
  },
  src: PropTypes.string.isRequired,
};
