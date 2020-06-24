import React, { Fragment, Component } from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import './components/Apps.css';

import { Route, Switch, Link} from 'react-router-dom';
import Contact from './components/Contact';
import Index  from './components/Index';
import About from './components/About';


class App extends Component {
  render() {
  return (
    <Fragment>
      <header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <NavBar />
      </header>

      <main role="main">
        <Jumbotron />
          <div className="container">

            <div className="posts-container mx-auto px-3 my-5">
              <div className="posts">
                <div className="post">
                  <Layout>
                      <Switch>
                        <Route exact="exact" path="/" component={Index} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                      </Switch>
                  </Layout>
                </div>
              </div>
            </div>
          </div>
      </main>
      <Footer />

   </Fragment>
  );
}
}
const Layout = (props) => (<div className="Container">
  {props.children}
</div>)

export default App;
