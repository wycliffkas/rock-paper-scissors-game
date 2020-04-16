import React, { Component } from "react";
import Player from "./components/Player";
import Weapons from "./components/Weapons";
import Controls from "./components/Controls";
import {
  getLocalStorageScores,
  clearLocalStorage,
  updateLocalStorageDetails,
} from "./utils/localStorage";
import "./assets/css/style.css";

const weapons = ["paper", "rock", "scissors"];
class App extends Component {
  state = {
    playerOne: "paper",
    playerTwo: "paper",
    playerThree: "paper",
    winner: "",
    playerOneScore: 0,
    playerTwoScore: 0,
    playerThreeScore: 0,
    playMode: "human vs computer",
  };

  componentDidMount() {
    const results = getLocalStorageScores();
    this.setState({
      playerOneScore: results.playerOneScore,
      playerTwoScore: results.playerTwoScore,
      playerThreeScore: results.playerThreeScore,
    });
  }

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({ winner: "" });
      if (this.state.playMode === "human vs computer") {
        this.setState({
          playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        });
      } else {
        this.setState({
          playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
          playerThree: weapons[Math.floor(Math.random() * weapons.length)],
        });
      }
      if (counter > 5) {
        clearInterval(gameInterval);
        this.selectWinner();
      }
    }, 100);
  };

  declareWinner = (firstPlayer, secondPlayer) => {
    const {
      playerOneScore,
      playerTwoScore,
      playerThreeScore,
      playMode,
    } = this.state;

    if (firstPlayer === secondPlayer) {
      return this.setState({ winner: "Oops it's a Tie!" });
    } else if (
      (firstPlayer === "rock" && secondPlayer === "scissors") ||
      (firstPlayer === "scissors" && secondPlayer === "paper") ||
      (firstPlayer === "paper" && secondPlayer === "rock")
    ) {
      if (playMode === "human vs computer") {
        updateLocalStorageDetails("playerOne");
        return this.setState({
          playerOneScore: playerOneScore + 1,
          winner: "Player One Wins!",
        });
      } else {
        updateLocalStorageDetails("playerThree");
        return this.setState({
          playerThreeScore: playerThreeScore + 1,
          winner: "Player One Wins!",
        });
      }
    } else {
      updateLocalStorageDetails("playerTwo");
      return this.setState({
        playerTwoScore: playerTwoScore + 1,
        winner: "Player Two Wins!",
      });
    }
  };

  selectWinner = () => {
    const { playerOne, playerTwo, playerThree, playMode } = this.state;
    playMode === "human vs computer"
      ? this.declareWinner(playerOne, playerTwo)
      : this.declareWinner(playerThree, playerTwo);
  };

  selectWeapon = (weapon) => {
    this.setState({
      playerOne: weapon,
      winner: "",
    });
  };

  resetGame = () => {
    this.setState({
      playerOne: "paper",
      playerTwo: "paper",
      playerThree: "paper",
      winner: "",
      playerOneScore: 0,
      playerTwoScore: 0,
      playerThreeScore: 0,
      playMode: "human vs computer",
    });
    clearLocalStorage();
  };

  changePlayMode = (event) => {
    if (event.target.value === "playerOne") {
      this.setState({
        playMode: "human vs computer",
      });
    }
    this.setState({
      playMode: "computer vs computer",
    });
  };

  render() {
    const {
      playerOne,
      playerTwo,
      playerThree,
      winner,
      playerOneScore,
      playerTwoScore,
      playMode,
      playerThreeScore,
    } = this.state;
    return (
      <div>
        <h2 className="headers">Rock Paper Scissors</h2>
        <div className="flex-container">
          <div className="column">
            <h4 className="headers">Player One</h4>
            <div className="col">
              <span>
                <select onChange={this.changePlayMode} name="changeMode">
                  <option value="playerOne">You</option>
                  <option value="playerThree">Computer</option>
                </select>
              </span>
              <span className="square">
                {playMode === "human vs computer"
                  ? playerOneScore
                  : playerThreeScore}
              </span>
            </div>
            <Player
              weapon={
                playMode === "human vs computer" ? playerOne : playerThree
              }
            />
            {playMode === "human vs computer" ? (
              <Weapons selectWeapon={this.selectWeapon} />
            ) : null}
          </div>

          <div className="column">
            <h4 className="headers">Player Two</h4>
            <div className="col">
              <span>Computer</span>
              <span className="square bg-alt">{playerTwoScore}</span>
            </div>
            <Player weapon={playerTwo} />
          </div>
        </div>

        <div className="winner">{winner ? winner : null}</div>
        <Controls startGame={this.startGame} resetGame={this.resetGame} />
      </div>
    );
  }
}

export default App;
