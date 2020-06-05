import React  from "react"
import { useStaticQuery, graphql } from "gatsby"
import Post from "./post"
import Certificate from "./certificate"
import Course from "./course"

export default () => {
  const data = useStaticQuery(graphql`{
          codigofacilitoJson {
              data {
                  finished_courses {
                      title
                      url
                  }
                  certificates {
                      title
                      score
                      code
                  }
              }
          }
      }
  `);
  return (
    <div className="mt-24">
      <div className="max-w-4xl mx-auto">
        <Post
          data={data.codigofacilitoJson.data.certificates}
          title="Certificates CódigoFacilito"
          card={Certificate}
        />
        <Post
          data={data.codigofacilitoJson.data.finished_courses}
          title="Cources CódigoFacilito"
          card={Course}
        />
      </div>
    </div>
  );
}