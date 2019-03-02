import React from 'react';
import PropTypes from 'prop-types';

//Presentational coompoenttakes title and subtitle 
fuction Header({ title, subtitle }) {
  return (
    <>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Header;