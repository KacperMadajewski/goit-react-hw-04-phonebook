import React from 'react';

export function Filter({ onChange, filter }) {
  return (
    <>
      <span>Finde contacts by name</span>
      <input type="text" name="filter" onChange={onChange} value={filter} />
    </>
  );
}
