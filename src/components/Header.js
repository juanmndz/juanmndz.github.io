import React from 'react';
import Avatar from 'material-ui/Avatar';
import Typing from './Typing';

import StyledLinkedinButton from './styles/StyledLinkedinButton';
import StyledGithubButton from './styles/StyledGithubButton';
import StyledMediumButton from './styles/StyledMediumButton';
import StyledTwitterButton from './styles/StyledTwitterButton';
import StyledYoutubeButton from './styles/StyledYoutubeButton';
import WrapperButton from './styles/WrapperButton';
import NavSocialLinks from './styles/NavSocialLinks';

const Header = () => (
  <div>
    <div id="background-wrap">
      <div className="x2">
        <div className="cloud" />
      </div>

      <div className="x3">
        <div className="cloud" />
      </div>

      <div className="x5">
        <div className="cloud" />
      </div>
    </div>
    <div className="head">
      <Avatar
        className="Home__Avatar"
        src="https://avatars0.githubusercontent.com/u/16310386?v=4&s=460"
        size={150}
      />
    </div>
    <NavSocialLinks>
      <a href="//linkedin.com/in/jcmende2/">
        <WrapperButton icon="linkedin">
          <StyledLinkedinButton icon="linkedin" />
        </WrapperButton>
      </a>
      <a href="//github.com/juanmndz?tab=repositories">
        <WrapperButton icon="github">
          <StyledGithubButton icon="github" />
        </WrapperButton>
      </a>
      <a href="//medium.com/@juanmndz19">
        <WrapperButton icon="medium">
          <StyledMediumButton icon="medium" />
        </WrapperButton>
      </a>
      <a href="//twitter.com/Juanmndz19">
        <WrapperButton icon="twitter">
          <StyledTwitterButton icon="twitter" />
        </WrapperButton>
      </a>
      <a href="//youtube.com/channel/UCnoGDtqrK1kZbIfrRoIAo2Q">
        <WrapperButton icon="youtube">
          <StyledYoutubeButton icon="youtube" />
        </WrapperButton>
      </a>
    </NavSocialLinks>
    <Typing onTextChange="Juan Mendez" />
  </div>
);
export default Header;
