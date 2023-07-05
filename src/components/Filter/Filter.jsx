import React from 'react';
import PropTypes from 'prop-types';


export function Filter({ onChange, filter }) {
  return (
    <>
      <span>Finde contacts by name</span>
      <input type="text" name="filter" onChange={onChange} value={filter} />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.any,
};