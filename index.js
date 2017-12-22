const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
};

const nowServing = line => {
  if (line.length > 0) {
    const currentCust = line.shift();
    return `Currently serving ${currentCust}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
};

const currentLine = line => {
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    let strLine = 'The line is currently: ';
    for (let i = 0; i < line.length; i++) {
      strLine += `${i + 1}. ${line[i]}`;
      if (i < line.length - 1) strLine += ', ';
    }
    return strLine;
  }
};
