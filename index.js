function takeANumber(line, custName) {
    var n = line.length;
    line[n] = custName;
    return `Welcome, ${line[n]}. You are number ${n + 1} in line.`;
  }

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    }
    else {
      let current = katzDeliLine.shift();
      return `Currently serving ${current}.`
  }
}

function currentLine(line) {
  if (line.length === 0 ) {
    return 'The line is currently empty.';
  } else {
      var lineList = `1. ${line[0]}`
      for (var n = 1; n < line.length; n++) {
        lineList += `, ${n+1}. ${line[n]}`;
      }
  }
    return `The line is currently: ${lineList}`
}
