var katzDeli = [];

function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  var place = katzDeliLine.indexOf(personName) + 1;
  return `Welcome, ${personName}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var frontPerson = katzDeliLine.shift();
    return `Currently serving ${frontPerson}.`;
  }
}

function currentLine(katzDeliLine) {
  var array = [];
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  } else {
    for (let i=0; i < katzDeliLine.length; i++) {
      var j = i + 1;
      array.push(" " + j + ". " + katzDeliLine[i]);
    }
    return "The line is currently:" + array;
  }
}
