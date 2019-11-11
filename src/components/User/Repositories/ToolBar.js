import React, { useContext } from "react";
import RepoSearchContext from "../Repositories/RepoSearchContext";
import SearchBar from "../../UI/Search";
import Button from "../../UI/Button";
import Select from "../../UI/Select";
import Styles from "../../../assets/styles/dashboard/c_toolbar.module.scss";

const ToolBar = props => {
  const RepoSearch = useContext(RepoSearchContext);
  let repoTypes = ["Sources", "Forks", "Archieved", "Mirrors"];

  return (
    <div className={Styles.toolbar}>
      <SearchBar />
      <Select
        name="repoType"
        label="Type"
        onChange={RepoSearch.typeInput}
        values={repoTypes}
      />
      <Select
        name="repoLang"
        label="Languages"
        onChange={RepoSearch.langInput}
        values={props.languages}
      />
      <Button name="New" classes="green" />
    </div>
  );
};

export default ToolBar;
