var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var numberInLine = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${numberInLine} in line.`;
};

function nowServing (katzDeliLine) {
  if ( katzDeliLine.length < 1 ) {
    return 'There is nobody waiting to be served!'
  } else {
    var firstInLine = katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }
};

function currentLine (katzDeliLine) {
  if ( katzDeliLine.length < 1 ) {
    return 'The line is currently empty.'
  } else {
    var lineWithIndex = [];
    katzDeliLine.forEach(function (name, index) {
      lineWithIndex.push(`${index + 1}. ${name}`);
    });
    return `The line is currently: ${lineWithIndex.join(', ')}`;
  }
};
