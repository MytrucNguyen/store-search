import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({placeholder}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [stores, setStores] = useState([]);

  const handleSearch = (e) => {
    // console.log("hello world");
    fetch("http://localhost/backend/stores")
      .then(response => response.json())
      .then(data => setStores(data.stores));
  }

  console.log(stores);

  return (
    <div className="SearchBar">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          // value={wordEntered}
          // onChange={handleSearch}
        />
        <button onClick={handleSearch} className="searchIcon">
            <SearchIcon />
        </button>
      </div>
      <div className="storeResults">
        {stores.map((value, key) => {
          return (
            <div className="storeItem">
              <p>
                <p>{value.name}</p>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default SearchBar;
