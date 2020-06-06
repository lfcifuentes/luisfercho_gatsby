import React, { Fragment} from "react"

export default (props) => (
  <Fragment>
    <h2 className="text-3xl font-bold text-center">
      { props.title }
    </h2>
    <div className="flex mt-6 flex-wrap mb-4">
      {
        props.data.map((el,index)=> (
          <props.card el={el} key={index} />
        ))
      }
    </div>
  </Fragment>
)