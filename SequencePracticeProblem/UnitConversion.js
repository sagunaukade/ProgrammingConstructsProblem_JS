// a. 1ft = 12 in then 42 in = ? ft
let inchs = 42;
let ft = inchs / 12;
console.log("42 inch = " + ft + " feet");

//b. Rectangular Plot of 60 feet x 40 feet in meters
let length = 60;
let breadth = 40;
let area = length * breadth;
let areas = (area * 0.0929).toFixed(2);
console.log("area in sq metres = " + areas + " sq-m");

//calculate for 25 plots
let totalArea = areas * 25;
console.log("Total Area of 25 such plots in sq-m = " + totalArea + " sq-m");

//c. Calculating area of 25 such plots
let areaInAcre = (totalArea / 4047).toFixed(2);
console.log("Total Area of 25 such plots in acre = " + areaInAcre + " acres");
