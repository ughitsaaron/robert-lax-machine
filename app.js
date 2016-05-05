'use strict';

const canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  $red = '#e2644a',
  $blue = '#3888d8',
  margin = 50,
  w = 100,
  h = 27;

var columns = [],
  x = margin,
  rows = 0;

for (let i = 0; i < window.innerWidth/(w + margin) - 1; i++) {
  x = i * (w + margin);
  rows = random(5, window.innerHeight/(h + margin));
  columns.push({ x: x, rows: random(0,2) ? 0 : rows });
}

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

for (let i = 0; i < columns.length; i++) {
  let column = columns[i];

  for (let row = 0, y = margin; row < column.rows; row++, y += margin + h) {
    let fill = '';

    switch(random(0, 3)) {
      case 0:
        fill = $blue;
        break;
      case 1:
        fill = $red;
        break;
      default:
        fill = 'white';
        break;
    }

    ctx.fillStyle = fill;
    ctx.fillRect(column.x, y, w, h);
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
