import React from 'react';
import { Link } from 'react-router-dom';

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

  onChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      product: { ...prevState.product, [name]: value },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { product } = this.state;
    console.log(product); // eslint-disable-line no-console
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
    this.setState({ product: data.product });
    
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
                  <input name="name" value={name} onChange={this.onChange} key={id} />
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
                <input
                  name="pricePerUnit"
                  value={pricePerUnit}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Image:</td>
              <td>
                <input
                  name="imageurl"
                  value={imageUrl}
                  onChange={this.onChange}
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