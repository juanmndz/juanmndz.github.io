import React from 'react';
import Back2Top from 'react-back2top';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import UpIcon from 'material-ui/svg-icons/navigation/arrow-upward';

import Tab from './components/Tab';
import Header from './components/Header';
import Container from './components/styles/Container';

const App = () => (
  <div>
    <Container>
      <Header />
    </Container>
    <Tab />
    <Back2Top visibilityHeight={300} scrollDuration={200}>
      <FloatingActionButton className={'back2top'}>
        <UpIcon />
      </FloatingActionButton>
    </Back2Top>
  </div>
);
export default App;
