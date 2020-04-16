export const checkLocalStorageDetailExists = () => {
  if (localStorage) {
    if (localStorage.getItem("rockPaperScores")) {
      return true;
    }
    return false;
  } else {
    return console.log("localStorage is not supported by your browser");
  }
};

export const updateLocalStorageDetails = (key) => {
  if (checkLocalStorageDetailExists() === false) {
    let scores = {};
    if (key === "playerOne") {
      scores = {
        playerOneScore: 1,
        playerTwoScore: 0,
        playerThreeScore: 0,
      };
      return localStorage.setItem("rockPaperScores", JSON.stringify(scores));
    } else if (key === "playerTwo") {
      scores = {
        playerOneScore: 0,
        playerTwoScore: 1,
        playerThreeScore: 0,
      };
      return localStorage.setItem("rockPaperScores", JSON.stringify(scores));
    } else {
      scores = {
        playerOneScore: 0,
        playerTwoScore: 0,
        playerThreeScore: 1,
      };
      return localStorage.setItem("rockPaperScores", JSON.stringify(scores));
    }
  } else if (checkLocalStorageDetailExists() === true) {
    let storedScores = localStorage.getItem("rockPaperScores");
    storedScores = JSON.parse(storedScores);
    if (key === "playerOne") {
      storedScores["playerOneScore"] = storedScores["playerOneScore"] + 1;
    } else if (key === "playerTwo") {
      storedScores["playerTwoScore"] = storedScores["playerTwoScore"] + 1;
    } else {
      storedScores["playerThreeScore"] = storedScores["playerThreeScore"] + 1;
    }

    return localStorage.setItem(
      "rockPaperScores",
      JSON.stringify(storedScores)
    );
  }
};

export const getLocalStorageScores = () => {
  if (checkLocalStorageDetailExists() === true) {
    let storedScores = localStorage.getItem("rockPaperScores");
    storedScores = JSON.parse(storedScores);
    return storedScores;
  } else {
    return {
      playerOneScore: 0,
      playerTwoScore: 0,
      playerThreeScore: 0,
    };
  }
};

export const clearLocalStorage = () => {
  if (checkLocalStorageDetailExists() === true) {
    return localStorage.removeItem("rockPaperScores");
  }
  return;
};
