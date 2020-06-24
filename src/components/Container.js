import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './Contact';
import Index from './Index';
import About from './About';

const Container = () => (
  <div className="container">

    <div className="posts-container mx-auto px-3 my-5">
      <div className="posts">
        <div className="post">
          <Layout>
            <Router>
              <Switch>
                <Route exact="exact" path="/" component={Index} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
              </Switch>
            </Router>
          </Layout>
        </div>
      </div>
    </div>
  </div>
)

const Layout = (props) => (<div className="Container">
  {props.children}
</div>)

export default Container;
