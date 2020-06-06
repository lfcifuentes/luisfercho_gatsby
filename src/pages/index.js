import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import Codigofacilito from "../components/codigofacilito"
import Platzi from "../components/platzi"
import { Helmet } from "react-helmet"
import favicon from "../img/favicon.ico"

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Luis Fernando Cifuentes Web Developer
        </title>
        <link rel="icon" href={favicon} />
        <link rel="canonical" href="https://luisfercho.netlify.app/" />
      </Helmet>
      <Header />
      <Platzi />
      <Codigofacilito />
      <Repos />
    </div>
  )
}
