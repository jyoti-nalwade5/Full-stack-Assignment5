import React from 'react';

export default function ProductEdit({ match }) {
  const { id } = match.params;
  return (
    <h2>{`This is a placeholder for editing Product ${id}`}</h2>
  );
}