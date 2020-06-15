import React from 'react';
import About from './About';

const Jumbotron = () => (
  <main role="main">

  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">Web Blogs</h1>
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
    </div>
  </div>

  <div className="container">

    <div className="row">
      <div className="col-md-8">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-md-4">
        <About />
      </div>
    </div>

    <hr />

  </div>

</main>

)

export default Jumbotron;
