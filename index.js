function takeANumber(arr, customer) {
  let i=0;
  do {
    arr.push(customer);
    return(`Welcome, ${customer}. You are number ${arr.length} in line.`);
  } while(i>arr.length)
}

function nowServing(inLine) {
  if(inLine.length == 0) {
    return `There is nobody waiting to be served!`;
  }

  return `Currently serving ${inLine.shift()}.`;
}

function currentLine(arr) {
  let result = '';
  if(arr == 0){
    return(`The line is currently empty.`);
  } else {
    for(let i=0; i<arr.length; i++) {
      result = result + `${i+1}. ${arr[i]}, `;
    }
       
    return(`The line is currently: ${result.replace(/,(\s+)?$/, '')}`);
  }
}