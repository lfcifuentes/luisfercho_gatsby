import React, { useEffect, useState } from "react"
import repos_local  from "../data/repos"
import Repo from "./repo"
export default () => {

  const [repos, setRepos] = useState([]);
  const [reposCount, setReposCount] = useState([]);

  useEffect(()=>{
    if(true){
      const data = sessionStorage.getItem("repos");
      let my_repos;
      if(data){
        let my_repos = JSON.parse(data);
        setReposCount(my_repos.length);
        my_repos = my_repos.slice(1,13);
        return setRepos(my_repos);
      }
      async function fetchRepos(){
        const response = await fetch("https://api.github.com/users/luisfercho/repos")
        my_repos = await response.json();
        setReposCount(my_repos.length);
        sessionStorage.setItem("repos",JSON.stringify(my_repos));
        my_repos = my_repos.slice(1,13);
        setRepos(my_repos);
      }
      fetchRepos();
    }else{
      setRepos(repos_local)
    }
  },[])

  return (
    <div className="mx-auto max-w-4xl mt-12 mb-8" >
     <header className="text-center">
       <h2 className="text-3xl font-bold">
         GitHub Repositories:
       </h2>
     </header>
      <ul className="repos-list">
        {
          repos.map((repo)=>{
            return <Repo repo={repo} key={repo.id} />
          })
        }
      </ul>
      <div className="mt-8 text-center">
        <a href="https://github.com/luisfercho" className="btn" target="_blank" rel="noreferrer noopener">
          Show more in GitHub ({ reposCount })
        </a>
      </div>
    </div>
  )
}