import React from "react"

/*
import programming from "../img/programming.svg"
import developer from "../img/developer_activity.svg"
import git from "../img/version_control.svg"
import web_developer from "../img/web_developer.svg"
*/
import coding from "../img/coding.svg"
import github_brand from "../img/github.svg"
import gitlab_brand from "../img/gitlab.svg"
import linkedin_brand from "../img/linkedin.svg"

export default () => {
  const name = "Luis Fernando Cifuentes"
  return (
    <header className="bg-teal-300">
      <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-teal-900 text-4xl">!Hello! <br /> I am Luis Fernando Cifuentes</h1>
          <p className="font-light text-xl">
            Web Developer, PHP, JS, Golang Lover
          </p>
          <span className="flex">
          <a className="mx-2" href="https://dev.to/luisfercho" target="_blank" rel="noopener noreferrer">
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt={name+" DEV Profile"} height="30" width="30" />
          </a>
          <a className="mx-2" href="https://github.com/luisfercho" target="_blank" rel="noopener noreferrer">
            <img src={github_brand} alt={name+" GitHub Profile"} height="30" width="30" />
          </a>
          <a className="mx-2" href="https://gitlab.com/luisfercho" target="_blank" rel="noopener noreferrer">
            <img src={gitlab_brand} alt={name+" GitLab Profile"} height="30" width="30" />
          </a>
          <a className="mx-2" href="https://www.linkedin.com/in/luis-fernando-cifuentes-3a6a90119/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_brand} alt={name+" LinkedIn Profile"} height="30" width="30" />
          </a>
        </span>
        </div>
        <img src={coding} alt="Developer" className="image-header"/>
      </div>
    </header>
  )
}