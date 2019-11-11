import React, { useState, useEffect } from "react";
import ToolBar from "./ToolBar";
import RepoList from "./RepoList";
import RepoSearchContext from "./RepoSearchContext";
import API from "../../../Config/API";

const Repositories = props => {
  const [repoSearch, setRepoSearch] = useState("");
  const [repoLanguages, setRepoLanguages] = useState([]);
  const [repoList, setRepoList] = useState([]);
  const [repoType, setRepoType] = useState("All");
  const [repoLang, setRepoLang] = useState("All");

  const searchInput = e => {
    setRepoSearch(e.target.value);
  };

  const selectTypeInput = e => {
    setRepoType(e.target.value);
  };

  const selectLangInput = e => {
    setRepoLang(e.target.value);
  };

  const repoTypeWise = (type, res) => {
    switch (type) {
      case "All":
        res = res.filter(repo => repo.name !== "");
        break;
      case "Sources":
        res = res.filter(repo => repo.fork !== true);
        break;
      case "Forks":
        res = res.filter(repo => repo.fork === true);
        break;
      case "Archieved":
        res = res.filter(repo => repo.archived === true);
        break;
      case "Mirrors":
        res = res.filter(repo => repo.mirror_url !== null);
        break;
      default:
        res = res.filter(repo => repo.name !== "");
    }
    return res;
  };

  const repoLangOptions = repos => {
    let repoLang = [
      ...new Set(
        repos.filter(repo => repo.language !== null).map(repo => repo.language)
      )
    ];
    setRepoLanguages(repoLang);
  };

  const repoLangWise = (lang, repos) => {
    if (lang === "All") {
      return repos;
    } else {
      repos = repos.filter(repo => repo.language === lang);
      return repos;
    }
  };

  const repoSearchWise = (query, repos) => {
    if (query === "") {
      setRepoList(repos);
    } else {
      let newRepoList = repos.filter(item =>
        item.name.toLowerCase().includes(query)
      );
      setRepoList(newRepoList);
    }
  };

  useEffect(() => {
    API.Repos()
      .then(repos => repoLangOptions(repos))
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    API.Repos()
      .then(repos => repoTypeWise(repoType, repos))
      .then(repos => repoLangWise(repoLang, repos))
      .then(repos => repoSearchWise(repoSearch, repos))
      .catch(err => {
        console.log(err);
      });
  }, [repoSearch, repoType, repoLang]);

  return (
    <>
      <RepoSearchContext.Provider
        value={{
          query: repoSearch,
          type: repoType,
          lang: repoLang,
          searchInput: searchInput,
          typeInput: selectTypeInput,
          langInput: selectLangInput,
          repoList: repoList
        }}
      >
        <ToolBar languages={repoLanguages} />
        <RepoList />
      </RepoSearchContext.Provider>
    </>
  );
};

export default Repositories;
