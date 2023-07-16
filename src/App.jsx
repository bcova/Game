import React, { useState,useEffect } from "react";
import SplashScreen from "./pages/SplashScreen";
function App() {
  const [buttonState, setButtonState] = useState(Array(9).fill(false));
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState('Player One');
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [correctButton, setCorrectButton] = useState(null);
  const [incorrectButton, setIncorrectButton] = useState(null);
  const [showSplashScreen, setShowSplashScreen] = useState(true);



    const handleDismissSplashScreen = () => {
      setShowSplashScreen(false);
    };



const handlePlaceSquare = (index) => {
    if (!gameOver) {
      if (selectedSquare === null && currentPlayer === 'Player One') {
        const newButtonState = [...buttonState];
        newButtonState[index] = true;
        setButtonState(newButtonState);
        setSelectedSquare(index);
        setCurrentPlayer('Player Two');
      } else if (selectedSquare === null && currentPlayer === 'Player Two') {
        const newButtonState = [...buttonState];
        newButtonState[index] = true;
        setButtonState(newButtonState);
        setSelectedSquare(index);
        setCurrentPlayer('Player One');
      }
    }
  };



  const handleGuess = (index) => {
    if (!gameOver) {
      if (selectedSquare !== null) {
        if (index === selectedSquare) {
          if (currentPlayer === 'Player One') {
            setPlayerOneScore(playerOneScore + 1);
            if (playerOneScore + 1 === 3) {
              alert('Game Over! Player One Wins!');
              resetGame()
            } else {
              setCorrectButton(index);
              setTimeout(() => {
                setCorrectButton(null);
              }, 1000);
            }
          } else {
            setPlayerTwoScore(playerTwoScore + 1);
            if (playerTwoScore + 1 === 3) {
              alert('Game Over! Player Two Wins!');
              resetGame()
            } else {
              setCorrectButton(index);
          setTimeout(() => {
            setCorrectButton(null);
          }, 1000);
            }
          }
        } else {
          setIncorrectButton(index)
          setTimeout(() => {
            setIncorrectButton(null);
          }, 1000);
        }
        setSelectedSquare(null);
      } else {
        alert("It's not your turn to guess.");
      }
    }
  };

  const resetGame = () => {
    setButtonState(Array(9).fill(false));
    setSelectedSquare(null);
    setCurrentPlayer('Player One');
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setGameOver(false);
  };


  return (
    <div>
    {showSplashScreen ? (
      <SplashScreen onDismiss={handleDismissSplashScreen} />
    ) : (
      <>
      <div id="main">
      <div id="stats">
        <h1>Turn: {currentPlayer}</h1>
        <div id="scores">
          <h1 className="score">P1: {playerOneScore}</h1>
          <h1 className="score">P2: {playerTwoScore}</h1>
        </div>
      </div>
      <div id="board">
        {buttonState.map((state, index) => (
          <button
            className={correctButton === index ? 'correct cell' : incorrectButton === index ? 'cell incorrect': 'cell' }
            key={index}
            onClick={() => (selectedSquare === null ? handlePlaceSquare(index) : handleGuess(index))}
          
          ></button>
        ))}
      </div>
      <div id="rstbtndiv">
        <button id="resetbtn" onClick={resetGame}>Reset Game</button>
      </div>
    </div>
      </>
    )}
  </div>
  );
}

export default App;
