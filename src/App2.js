import { useState } from "react";
import "./index2.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "",
    description: "",
    price: 12,
    rating: 7.5,
  },
  {
    id: 2,
    name: "Product 2",
    image: "",
    description: "",
    price: 29,
    rating: 10.5,
  },
  {
    id: 3,
    name: "Product 3",
    image: "",
    description: "",
    price: 32.9,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Product 4",
    image: "",
    description: "",
    price: 7.9,
    rating: 24.9,
  },
];

export default function App2() {
  const [search, setSearch] = useState("");
  const [sortByRating, setSortByRating] = useState("");

  function handleOnSearch(keyword) {
    setSearch(keyword);
    console.log(keyword);
  }

  function handleOnSort(rateOption) {
    setSortByRating(rateOption);
    console.log(rateOption);
  }
  return (
    <div>
      <Header
        search={search}
        sortByRating={sortByRating}
        onSearch={handleOnSearch}
        onSort={handleOnSort}
      />
      <Content />
    </div>
  );
}

function Header({ search, sortByRating, onSearch, onSort }) {
  return (
    <div className="header">
      <h1>Topnivo Ecommerce</h1>
      <Search
        search={search}
        sortByRating={sortByRating}
        onSearch={onSearch}
        onSort={onSort}
      />
    </div>
  );
}

function Search({ search, sortByRating, onSearch, onSort }) {
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
      </form>
    </div>
  );
}

function Content() {}
