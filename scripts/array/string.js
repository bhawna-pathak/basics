// removeSpace("my name is bhawna");
evenOddNumber(5);

///////////////////////////// Functions /////////////////////////////
function removeSpace(string) {
    var str = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            string = string.replace(/ /g, '');
        }
        str = str + string[i];
    }
    return str;
}

function evenOddNumber(num) {
    if (num % 2 == 0) {
        console.log('Even Number');
    } else {
        console.log('Odd Number')
    }
}


