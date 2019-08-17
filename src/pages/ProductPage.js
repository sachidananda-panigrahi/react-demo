import React, { Component } from 'react';
import { ProductListComponent } from '../components/product/ProductListComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {Product: {productList}} = this.props;
    return (
      <div style={{marginTop: '2em'}}>
        <ProductListComponent productList={productList} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Product: state.Product
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default (
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductPage)
);
