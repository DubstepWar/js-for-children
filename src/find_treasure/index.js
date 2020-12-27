import { getRandomNumber } from '../../helpers/numbers.js';

const getDistance = (event, target) => {
  const diffX = event.offsetX - target.x;
  const diffY = event.offsetY - target.y;

  // Pifagor:)))
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

const getDistanceHint = (distance) => {
  if (distance < 20) {
    return 'Very-very hot';
  } else if (distance < 40) {
    return 'Hot';
  } else if (distance < 80) {
    return 'Warm';
  } else if (distance < 160) {
    return 'Cold';
  } else if (distance < 320) {
    return 'Very cold';
  } else {
    ('Brrrrrrr...');
  }
};

const showDistanceHint = (distanceHint) => {
  $('#distance-hint').text(distanceHint);
};

const showAttemptsHint = (customerClicks, maxAttempts) => {
  const restAttempts = maxAttempts - customerClicks;
  const attemptsStr = restAttempts === 1 ? 'attempt' : 'attempts';
  const hint = `You have ${restAttempts} ${attemptsStr}`;

  $('#attempts-hint').text(hint);
};

const isFound = (distance) => {
  return distance < 8;
};

const isFail = (customerClicks) => {
  return customerClicks >= maxAttempts;
};

let customerClicks = 0;
const width = 400;
const height = 400;
const maxAttempts = 10;

const target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

$('#map').on('click', (event) => {
  customerClicks++;

  showAttemptsHint(customerClicks, maxAttempts)

  if (isFail(customerClicks) === true) {
    alert('You lose :(');
  }

  const distance = getDistance(event, target);
  const distanceHint = getDistanceHint(distance);

  if (isFound(distance) === true) {
    const clicks = customerClicks === 1 ? ' click' : ' clicks';
    alert('Yeah! You used ' + customerClicks + clicks);
  }

  showDistanceHint(distanceHint);
});
