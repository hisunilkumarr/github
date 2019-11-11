import React from "react";
import Styles from "../../../assets/styles/dashboard/c_repositories.module.scss";

const Repo = props => {
  const { repos } = props;
  const { list, details } = Styles;
  return (
    <ul className={list}>
      {repos.repoList.map(repo => (
        <li key={repo.name}>
          <h3>
            <a href={repo.url}>{repo.name}</a>
          </h3>
          <p>{repo.desc}</p>
          <div className={details}>
             {repo.language ? <span> {repo.language}</span> : null}
            <span>Updated on {new Date(repo.updatedOn).toDateString()}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Repo;
