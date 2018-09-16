function takeANumber(currentLine,name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current = katzDeliLine.splice(0,1);
    return `Currently serving ${current}.`;
  }
};

function currentLine(currentLine) {
  if (currentLine.length === 0 ) {
    return 'The line is currently empty.';
  } else {
      var string = `1. ${currentLine[0]}`
      for (var i = 1; i < currentLine.length; i++) {
        string += `, ${i+1}. ${currentLine[i]}`;
      }
  }
    return `The line is currently: ${string}`;
};
