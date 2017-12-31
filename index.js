function takeANumber(line, personName) {
  line.push(personName)
  return `Welcome, ${personName}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var string = ""
  for (var i = 0; i < line.length; i++) {
    if (!string) {
      string += `The line is currently: 1. ${line[i]}`
    } else {
      string += `, ${i + 1}. ${line[i]}`
    }
  }
  return string ? string : "The line is currently empty."
}
