import React from "react";
import { useFilterContext } from "../../contexts/filter-context";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import FormatPrice from "../../Helpers/FormatPrice";
import {Button} from '../../styles/Button'

const ProductFilterSection = () => {
  const {
    filter: { text, category, color, price, maxPrice, minPrice },
    updateProductList,
    all_products,
    clearFilters
  } = useFilterContext();
  

  const getUniqueData = (data, property) => {
    let value = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      // return (value = ["all", ...new Set([].concat(...value))]);
      value = value.flat();
    }
    return (value = ["all", ...new Set(value)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  // console.log(colorsData);

  return (
    <Wrapper>
      <div className="filter-section">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="search here..."
            onChange={updateProductList}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateProductList}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onChange={updateProductList}
          >
            {companyData.map((curElem) => {
              return (
                <option value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            // console.log(color);
            // console.log(curColor);
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateProductList}
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateProductList}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter_price">
      <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateProductList}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
  .checkStyle {
    font-size: 1.3rem;
    color: #fff;
  }
`;

export default ProductFilterSection;
