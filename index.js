var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  var msg = `Welcome, ${name}. You are number ${array.indexOf(name)+1} in line.`;
  return msg;
}

function currentLine(array) {
  if (array.length > 0) {
    var msg = `The line is currently:`;
    array.forEach(function(item, index, array) {
      if (index === array.length-1) {
        msg += ` ${index+1}. ${item}`;
      } else {
        msg += ` ${index+1}. ${item},`;
      }
    });
    return msg;
  } else {
    return 'The line is currently empty.';
  }
}

function nowServing(array) {
  if (array.length > 0) {
    var msg = `Currently serving ${array[0]}.`;
    array.shift();
    return msg;
  } else {
    return "There is nobody waiting to be served!";
  }
}
