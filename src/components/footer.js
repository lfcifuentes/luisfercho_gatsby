import React from "react"

export default ()=> {
  let year = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="container mx-auto p-12 max-w-4xl text-center">
        <div className="block">
          Copyright © { year } Luis Fernando Cifuentes, all rights reserved
        </div>
        <div className="block text-gray-600">
          Icons by
          <a className="pl-1 underline"  href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">
            FontAwesome
          </a>
        </div>
        <div className="block text-gray-600">
          Image by
          <a className="pl-1 underline" href="https://undraw.co" target="_blank" rel="noopener noreferrer">
            Undraw
          </a>
        </div>
      </div>
    </footer>
  )
}