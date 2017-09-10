import React from 'react';
import Typist from 'react-typist';
import PropTypes from 'prop-types'

class Typing extends React.Component {

    state = {
      renderMsg: false,
    }

    onHeaderTyped = () => {
      this.setState({ renderMsg: true });
    }

    render() {
      return (
    <div>
    <div className="Typing">
      <Typist
        className="Typing-header"
        avgTypingSpeed={60}
        startDelay={1500}
        cursor={{ hideWhenDone: true }}
        onTypingDone={this.onHeaderTyped}

      >
        <a href="">{this.props.onTextChange}</a>
      </Typist>
    </div>
    {this.state.renderMsg &&
    <div className="Typing">
      <Typist
        className="Typing-sub-header"
        avgTypingSpeed={60}
        startDelay={1000}
      >
      &bull; <b>Web Developer</b>
        <br />
        &bull; <b>Creator of Things</b>
      </Typist>
    </div>
    }
  </div>
);
}
}

Typing.propTypes = {
  onTextChange: PropTypes.string.isRequired,
}

export default Typing;