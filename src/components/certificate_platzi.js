import React from "react"

export default (props) => {
  const certificate = props.el;
  const platzi_url = "http://platzi.com";
  return (
    <div className="w-full sm:w-1/2  md:w-1/3">
      <div className="shadow p-5 bg-white mr-4 mb-4 rounded border items-center">
        <div className="flex">
          <div className="flex-shrink-0">
            <img className="mx-auto"
                 src={ certificate.badge }
                 style={{
                   maxWidth: "55px"
                 }}
                 alt={certificate.title}
                 title={certificate.title}
            />
          </div>
          <h5 className="font-medium pl-2">
            <a href={ platzi_url+certificate.url } target="_blank" rel="noopener noreferrer">
              { certificate.title }
            </a>
          </h5>
        </div>
        <div className="text-center">
          <a href={platzi_url+certificate.diploma_link}  target="_blank" rel="noopener noreferrer" className="btn inline-block mt-2 radius">
            Certificate
          </a>
        </div>
      </div>
    </div>
  )
}