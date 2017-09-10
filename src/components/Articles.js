import React from 'react';
import PropTypes from 'prop-types';

import articles from '../article';
import Article from './Article';

const Articles = () => (
  <div className="row center-xs">
    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
      <div className="box">
        {articles.map(props => <Article key={props.title} {...props} />)}
      </div>
    </div>
  </div>
);

Article.propType = {
  title: PropTypes.string.isRequired,
};

export default Articles;