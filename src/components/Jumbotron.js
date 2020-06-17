import React from 'react';
import About from './About';
import './Apps.css';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './Index';

function Jumbotron() {
  return (
  <main role="main">

  <div className="jumbotron bg-primary jumbotron-fluid">
    <div className="container">
      <h1 className="display-4 font-weight-bold tit">Web Blogs</h1>
      <p className="">Bienvenido a este pequeño espacio donde vamos a compartir
      pequeños conocimientos y otras cosas, al pasar el tiempo ire agregando cosas y
    quitando otras</p>
    </div>
  </div>

  <div className="container">

    <div className="row">
      <div className="col-md-8">
        <Layout>
          <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
        </Layout>
      </div>
      <div className="col-md-4">
        <h2>Section</h2>
      </div>
    </div>

    <hr />

  </div>

</main>

);
}

const Layout = (props) => (
  <div className="Container">
    {props.children}
  </div>
)

export default Jumbotron;
