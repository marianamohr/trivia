import React, { Component } from 'react';
import '../Style/Feedback.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Components/Header';

class Feedback extends Component {
  render() {
    const { assertions, score } = this.props;
    const minAssertions = 3;
    return (
      <div className="feedback">
        <Header />
        <div className="box-feedback">
          <h1 data-testid="feedback-text">Feedback</h1>
          {assertions >= minAssertions
            ? <h2 data-testid="feedback-text">Mandou bem!</h2>
            : <h2 data-testid="feedback-text">Podia ser melhor...</h2>}
          <h2 data-testid="feedback-total-score">
            Score:
            {' '}
            {score}
          </h2>
          <h2 data-testid="feedback-total-question">
            Assertions:
            {' '}
            {assertions}
          </h2>
          <div className="feedback-btn-box">
            <Link to="/">
              <button
                className="btn-feedback"
                type="button"
                data-testid="btn-play-again"
              >
                Play Again
              </button>
            </Link>

            <Link to="/ranking">
              <button
                className="btn-feedback"
                type="button"
                data-testid="btn-ranking"
              >
                Ranking
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.user.assertions,
  score: state.user.score,
});
export default connect(mapStateToProps, null)(Feedback);
