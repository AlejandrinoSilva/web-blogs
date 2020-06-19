import React from 'react';

const Contact = () => (<div className="container">
  <form>
    <div className="form-group">
      <label for="exampleFormControlInput1">Nombre y Apellido</label>
      <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Nombre y Apellido"/>
      <label for="exampleFormControlInput1">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div className="form-group">
      <label for="exampleFormControlTextarea1">Ingrese su comentario</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese su comentario"></textarea>
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-2">Enviar</button>
    </div>
  </form>
</div>)

export default Contact;
