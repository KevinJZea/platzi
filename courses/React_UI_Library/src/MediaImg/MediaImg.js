import React from 'react';
import { css, cx } from '@emotion/css';
import PropTypes from 'prop-types';

const MediaImgStyles = (borderRadius, width, height) => css`
  border-radius: ${borderRadius ?? '16px'};
  width: ${width ?? '100px'};
  height: ${height ?? '100px'};
`;

const MediaImg = React.forwardRef((props, ref) => {
  const { className, borderRadius, width, height, src, alt, ...otherProps } =
    props;

  return (
    <img
      {...otherProps}
      className={cx(MediaImgStyles(borderRadius, width, height), className)}
      ref={ref}
      src={src}
      alt={alt}
    />
  );
});

MediaImg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MediaImg;
