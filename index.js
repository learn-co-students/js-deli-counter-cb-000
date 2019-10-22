var katzDeli = [];

function takeANumber(katzDeli, newName){
  katzDeli.push(newName)
  return `Welcome, ${newName}. You are number ` + katzDeli.length + " in line."
}

function nowServing(katzDeli){
  var first = katzDeli[0]
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    katzDeli.shift()
    return `Currently serving ${first}.`
  }
}

function currentLine(katzDeliLine){

  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else{
    var text = "The line is currently:"
    var result = " "
    var n = 1
    var i = 0
    while(katzDeliLine[i] != katzDeliLine[katzDeliLine.length - 1]){
      text = `${text} ${n}. ${katzDeliLine[i]},`
      n++
      ++i
    }
    result = text + ` ${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`
    return result
  }

}
