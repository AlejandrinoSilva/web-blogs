import React from 'react';
import avatar from '../statics/user1-128x128.jpg';


const About = () => (
  <div className="row">
    <div className="col-md-4">
            <div className="card card-widget widget-user">
              <div className="widget-user-header text-white img-div-c" style={{position:`center`}}>
                <h3 className="widget-user-username ">Silva Ramón A.</h3>
                <h5 className="widget-user-desc ">Web Designer</h5>
               </div>
              <div className="widget-user-image">
                <img className="img-circle" src={avatar} alt="User Avatar" />
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header"><a href="https://github.com/AlejandrinoSilva/"><ion-icon name="logo-github"></ion-icon></a></h5>
                    </div>

                  </div>

                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header"><a href="https://www.facebook.com/ramon.silva.themax"><ion-icon name="logo-facebook"></ion-icon></a></h5>
                    </div>

                  </div>

                  <div className="col-sm-4">
                    <div className="description-block">
                      <h5 className="description-header"><a href="https://www.linkedin.com/in/ramon-alejandrino-silva"><ion-icon name="logo-linkedin"></ion-icon></a></h5>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
          <div className="col-md-8">
          <div className="box box-solid">
            <div className="box-header with-border">
              <i className="fa fa-text-width"></i>

              <h3 className="box-title">Un poco de ¿Quién Soy?</h3>
            </div>

            <div className="box-body">
              <dl className="dl-horizontal">
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
                <dt>Euismod</dt>
                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                <dt>Malesuada porta</dt>
                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                <dt>Hobbit</dt>
                <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                  sit amet risus.
                </dd>
              </dl>
            </div>
          </div>

          </div>
  </div>)

export default About;
