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
      <h1 className="display-4 font-weight-bold grand">Web Blogs</h1>
      <p className="">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
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
          </Switch>
        </Router>
        </Layout>
      </div>
      <div className="col-md-4">
        <About />
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
