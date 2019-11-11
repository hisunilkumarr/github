import React from "react";

const RepoSearchContext = React.createContext({
  query: "",
  type: "",
  lang: "",
  searchInput: () => {},
  typeInput: () => {},
  langInput: () => {},
  repoList: []
});

export default RepoSearchContext;
