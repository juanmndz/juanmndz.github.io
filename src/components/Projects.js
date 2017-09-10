import React from 'react';
import PropTypes from 'prop-types';

import projects from '../project';
import Project from './Project';

const Projects = () => (
  <div className="row center-xs">
    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
      <div className="box">
        {projects.map(props => <Project key={props.title} {...props} />)}
      </div>
    </div>
  </div>
);

Project.propType = {
  title: PropTypes.string.isRequired,
};

export default Projects;