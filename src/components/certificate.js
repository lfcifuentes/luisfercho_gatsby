import React from "react"

export default (props) => {
  const certificate = props.el;
  return (
    <div className="w-full sm:w-1/2  md:w-1/3">
      <div className="shadow px-8 py-5 bg-white mr-4 mb-4 rounded border" style={{
        minHeight:"115px"
      }}>
        <h4 className="font-medium ">
          {certificate.title}
        </h4>
        <div className="text-center">
          <span className="inline-block bg-teal-200 text-teal-700 p-2 mt-2 radius">
            Calification: {certificate.score}
          </span>
        </div>
      </div>
    </div>
  )
}