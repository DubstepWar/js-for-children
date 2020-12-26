const words = ['машина', 'голова', 'кошка', 'коробка'];

const getRandomWord = (wordsArray) => {
  return wordsArray[Math.floor(Math.random() * words.length)];
};

const setupAnswerArray = (randomWord) => {
  const arr = [];
  for (let i = 0; i < randomWord.length; i++) {
    arr.push('_');
  }

  return arr;
};

const showPlayerProgress = (answerArray) => {
  alert(answerArray.join(' '));
};

const getGuess = () => {
  return prompt('Enter one letter or press "Cancel" to exit.').toLowerCase();
};

const updateGameState = (userGuess, randomWord, answerArray) => {
  const correctGuesses = 0;
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === userGuess) {
      if (answerArray[i] === '_') {
        answerArray[i] = userGuess;

        correctGuesses++;
      }
    }
  }

  return correctGuesses;
};

const showAnswerAndCongratulatePlayer = (answerArray, randomWord) => {
  showPlayerProgress(answerArray);
  alert('Good job! My word is ' + randomWord + '!');
};

const runTheGame = () => {
  const randomWord = getRandomWord(words);
  const answerArray = setupAnswerArray(randomWord);
  const attemptsNumber = 10;
  let remainingLetters = randomWord.length;
  let userAttempts = 0;

  while (remainingLetters > 0 && userAttempts <= attemptsNumber) {
    showPlayerProgress(answerArray);

    const userGuess = getGuess();

    if (userGuess === null) {
      break;
    } else if (userGuess.length !== 1) {
      alert('You should enter only 1 letter.');
    } else {
      const correctGuesses = updateGameState(
        userGuess,
        randomWord,
        answerArray
      );
      remainingLetters -= correctGuesses;

      userAttempts++;
    }
  }

  if (userAttempts > attemptsNumber) {
    alert('Game over :(');
  } else {
    showAnswerAndCongratulatePlayer(answerArray, randomWord);
  }
};
