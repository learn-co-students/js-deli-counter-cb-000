var katzDeliLine =[];

function takeANumber(katzDeliLine,name){
  var customers =[];
  var n = katzDeliLine.length + 1
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${n} in line.`;
}


function nowServing(katzDeliLine){
  var current_customer= katzDeliLine.shift(1)
  if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
}else{
  return `Currently serving ${current_customer}.`
}
}

var line =["Bill", "Jane", "Ann"];
function currentLine(line){
  if(line.length ===0) {
    return "The line is currently empty.";
  }
  var customers = [];

  for(var i=0; i<line.length; i++) {
    customers.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + customers.join(', ');
}
currentLine(line)
