import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTimer } from '../actions';

class Timer extends Component {
  componentDidMount() {
    this.handleTimer();
  }

  componentDidUpdate() {
    const { currentTime, isTimerPaused, reestart } = this.props;
    // const maxQuestions = 4;
    if (currentTime === 0 || isTimerPaused) {
      clearInterval(this.timer);
    }

    if (reestart) {
      this.handleTimer();
    }
  }

  handleTimer() {
    const { decrementTime } = this.props;
    const oneSec = 1000;
    this.timer = setInterval(() => {
      decrementTime();
    }, oneSec);
  }

  render() {
    const { currentTime } = this.props;

    return (
      <div className="timer">
        Timer:
        {currentTime}
      </div>);
  }
}

const mapStateToProps = (state) => ({
  currentTime: state.time.currentTime,
  isTimerPaused: state.time.isTimerPaused,
  reestart: state.time.reestart,
});

const mapDispatchToProps = (dispatch) => ({
  decrementTime: () => dispatch(setTimer()),
});

Timer.propTypes = {
  currentTime: PropTypes.number.isRequired,
  decrementTime: PropTypes.func.isRequired,
  isTimerPaused: PropTypes.bool.isRequired,
  reestart: PropTypes.bool.isRequired,
  // count: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
