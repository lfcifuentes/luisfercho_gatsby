import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import Codigofacilito from "../components/codigofacilito"
import Platzi from "../components/platzi"

export default function Home() {
  return (
    <div>
      <Header />
      <Platzi />
      <Codigofacilito />
      <Repos />
    </div>
  )
}
