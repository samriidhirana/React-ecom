import React from "react";
import styled from "styled-components";
import ProductFilterSection from "../components/ProductPage/ProductFilterSection";
import ProductList from "../components/ProductPage/ProductList";
import SortProductSection from "../components/ProductPage/SortProductSection";
import { useFilterContext } from "../contexts/filter-context";

const ProductsPage = () => {
  const {filter_products} = useFilterContext();
  
  return <Wrapper>
    <div className="grid grid-filter-column container">
      <div>
        <ProductFilterSection />
      </div>

      <section className="product-view--sort">
        <div className="sort-filter">
          <SortProductSection />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>

  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default ProductsPage;
