function takeANumber(line, name){
  var length = line.length + 1;
  line.push(name) ;
  return `Welcome, ${name}. You are number ${length} in line.`
}
function nowServing(line) {
  if (line.length == 0){
    return ("There is nobody waiting to be served!")
  }
  else{
    var temp = line[0] ;
    line.shift() ;
    return `Currently serving ${temp}.` ;
  }
}
function currentLine(line){
  if (line.length == 0){return ("The line is currently empty.")}
  else{
    var temp = "The line is currently:" ;
    for (var i = 0 ; i < line.length - 1; i++){
      temp += ` ${i + 1}. ${line[i]},`
    }
    temp += ` ${line.length }. ${line[line.length - 1]}` ;
    return temp ;
    console.log(temp) ;
  }
}
