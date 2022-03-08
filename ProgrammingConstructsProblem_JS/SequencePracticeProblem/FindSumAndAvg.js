// 4 reads 5 Random 2 Digit values then find their sum and the average
let twoDigitNumber;
let sum = 0;
for (i = 0; i < 5; i++) {
  twoDigitNumber = Math.floor(Math.random() * 90) + 10;
  console.log("Number: " + twoDigitNumber);
  sum += twoDigitNumber;
}
console.log("Sum of 5 two digits number is   " + sum);
console.log("Average of the sum of the 5 two digits number is  " + sum / 5);
