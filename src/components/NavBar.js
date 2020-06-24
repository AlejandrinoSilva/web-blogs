import React from 'react';

const NavBar = () => (
// <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark menu">
<nav className="container flex-wrap flex-md-nowrap py-0 px-3">
  <h1 className="navbar-brand nav-sketch ">Web Blogs</h1>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse tit" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Contact">Contacto</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/About">Quién soy</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Japones
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdown01">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>)

export default NavBar;
