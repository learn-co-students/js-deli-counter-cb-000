var katzDeli = [];
var katzDeliLine = [];
function takeANumber(line, name) {
  //given the current line and a new customer, 
  //tell them where they are in  line
  //"Welcome, Ada. You are number 1 in line."
  line.push(name);
  var linesay = `Welcome, ${line[line.length - 1]}. You are number ${line.length} in line.`
  //return position in line
  return linesay;
}

function nowServing(line) {
  //return the 1st person in line, delete them from the line
  //"Currently Serving Ada."
  //or say "THere is nobody waiting to be served!"
    if (line.length > 0) {
      var name = line.shift();
      var servingsay = `Currently serving ${name}.`
      return servingsay;
    }
    else {
      var emptysay = "There is nobody waiting to be served!"
      return emptysay;
    }
}

function currentLine(line) {
  //returns the current line:
  //"The line is currently: 1. Ada 2. Grace"
  //If empty "The line is currently empty."
if (line.length == 0) {
  return "The line is currently empty."
}
  else {
    var lineCounter = line.length;
    var lineSay = "The line is currently: "
    for (var i = 0; i < lineCounter; i++) {
      lineSay += `${i + 1}. ${line[i]}`
      if (i < (line.length - 1)) {
        lineSay += ", "
      }
    }
    return lineSay;
  }
}

