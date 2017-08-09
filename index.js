let katzDeli = [];

function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] == newPersonName) {
      return `Welcome, ${newPersonName}. You are number ${i+1} in line.`
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    let firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`
  }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  } else {
    let lineString = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      lineString = lineString + `${i + 1}. ${katzDeliLine[i]}, `;
    }
    return lineString.substring(0, lineString.length - 2);
  }
}
