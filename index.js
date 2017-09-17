var katzDeli = [];

function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array){
  if (array.length) {
    var servingName = array.shift()
    return `Currently serving ${servingName}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array){
  if (array.length){
    var returnValue="The line is currently: "
    for (var i=0;i<array.length;i++){
      returnValue = returnValue + (i+1) + ". "+ array[i]
      if (i!=array.length-1) {
        returnValue = returnValue + ", "
      }
    }
  } else {
    return "The line is currently empty."
  }
  return returnValue
}
