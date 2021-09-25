import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({placeholder}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const filterStoreBySearchWord = (searchWord) => {
    fetch("http://localhost/backend/stores/?searchWord=" + searchWord)
      .then(response => response.json())
      .then(data => setFilteredData(data.stores));
  }
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      filterStoreBySearchWord(searchWord)

    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="SearchBar">
      <div className="searchInputs">
        <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
        <div className="searchIcon">
        {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
        </div>
      </div>

      {filteredData.length !== 0 && (
        <div className="storeResults">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <div className="storeItem">
                <p>
                  <p>{value.name}</p>
                </p>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}

export default SearchBar;