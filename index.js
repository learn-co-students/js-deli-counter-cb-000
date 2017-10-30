var takeANumber = (line, name) => {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

var nowServing = line => {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line[0];
    line.shift();
    return `Currently serving ${name}.`;
  }
};

var currentLine = line => {
  if (!line.length) {
    return "The line is currently empty.";
  }
  const numbersAndNames = [];

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`);
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
};
