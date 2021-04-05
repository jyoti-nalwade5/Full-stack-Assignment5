import React from 'react';

function ProductRow({ product }) {
    return (
      <tr>
        <td>{product.name}</td>
        <td>
          $
          {product.pricePerUnit}
        </td>
        <td>{product.category}</td>
        <td><a href={product.imageUrl} target="_blank" rel="noopener noreferrer">View</a></td>
        <td><a href={`/#/edit/${product.id}`}>Edit</a></td>
      </tr>
    );
  }
  
  export default function ProductTable({ products }) {
    const productRows = products.map(product => (
      <ProductRow key={product.id} product={product} />
    ));
  
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productRows}
        </tbody>
      </table>
    );
  }