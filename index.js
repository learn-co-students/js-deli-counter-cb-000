function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(array) {
  if (array.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var person = array.shift()
  return `Currently serving ${person}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  var string = `1. ${line[0]}`
  for (var i = 1; i < line.length; i++) {
    string += `, ${i+1}. ${line[i]}`
  }
  return `The line is currently: ${string}`
}
