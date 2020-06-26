import React, { Fragment } from 'react';
import PostData from '../datas/posts.json';

export const PostList = () => (
    PostData.map((postDetail, index) => {
        return (

            <div className="col-md-16 blog-main">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-text-width"></i>
                <h3 className="card-title">{postDetail.kanji}</h3>
              </div>

              <div className="box-body">
                <dl className="dl-horizontal">
                  <dt>Lectura</dt>
                  <dd>{postDetail.reading}</dd>
                  <dt>Traducción</dt>
                  <dd>{postDetail.spanish}</dd>
                </dl>
              </div>
            </div>

            </div>


        )
    })
)

const Japones = () => (
          <Fragment>
            <h2 className="pb-4 mb-4 font-italic border-bottom">Lista de Kanji</h2>
            <PostList />
          </Fragment>
)

export default Japones;
