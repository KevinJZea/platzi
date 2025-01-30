import React, { forwardRef } from 'react';
import { css, cx } from '@emotion/css';
import PropTypes from 'prop-types';

const buttonStyles = (
  bgColor,
  color,
  borderRadius,
  width,
  height,
  bgColorHover,
  colorHover
) => css`
  background-color: ${bgColor};
  color: ${color};
  border-radius: ${borderRadius ?? '8px'};
  width: ${width ?? '150px'};
  height: ${height ?? '40px'};
  text-align: center;
  &:hover {
    background-color: ${bgColorHover};
    color: ${colorHover};
  }
`;

const Button = forwardRef((props, ref) => {
  const {
    className,
    bgColor,
    color,
    borderRadius,
    width,
    height,
    bgColorHover,
    colorHover,
    ...otherProps
  } = props;

  return (
    <button
      className={cx(
        buttonStyles(
          bgColor,
          color,
          borderRadius,
          width,
          height,
          bgColorHover,
          colorHover
        ),
        className
      )}
      ref={ref}
      type="button"
      {...otherProps}
    ></button>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColorHover: PropTypes.string,
  colorHover: PropTypes.string,
};

export default Button;
