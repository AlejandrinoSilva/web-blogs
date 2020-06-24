import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact">Contacto</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">Quien Soy</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Japones
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdown01">
          <Link className="dropdown-item" to="/">Contacto</Link>
          <Link className="dropdown-item" to="/">Contacto</Link>
          <Link className="dropdown-item" to="/">Contacto</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>)

export default NavBar;
