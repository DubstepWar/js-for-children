const logName = function () {
  console.log('Denis');
};

const drawCats = function (howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + ' =^.^=');
  }
};

const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const areArraysSame = (firstArray, secondArray) => {
  if (
    !firstArray ||
    !firstArray.length ||
    !secondArray ||
    !secondArray.length ||
    firstArray.length !== secondArray.length
  ) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
};
