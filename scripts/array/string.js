var str = 'my name is bhawna';
// removeSpace(str);
// getStringCount(str);
// evenOddNumber();
// fibonacci(15);
swapNumber(5, 3);

///////////////////////////// Functions /////////////////////////////
function removeSpace(str) {
    var newStr = str.replace(/ /g, '');
    console.log(newStr);
    return newStr;
}

function getStringCount(str) {
    var uniqueStr = [];
    var charCount = [];
    var obj = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            var str = removeSpace(str);
        }
        var currenPos = uniqueStr.indexOf(str[i]);
        if (currenPos == -1) {
            uniqueStr.push(str[i]);
            charCount.push(1);
        } else {
            charCount[currenPos] = charCount[currenPos] + 1;
        }
    }
    for (var i = 0; i < uniqueStr.length; i++) {
        obj[uniqueStr[i]] = charCount[i];
    }
    return obj;
}


function evenOddNumber(num) {
    (num % 2 == 0) ? console.log('Even Number'): console.log("Odd Number");
}

function fibonacci(len) {
    var array = [];
    array[0] = 0;
    array[1] = 1;
    for (var i = 2; i < len; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    console.log(array);
}

function swapNumber(a, b) {
    console.log('a = ' + a, 'b = ' + b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log('After Swap : a = ' + a, 'b = ' + b);
}
