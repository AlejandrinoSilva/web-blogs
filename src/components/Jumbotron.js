import React from 'react';
import About from './About';
import './Apps.css';
import './style.css';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './Index';


function Jumbotron() {
  return (
  <main role="main">

  <div className="jumbotron bg-jumb jumbotron-fluid">
    <div className="container text-center">
      <h1 className="display-4 font-weight-bold jumtit">Web Blogs</h1>
      <p className="">Bienvenido a este pequeño espacio donde vamos a compartir<br />
      pequeños conocimientos y otras cosas, al pasar el tiempo ire agregando cosas y
    quitando otras</p>
    </div>
  </div>

  <div className="container">

    <div className="posts-container mx-auto px-3 my-5">
      <div className="posts">
      <div className="post">
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
    </div>
  </div>
</div>
    <hr />

</main>

);
}

const Layout = (props) => (
  <div className="Container">
    {props.children}
  </div>
)

export default Jumbotron;
