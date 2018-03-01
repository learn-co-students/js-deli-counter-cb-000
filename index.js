//var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name);
  return `Welcome, ${name}. You are number ${position + 1} in line.`;
}

function nowServing(array) {
  var returnString = "";
  if(array.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    returnString = array.shift();
    return `Currently serving ${returnString}.`;
  }
}

function currentLine(array) {
  var counter = 0;
  //var appendingString = "";
  var returnString = "The line is currently: ";
  if(array.length == 0) {
    return "The line is currently empty.";
  }
  else {
    while(counter < array.length) {
      returnString += `${counter + 1}. ${array[counter]}, `;
      counter++;
    }
  }
  if (returnString[returnString.length-1] === " ") {
    returnString = returnString.slice(0,-1);
  }
  if (returnString[returnString.length-1] === ",") {
    returnString = returnString.slice(0,-1);
  }
  return returnString;
}
