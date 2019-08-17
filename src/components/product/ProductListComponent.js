import React, { PureComponent } from 'react';
import { ProductComponent } from './ProductComponent';

export class ProductListComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { productList } = this.props;
    return (
      <div className="container">
        <div className="row">
          {productList && productList.map(product => {
            return (
              <div className="col-sm" key={product.id}>
                <ProductComponent product={product}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
