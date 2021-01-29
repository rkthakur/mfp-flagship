import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.products().on('value', snapshot => {
      const productsObject = snapshot.val();

      const productsList = Object.keys(productsObject).map(key => ({
        ...productsObject[key],
        uid: key,
      }));

      this.setState({
        products: productsList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.products().off();
  }

  render() {
    const { products, loading } = this.state;

    return (
      <div>
        <h1>Product</h1>

        {loading && <div>Loading ...</div>}

        <Productlist products={products} />
      </div>
    );
  }
}

const Productlist = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <span>
          <strong>ID:</strong> {product.id}
        </span>
        <span>
          <strong>Name:</strong> {product.name}
        </span>
        <span>
          <strong>Brand:</strong> {product.brand}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(ProductPage);
