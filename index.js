function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  currentLine = "The line is currently"
  if (katzDeliLine.length > 0) {
    currentLine += ":"
    for (let i = 0; i < katzDeliLine.length; i++) {
      currentLine += ` ${i + 1}. ${katzDeliLine[i]}`
      if (i != katzDeliLine.length - 1) {
        currentLine += ","
      }
    }
  } else {
    currentLine += " empty."
  }
  return currentLine
}
