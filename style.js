// NEED TO STUDY THIS !
// function getAreaOfCircle(radius) {
//   return Math.pow(radius, 2) * Math.PI;
// }

// console.log(getAreaOfCircle(8));

// function getAreaOfSquare(side) {
//   return Math.pow(side, side);
// }
// console.log(getAreaOfSquare(3));

// const getAreaOfSquare = function(side) {
//   return Math.pow(side, side);
// };
// console.log(getAreaOfSquare(4));

// function calcArea(height, width) {
//   return height * width;
// }
// let wall1 = calcArea(9, 12);
// console.log(wall1);

// let wall2 = calcArea(9, 10);
// console.log(wall2);

// let totalArea = wall1 + wall2;
// console.log(totalArea);

function random() {
  return Math.floor(Math.random() * 10 + 1);
}
function speed(speed) {
  let initial = speed;
  let randomSpeed = random();
  let final = initial - randomSpeed;
  console.log(randomSpeed);
  return final;
}
console.log(speed(50));
