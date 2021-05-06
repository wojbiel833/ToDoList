import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const Button = ({ variant = '', ...otherProps }) => {
  Button.propTypes = {
    variant: PropTypes.string,
  };
  return (
    <button
      {...otherProps}
      className={
        styles.component +
        variant
          .split(' ')
          .map(name => ' ' + (styles[name] || name))
          .join('')
      }
    />
  );
};

export default Button;
