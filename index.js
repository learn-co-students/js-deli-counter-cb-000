var katzDeli = [];

function takeANumber(line, name){
  line.push(name)
  return ("Welcome, " + name+ ". You are number " + line.length + " in line.")
}

function nowServing(line){
  if (line.length > 0 ){
    var first = line.shift()
    return ("Currently serving " + first+ ".")
  }
  else{
    return ("There is nobody waiting to be served!")
  }

}
 //takes a an array(line) and returns a message displaying the members of the line
 //such as: "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 function currentLine (line){
   var return_line = [],
       new_line,
       line_start = ("The line is currently:");
    if (line.length > 0){
         line.forEach(function(name){
         return_line.push(" " +(line.indexOf(name)+1) + ". " + name)

       })
       new_line = line_start.concat(return_line)
       return new_line
      }
      else {
        return "The line is currently empty."
      }
 }
