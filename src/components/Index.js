import React from 'react';
import log from '../statics/v5-new-logo.png'

const Index = () => (<div className="container">
  <h2 className="post-title">Titulo1</h2>
  <p>Auto-sizing The example below uses a flexbox utility to vertically center the contents and changes .col to .col-auto so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.</p>
  <p> <a href="https://v5.getbootstrap.com"><img alt="New Bootstrap docs layout" src={log} /></a></p>
  <p>Mas texto aqui</p>
</div>)

export default Index;
