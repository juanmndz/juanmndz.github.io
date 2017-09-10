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

const AboutMe = () => (
  <div className="row center-xs">
  <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
    <div className="box">

  <Card style={{ backgroundColor: 'none', boxShadow: 'none' }}>
    <CardTitle
      title="About Me"
      titleColor="white"
      subtitleColor="white"
    />
    <CardMedia>
      <img className="Project__img" src="http://i.imgur.com/vOFA28O.jpg" alt="About me" />
    </CardMedia>
    <CardText className="Project__text">I am web developer with fanscinating ambitoin with learning web technology.</CardText>
    <CardActions>
      <RaisedButton
        href="http://juanmndz.github.io/JuanMendezResume.pdf"
        target="_blank"
        label="Resume"
        primary
        icon={<LiveDemo />}
      />
    </CardActions>
  </Card>
  </div>
  </div>
  </div>
);


export default AboutMe;