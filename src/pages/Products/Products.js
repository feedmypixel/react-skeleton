import React, { lazy } from 'react';

const ProductsHeading = lazy(() => import('./ProductsHeading'));
const ProductsBody = lazy(() => import('./ProductsBody'));
const Layout = lazy(() => import('../../components/Layout'));

function Products() {
  return (
    <Layout heading={ProductsHeading}>
      <ProductsBody />
    </Layout>
  );
}

export default Products;
