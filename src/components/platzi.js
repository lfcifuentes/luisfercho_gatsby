import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Post from "./post"
import Certificate from "./certificate_platzi"

export default ()=> {

  const data = useStaticQuery(graphql`{
      platziJson {
          userData {
              courses {
                  badge
                  diploma_link
                  title
                  url
              }
          }
      }
  }
  `);

  return (
    <div className="mt-24">
      <div className="max-w-4xl mx-auto mb-8">
        <Post
          data={data.platziJson.userData.courses}
          title="Certificates Platzi"
          card={Certificate}
        />
      </div>
    </div>
  )
}