import styled from 'styled-components';

import StyledFacebookButton from './StyledFacebookButton';
import StyledLinkedinButton from './StyledLinkedinButton';
import StyledGithubButton from './StyledGithubButton';
import StyledMediumButton from './StyledMediumButton';
import StyledTwitterButton from './StyledTwitterButton';
import StyledYoutubeButton from './StyledYoutubeButton';



const IconList = {
  facebook: '#3b5998',
  linkedin: '#0077b5',
  github: '#6e5494',
  medium: '#00ab6c',
  twitter: '#1da1f2',
  youtube: '#cd201f',
};

const IconComponents = {
  facebook: StyledFacebookButton,
  linkedin: StyledLinkedinButton,
  github: StyledGithubButton,
  medium: StyledMediumButton,
  twitter: StyledTwitterButton,
  youtube: StyledYoutubeButton,
};

const WrapperButton = styled.div`
  text-align: center;
  text-decoration: none;
  float: left;
  width: 36px;
  height: 36px;
  border: 2px solid #FFF;
  border-radius: 100%;
  margin-right: ${props =>
    props.icon === 'youtube' ? '0px' : '7px'};
  display: flex;
  align-items: flex-start;
  &:hover {
    background: ${props =>
      props.icon ? IconList[props.icon] : '#000000'};
    border: 2px solid transparent;
  }
  &:hover ${props => IconComponents[props.icon]} {
    transform: rotate(360deg);
  }
`;

export default WrapperButton;