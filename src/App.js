import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Container from './components/Container';
import './components/Apps.css';


function App() {
  return (
    <Fragment>
      <header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <NavBar />
      </header>

      <main role="main">
        <Jumbotron />
        <Container />
      </main>
      <Footer />

   </Fragment>
  );
}

export default App;
