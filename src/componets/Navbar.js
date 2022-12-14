import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
      </ul>
      
    </div>
    <div className="form-check form-switch me-3" >
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
        <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >{props.mode} mode</label>
        </div>
  </div>
</nav>
  )
}

Navbar.prototype = {
    title: PropTypes.string,
    about: PropTypes.string
}
Navbar.defaultProps ={
    title: "title name",
    about : "about"
}
