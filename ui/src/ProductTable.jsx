/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProductRow = withRouter(({ product, deleteProduct, index }) => (

  <tr>
    <td>{product.name}</td>
    <td>
      $
      {product.pricePerUnit}
    </td>
    <td>{product.category}</td>
    <td><a href={product.imageUrl} target="_blank" rel="noopener noreferrer">View</a></td>
    <td><Link to={`/view/${encodeURIComponent(product.imageUrl)}`}>ViewImage</Link></td>
    <td><Link to={`/edit/${product.id}`}>Edit</Link></td>
    <td><button type="button" onClick={() => { deleteProduct(index); }}>Delete</button></td>
  </tr>
));

export default function ProductTable({ products, deleteProduct }) {
  const productRows = products.map(product => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={product.id}
    />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>ViewImage</th>
          <th>Action</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}
