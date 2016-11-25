function takeANumber(katzDeliLine, customer) {
  var linePosition
  katzDeliLine.push(customer)
  linePosition = katzDeliLine.length
  return `Welcome, ${customer}. You are number ${linePosition} in line.`
}

function nowServing(line) {
  let message = ''
  let nextCustomer = ''

  if (line.length == 0) {
    message = 'There is nobody waiting to be served!'
  } else {
    nextCustomer = line.shift()
    message = `Currently serving ${nextCustomer}.`
  }
  return message
}

function currentLine(line) {
  var message = ''
  var lineCount = line.length
  var lineDetails = []
  if (lineCount == 0) {
    message = 'The line is currently empty.'
  } else {
    message = 'The line is currently:'
    lineDetails.unshift(message)
    for(let i = 0; i < lineCount; i++) {
      //let currentLinePosition = i + 1
      //let customer = line[i]
      lineDetails.push(`${i + 1}. ${line[i]}${(i < lineCount - 1) ? ',' : ''}`)
    }
    message = lineDetails.join(' ')
  }
  return message
}
