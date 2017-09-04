var katzDeli = [];

function takeANumber (array, name) {
  function currentLine(array, name){
    for(var i = 0; i < array.length; i++) {
      if(name == array[i]) {
        return i+1;
      }
    }
  }
  array.push(name);

  var output = "Welcome, " + name +". You are number " + currentLine(array, name) + " in line.";

  return output;
}


function nowServing(array) {
  if(array.length == 0) {
    var msg = "There is nobody waiting to be served!"
    return msg;
  } else {
  var served = "Currently serving " + array [0] + ".";
  array.shift();

  return served;
}
}

function currentLine(line) {
  if(line.length == 0) {
    return "The line is currently empty."
  }
  else {
    var output = "The line is currently:"
    for(var i = 0; i < line.length; i++) {
      output = output + " " + (i+1) + ". " + line[i]
      if(i < line.length-1){
        output = output + ","
      }
    }
    return output;
  }

}
