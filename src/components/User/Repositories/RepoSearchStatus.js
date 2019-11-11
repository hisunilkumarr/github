import React from "react";
import SearchStyles from "../../../assets/styles/element/c_search.module.scss";

const RepoSearchStatus = props => {
  const { query, type, lang, repoList } = props.search;

  return query !== "" || type !== "All" || lang !== "All" ? (
    <div className={SearchStyles.searchStatus}>
      <p>
        <strong>{repoList.length}</strong> result{" "}
        <strong>{type !== "All" ? type : null}</strong> for repositories{" "}
        {query !== "" ? (
          <span>
            {" "}
            matching <strong>{query}</strong>
          </span>
        ) : null}{" "}
        {lang !== "All" ? (
          <span>
            {" "}
            written in <strong>{lang}</strong>
          </span>
        ) : null}
      </p>
      <span>Clear Filter</span>
    </div>
  ) : null;
};

export default RepoSearchStatus;
