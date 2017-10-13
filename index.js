function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  for (var i = 0; i < line.length; i++) {
    line[i] = " "+(i+1) + ". " + line[i];
  }
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  else {
    return "The line is currently:"+line;
  }
}
