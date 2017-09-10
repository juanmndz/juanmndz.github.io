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

const Project = ({ title, text, img, article_url }) => (
  <Card style={{ backgroundColor: 'none', boxShadow: 'none' }}>
    <CardTitle
      title={title}
      titleColor="white"
      subtitleColor="white"
    />

    {/* <CardTitle title={title} titleColor='white' subtitleColor='white' subtitle={<TechImgs imgs={tech}/>} /> */}
    <CardMedia>
      <img className="Project__img" src={img} alt="presentation" />
    </CardMedia>
    <CardText className="Project__text">{text}</CardText>
    <CardActions>
      <RaisedButton
        href={article_url}
        target="_blank"
        label="Article Link"
        primary
        icon={<LiveDemo />}
      />
    </CardActions>
  </Card>
);

Project.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  article_url: PropTypes.string.isRequired,
};

export default Project;