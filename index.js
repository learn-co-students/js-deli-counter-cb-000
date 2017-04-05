var katzDeli = []

function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }

  let arr = []


  for(let i=0, k=line.length; i < k; i++){
    arr.push(` ${i+1}. ${line[i]}`)
  }

  return `The line is currently:${arr.join(",")}`
}
