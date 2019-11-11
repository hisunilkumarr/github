import axios from "./axios-githubuser";

const API = {
  URL: {
    User: "",
    Repos: "/repos"
  },
  User: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(API.URL.User)
        .then(res => res.data)
        .then(res => {
          resolve({
            name: res.name,
            githubId: res.login,
            imageUrl: res.avatar_url,
            desc: res.bio,
            corp: res.company,
            location: res.location,
            email: res.email
          });
        })
        .catch(err => reject(err));
    });
  },
  Repos: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(API.URL.Repos)
        .then(res => res.data)
        .then(res => {
          console.log(res);
          let newRepos = res.map(repo => {
            return {
              name: repo.name,
              desc: repo.description,
              language: repo.language,
              url: repo.html_url,
              updatedOn: repo.updated_at,
              fork: repo.fork,
              archived: repo.archived,
              mirror_url: repo.mirror_url
            };
          });
          resolve(newRepos);
        })
        .catch(err => reject(err));
    });
  }
};

export default API;
