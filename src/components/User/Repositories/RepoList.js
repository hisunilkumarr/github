import React, { useContext } from "react";
import RepoSearchContext from "./RepoSearchContext";
import RepoSearchStatus from "../Repositories/RepoSearchStatus";
import Repo from "./Repo";

const RepoList = props => {
  const repoSearch = useContext(RepoSearchContext);
  return (
    <>
      <RepoSearchStatus search={repoSearch} />
      <Repo repos={repoSearch} />
    </>
  );
};

export default RepoList;
