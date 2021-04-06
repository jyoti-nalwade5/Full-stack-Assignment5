import React from 'react';

export default function ProductImage({ match }) {
  const { url } = match.params;
  { console.log(decodeURIComponent(url)); }

  return (
    <div>
      <br />
      <br />
      <img style={{ maxWidth: '50vw' }} src={decodeURIComponent(url)} alt="" />
    </div>
  );
}