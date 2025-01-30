import { createElement, forwardRef } from 'react';
import { css, cx } from '@emotion/css';
import PropTypes from 'prop-types';

const TextStyles = (fontWeight, fontSize, lineHeight) => css`
  font-weight: ${fontWeight || '700'};
  font-size: ${fontSize || '20px'};
  line-height: ${lineHeight || '25px'};
`;

const Text = forwardRef((props, ref) => {
  const {
    component,
    fontWeight,
    fontSize,
    lineHeight,
    className,
    ...otherProps
  } = props;

  const Element = createElement(component, {
    ...otherProps,
    ref,
    className: cx(TextStyles(fontWeight, fontSize), className),
  });

  return Element;
});

Text.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'span',
    'textarea',
    'p',
  ]),
  lineHeight: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
};

Text.defaultProps = {
  component: 'p',
};

export default Text;
