/* eslint linebreak-style: ["error", "windows"] */
/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "react/no-multi-comp": "off" */
/* eslint "no-alert": "off" */

const buttonStyle = {
  color: 'black',
  background: 'rgb(242, 245, 244)',
  alignContent: 'center',
};

import graphQLFetch from './graphQLFetch.js';

// eslint-disable-next-line react/prefer-stateless-function
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
    </tr>
  );
}

function ProductTable({ products }) {
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
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;

    const product = {
      name: form.productName.value,
      pricePerUnit: form.pricePerUnit.value.substr(1),
      category: form.category.value,
      imageUrl: form.imageUrl.value,
    };
    const { createProduct } = this.props;
    createProduct(product);
    form.productName.value = '';
    form.pricePerUnit.value = '$';
    form.category.value = '';
    form.imageUrl.value = '';
  }

  render() {
    return (
      <form name="productAdd" onSubmit={this.handleSubmit}>
        <div className="formContainer">
          <div className="formCol">
            Category:
            <br />
            <select id="menu" name="category">
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Jackets">Jackets</option>
              <option value="Sweaters">Sweaters</option>
              <option value="Accessories">Accessories</option>
            </select>
            <br />
            <br />
            Product Name:
            <br />
            <input type="text" name="productName" />
            <br />
          </div>
              &nbsp;&nbsp;
          <div className="formCol">
            Price Per Unit:
            <br />
            <input type="text" name="pricePerUnit" defaultValue="$" />
            <br />
            <br />
            Image URL:
            <br />
            <input type="text" name="imageUrl" />
            <br />
          </div>
        </div>
        <br />
        <button style={buttonStyle} type="submit">Add Product</button>
      </form>
    );
  }
}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
            productList {
              id
              name
              pricePerUnit
              category
              imageUrl
            }
          }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList });
    }
  }

  async createProduct(product) {
    const query = `mutation addProduct($product: ProductInputs!) {
            addProduct(product: $product) {
                id
            }
          }`;

    const data = await graphQLFetch(query, { product });
    if (data) {
      this.loadData();
    }
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <p>Showing all available products</p>
        <hr />
        <ProductTable products={products} />
        <br />
        <p>Add a new product to inventory</p>
        <hr />
        <ProductAdd createProduct={this.createProduct} />
      </React.Fragment>
    );
  }
}

const element = <ProductList />;
ReactDOM.render(element, document.getElementById('contents'));
