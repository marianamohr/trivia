import React from 'react';
import '../Style/Ranking.css';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrRankingPlayers: [],
    };
  }

  componentDidMount() {
    this.handleRanking();
  }

  handleRanking() {
    // const { arrRankingPlayers } = this.state;
    const localRanking = JSON.parse(localStorage.getItem('ranking'));
    if (localRanking) {
      localRanking.sort((a, b) => b.score - a.score);
      this.setState({
        arrRankingPlayers: localRanking,
      });
    }
  }

  render() {
    const { arrRankingPlayers } = this.state;
    const maxPositionsRanking = 3;
    return (
      <div className="ranking">
        <h1 data-testid="ranking-title">Ranking</h1>
        {arrRankingPlayers.slice(0, maxPositionsRanking).map((item, index) => (
          <div className={ `position-ranking ranking-${index + 1}` } key={ index }>
            <img src={ item.picture } alt={ item.picture } />
            <p data-testid={ `player-name-${index}` }>{item.name}</p>
            <p data-testid={ `player-score-${index}` }>{item.score}</p>
          </div>
        ))}
        <Link className="btn-back" data-testid="btn-go-home" to="/">Back</Link>
      </div>
    );
  }
}

export default Ranking;
