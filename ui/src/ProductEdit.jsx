import React from 'react';
import { Link } from 'react-router-dom';
import NumInput from './NumInput.jsx';
import TextInput from './TextInput.jsx';

import graphQLFetch from './graphQLFetch.js';

export default class ProductEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (id !== prevId) {
      this.loadData();
    }
  }

  onChange(event, naturalValue) {
    const { name, value: textValue } = event.target;
    const value = naturalValue === undefined ? textValue : naturalValue;
    this.setState(prevState => ({
      product: { ...prevState.product, [name]: value },
    }));
  }
  async handleSubmit(e) {
    e.preventDefault();
    const { product } = this.state;
    const query = `mutation updateProduct(
        $id: Int!
        $changes: ProductUpdateInputs!
    ) {
        updateProduct(
            id: $id
            changes: $changes
    ) {
        id
        name
        category
        pricePerUnit
        imageUrl
    }
    }`;
    const { id, created, ...changes } = product;
    const data = await graphQLFetch(query, { changes, id });
    if (data) {
      this.setState({ product: data.updateProduct });
      alert('Updated Product Successfully'); // eslint-disable-line no-alert
    }
  }
  
  async loadData() {
    const query = `query product($id: Int!) {
      product(id: $id) {
        id name pricePerUnit imageUrl
        category
      }
    }`;
    const { match: { params: { id } } } = this.props;
    const data = await graphQLFetch(query, { id });
    this.setState({ product: data ? data.product : {}, invalidFields: {} });
    
  }

  render() {
    const { product: { id } } = this.state;
    const { match: { params: { id: propsId } } } = this.props;
    if (id == null) {
      if (propsId != null) {
        return <h3>{`Product with ID ${propsId} not found.`}</h3>;
      }
      return null;
    }

    const {
        product: {name, pricePerUnit, category, imageUrl}
    } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{`Editing product: ${id}`}</h3>
        <table>
          <tbody>
            <tr>
            <td>Product Name:</td>
                <td>
                <TextInput 
                name="name" 
                value={name} 
                onChange={this.onChange} 
                key={id} 
                />
                </td>
            </tr>
            <tr>
              <td>Category:</td>
              <td>
              <select name="category" value={category} onChange={this.onChange}>
                    <option value="Shirts">Shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Sweaters">Sweaters</option>
                    <option value="Accessories">Accessories</option>
              </select>
              </td>
            </tr>
            <tr>
              <td>Price Per Unit:</td>
              <td>
              <NumInput
                  name="pricePerUnit"
                  value={pricePerUnit}
                  onChange={this.onChange}
                  key={id}
                />
              </td>
            </tr>
            <tr>
              <td>Image:</td>
              <td>
              <TextInput
                  name="imageurl"
                  value={imageUrl}
                  onChange={this.onChange}
                  key={id}
                />
              </td>
            </tr>
            <tr>
              <td />
              <td><button type="submit">Submit</button></td>
            </tr>
          </tbody>
        </table>
        <Link to={`/edit/${id - 1}`}>Prev</Link>
        {' | '}
        <Link to={`/edit/${id + 1}`}>Next</Link>
      </form>
    );
  }
}