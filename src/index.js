function vectorLength(vector){
  console.log(vector);
  // Make the coordinates explicit
  var x1 = vector[0][0];
  var y1 = vector[0][1];
  var x2 = vector[1][0];
  var y2 = vector[1][1];

  // Calculate the length of each side
  xChange = Math.abs(x1-x2);
  yChange = Math.abs(y1-y2);

  // Using the side lengths, we calculate the length of the hypotenuse
  var vectorLen = Math.sqrt(Math.pow(xChange, 2) + Math.pow(yChange,2));

  // Return the length
  return vectorLen;
}

console.assert(vectorLength([[0, 1],[0, 0]]) === 1)
console.assert(vectorLength([[0, 3],[4, 0]]) === 5)
console.assert(vectorLength([[1, -1],[1, -1]]) === 0)
