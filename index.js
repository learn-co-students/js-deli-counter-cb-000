var katzDeliLine = [];

function takeANumber(line, name) {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
    if (line.length > 0) {
        return `Currently serving ${line.shift()}.`;
    } else {
        return 'There is nobody waiting to be served!';
    }
}

function currentLine(line) {
    let count = 0;

    if (line.length > 0) {
        let currLine = []
        do {
            currLine.push(`${count + 1}. ${line[count]}`)
            count++;
        } while (count < line.length)
        return `The line is currently: ${currLine.join(", ")}`
    } else {
        return 'The line is currently empty.'
    }
}