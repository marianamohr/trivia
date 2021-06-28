import React from 'react';
import '../Style/Header.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { gravatar, name, score } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          alt="user login"
          src={ gravatar }
        />
        <h4
          data-testid="header-player-name"
          className="player"
        >
          Player:
          {' '}
          { name }
        </h4>

        <h4
          className="score"
          data-testid="header-score"
        >
          Score:
          {' '}
          { score }
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  gravatar: state.user.gravatar,
  score: state.user.score,
});

Header.propTypes = {
  gravatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
