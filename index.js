var line = [];

function takeANumber(line, name) {
  line.push(name);
  return ("Welcome, " + name + ". You are number " + (line.indexOf(name) + 1) + " in line.");
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var newArr = [];
  if (line.length > 0) {
    line.forEach(function (value, i) {
      newArr.push(' ' + (i + 1) + '. ' + value);
    })
  return ('The line is currently:' + newArr);
  } else {
    return 'The line is currently empty.';
  }
}
