function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName) ;
  return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0)
  {
    return "There is nobody waiting to be served!" ;
  } else
  {
    var firstPersonInLine = katzDeliLine[0];
    katzDeliLine.shift() ;
    return `Currently serving ${firstPersonInLine}.` ;
  }
}

function currentLine(katzDeliLine) {
  var currentLineStr = "The line is currently:"

  if(katzDeliLine.length == 0 )
  {
    return "The line is currently empty."
  }
  else {
    for(var i = 0; i < katzDeliLine.length; i++)
    {
      currentLineStr =  currentLineStr  + ` ${i + 1}. ${katzDeliLine[i]}${ i == (katzDeliLine.length -1) ? '' : ','}` ;
    }
    return currentLineStr ;
  }

}
