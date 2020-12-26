$('main-title').text('Cars');

const carsArray = ['Tesla', 'BMW', 'Skoda'];

for (let i = 0; i < carsArray.length; i++) {
  $('body').append('<p>' + carsArray[i] + '</p>');
}

$('p').append(' the best.');

const firstTimeout = setTimeout(() => {
  console.log('its the first timeout');
}, 5000);

const secondTimeout = setTimeout(() => {
  console.log('its  the second timeout');
}, 1000);

const thirdTimeout = setTimeout(() => {
  console.log('its third timeout');
}, 2000);

if (firstTimeout + secondTimeout + thirdTimeout === 6) {
  clearTimeout(thirdTimeout);
}

console.log('first timeout id = ', firstTimeout);
console.log('second timeout id = ', secondTimeout);
console.log('third timeout id = ', thirdTimeout);

console.warn('----');
/* -------- */

let counter = 0;
const intervalId = setInterval(() => {
  // console.log('You spent ' + counter++ + ' sec');

  if (counter === 10) {
    // console.log('Omg... You are so boring.');
    clearInterval(intervalId);
  }
}, 1000);

/* ------ */

let leftOffset = 0;
setInterval(() => {
  // $('#main-title').offset({ left: leftOffset });
  leftOffset++;
  if (leftOffset === 200) {
    leftOffset = 0;
  }
}, 30);

/* ------ */

$('#first-paragraph').click((event) => {
  console.log(
    'Click position: x - ' + event.pageX + ' ' + ', y = ' + event.pageY
  );
});

// $('html').mousemove((event) => {
//   $('#move-element').offset({
//     left: event.pageX - 50,
//     top: event.pageY - 50,
//   });
// });

/* --------- */

$('html').on('click', (event) => {
  $('#follow-click').offset({
    top: event.pageY,
    left: event.pageX,
  });
});

let i = 0;
const rotationLimit = 50;
const rotationCfg = { left: 0, top: 0 };

setInterval(() => {
  if (rotationCfg.left < rotationLimit && rotationCfg.top === 0) {
    rotationCfg.left++;
  }

  $('#square').offset(rotationCfg);

  counter++;
}, 50);
