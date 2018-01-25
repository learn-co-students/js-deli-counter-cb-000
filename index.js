var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var response = "The line is currently:"
    for (var i=0;i<line.length;i++) {
      response += ` ${i + 1}. ${line[i]},`
    }
    response = response.slice(0, -1)
    return response
  }
}
