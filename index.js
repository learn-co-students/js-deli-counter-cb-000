function takeANumber(katzDeli, name){
  katzDeli.push(name);
  var i = katzDeli.indexOf(name);
  i++;
  return 'Welcome, ' + name +'. You are number ' + i + ' in line.'
}

function nowServing(katzDeli, name){
  if (katzDeli.length > 0){
    var i = katzDeli[0];
    katzDeli.shift();
    return 'Currently serving ' + i + '.'
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
if (line === 0){
return 'The line is currently empty.';
}

}
