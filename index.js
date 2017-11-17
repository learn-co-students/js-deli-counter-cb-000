var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  for (var i = 0; i < katzDeliLine.length; i++) {
    return `Welcome, ${name}. You are number ${position} in line.`;
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var n = i + 1;
      line.push(" " + n + ". " + katzDeliLine[i]);
    }
    return "The line is currently:" + line;
  }
}
