import React, { useContext } from "react";
import Styles from "../../assets/styles/element/c_search.module.scss";
import RepoSearchContext from "../User/Repositories/RepoSearchContext";

const SearchBar = props => {
  const repoSearch = useContext(RepoSearchContext);
  return (
    <>
      <input
        type="text"
        name="repoSearch"
        className={Styles.searchBar}
        onInput={repoSearch.searchInput}
        placeholder="Find a repository..."
      />
    </>
  );
};

export default SearchBar;
