const getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

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

const isFound = (distance) => {
  return distance < 8;
};

let customerClicks = 0;
const width = 400;
const height = 400;

const target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

$('#map').on('click', (event) => {
  customerClicks++;

  const distance = getDistance(event, target);
  const distanceHint = getDistanceHint(distance);

  console.log(distance);

  if (isFound(distance) === true) {
    alert('Yeah! You used' + customerClicks);
  }

  showDistanceHint(distanceHint);
});
