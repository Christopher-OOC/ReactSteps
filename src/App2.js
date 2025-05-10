import { useState } from "react";
import "./index2.css";

const initialProducts = [
  {
    id: 1,
    name: "Product 1",
    image: "https://i.pravatar.cc/50?u=7654",
    description:
      "Nulla sit commodo incididunt irure ea ad. Nulla sit commodo incididunt irure ea ad",
    price: 12,
    rating: 7.5,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://i.pravatar.cc/50?u=7954",
    description:
      "Aliqua et cupidatat elit aute esse. Nulla sit commodo incididunt irure ea ad.",
    price: 29,
    rating: 10.5,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://i.pravatar.cc/50?u=2654",
    description:
      "Occaecat qui esse adipisicing duis nostrud consequat cupidatat.Dolore ex esse excepteur minim ullamco eiusmod dolor esse.",
    price: 32.9,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://i.pravatar.cc/50?u=7656",
    description:
      "Anim ullamco Lorem sint magna occaecat qui esse adipisicing duis nostrud consequat cupidatat.",
    price: 7.9,
    rating: 24.9,
  },
];

export default function App2() {
  const [search, setSearch] = useState("");
  const [sortByRating, setSortByRating] = useState("");
  const [products, setProducts] = useState(initialProducts);
  const [searchProducts, setSearchProducts] = useState(initialProducts);

  function handleOnSearch(keyword) {
    setSearch(keyword);
    console.log(keyword);
  }

  function handleOnSort(rateOption) {
    setSortByRating(rateOption);
    console.log(rateOption);
  }

  function handleSearch(e, search, rating) {
    e.preventDefault();
    setSearchProducts([
      ...products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      ),
    ]);
  }

  return (
    <div>
      <Header
        search={search}
        sortByRating={sortByRating}
        onSearch={handleOnSearch}
        onSort={handleOnSort}
        handleSearch={handleSearch}
      />
      <Content searchProducts={searchProducts} />
    </div>
  );
}

function Header({ search, sortByRating, onSearch, onSort, handleSearch }) {
  return (
    <div className="header">
      <h1>Topnivo Ecommerce</h1>
      <Search
        search={search}
        sortByRating={sortByRating}
        onSearch={onSearch}
        onSort={onSort}
        handleSearch={handleSearch}
      />
    </div>
  );
}

function Search({ search, sortByRating, onSearch, onSort, handleSearch }) {
  return (
    <div className="form__box">
      <form className="form__search">
        <div className="form__box--item">
          <label>Search</label>
          <input
            value={search}
            type="search"
            onChange={(e) => onSearch(e.target.value)}
            className="cool-search"
            placeholder="Search..."
          />
        </div>
        <div className="form__box--item">
          <label>Rating</label>
          <select
            value={sortByRating}
            onChange={(e) => onSort(Number(e.target.value))}
            className="cool-select"
          >
            <option value={1}>Below 10</option>
            <option value={2}>Greather than 10</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={(e) => handleSearch(e, search, sortByRating)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

function Content({ searchProducts }) {
  return (
    <div className="content">
      <h2 className="content__title">Product Lists</h2>
      <div className="product-list">
        {searchProducts.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product__image" />
      <h2>Name: {product.name}</h2>
      <p>Description: {product.description}</p>
      <span>Rating: {product.rating}</span>
    </div>
  );
}
