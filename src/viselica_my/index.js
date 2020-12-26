const myWord = 'пыжик';
let result = [];

for (let i = 0; i < myWord.length; i++) {
  result.push("'_' ");
}
console.log(result);

while (true) {
  const userLetter = prompt('Enter your letter:');

  if (!userLetter || userLetter.length > 1) {
    alert('Error! You must enter only 1 character per attempt.');
    continue;
  }

  let isRight = false;
  for (let i = 0; i < myWord.length; i++) {
    if (myWord[i] === userLetter) {
      result[i] = userLetter;
      isRight = true;
      alert(result.join(''));
    }
  }

  if (myWord === result.join('')) {
    alert('DONE!!!');
    break;
  }

  // show game status
  if (!isRight) {
    alert('Try again. Current progress: ' + result.join(''));
  }
}
