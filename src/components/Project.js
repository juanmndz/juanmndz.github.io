import React from 'react';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import LiveDemo from 'material-ui/svg-icons/hardware/desktop-windows';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GithubButton from './icons/GithubButton';

const StyledGithubButton = styled(GithubButton)`
  width: 26px;
  height: 26px;
  fill: white;
`;

const Project = ({ text, img, title, github_url, project_url, date }) => (
  <Card style={{ backgroundColor: 'none', boxShadow: 'none' }}>
    <CardTitle
      title={title}
      titleColor="white"
      subtitleColor="white"
    />

    {/* <CardTitle title={title} titleColor='white' subtitleColor='white' subtitle={<TechImgs imgs={tech}/>} /> */}
    <CardMedia>
      <img className="Project__img" src={img} role="presentation" />
    </CardMedia>
    <CardText className="Project__text">{text}</CardText>
    <CardActions>
      <RaisedButton
        href={github_url}
        target="_blank"
        label="CODE"
        secondary
        icon={<StyledGithubButton />}
      />
      <RaisedButton
        href={project_url}
        target="_blank"
        label="LIVE DEMO"
        primary
        icon={<LiveDemo />}
      />
    </CardActions>
  </Card>
);

Project.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github_url: PropTypes.string.isRequired,
  project_url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Project;