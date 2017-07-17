
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  // return "Welcome, name. You are number # in line."
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  for(var i = 0; i < katzDeliLine.length; i++) {
    return `Welcome, ${name}. You are number ${position} in line.`;
  };
}

function nowServing(array) {
  if( array == undefined || array.length == 0) {
    return "There is nobody waiting to be served!";
  }
for(var i = 0; i < array.length; i++) {
  var current = array.shift();
  return "Currently serving " + current + ".";
}
}

function currentLine(line){
  var newArray = [];
  let j = 1;

  if( line == undefined || line.length == 0) {
    return "The line is currently empty."
  }
  for(var i = 0; i < line.length; i ++) {
    newArray.push(j++ + ". " + line[i]);
  }
      return "The line is currently: " + newArray.join(", ");
}
