import React from "react"

export default (props)=>{
  const course = props.el;
  return (
    <div className="w-full sm:w-1/2  md:w-1/3">
      <div className="shadow p-8 bg-white mr-4 mb-4 rounded border" style={{
        minHeight:"115px"
      }}>
        <h4 className="font-medium ">
          <a href={ course.url } target="_blank" rel="noopener noreferrer">
            { course.title }
          </a>
        </h4>
      </div>
    </div>
  )
}