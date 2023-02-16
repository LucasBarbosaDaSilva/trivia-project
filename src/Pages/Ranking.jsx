import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ranking.css';

export default class Ranking extends Component {
  state = {
    rankings: [],
  };

  componentDidMount() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    this.setState({ rankings: ranking });
  }

  render() {
    const { rankings } = this.state;
    return (
      <div data-testid="ranking-title" id="ranking-page">
        <div id="ranking-header">
          <h2>Ranking</h2>
        </div>
        <div id="ranking-results">

          {rankings.sort((a, b) => b.score - a.score)
            .map((ranking, index) => (
              <div key={ index } id="results">
                <p data-testid={ `player-name-${index}` }>{ ranking.name }</p>
                <img src={ ranking.image } alt={ ranking.name } id="image" />
                <p
                  data-testid={ `player-score-${index}` }
                  className="score"
                >
                  Pontuação:
                  { ranking.score }
                </p>
              </div>
            ))}
        </div>
        <Link
          id="link"
          to="/"
          data-testid="btn-go-home"
        >
          Inicio
        </Link>
      </div>
    );
  }
}
