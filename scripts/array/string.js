// var str = 'my name is bhawna';
// removeSpace(str);
// getStringCount(str);
// evenOddNumber();
// fibonacci(15);
// findFactorial();
// reverseNumber(12);
armstrongNumber(1634);

// swapNumber(5, 3);
// chkPalindrome('ddarmd');
removeChar('Helo a tah ahdk s', 'a');

///////////////////////////// Functions /////////////////////////////
function removeSpace(str) {
    var newStr = str.replace(/ /g, '');
    console.log(newStr);
    return newStr;
}

function removeChar(str, charToRemove) {
    var i = 0;
    var newStr = '';
    while (str[i] !== undefined) {
        if (str[i] !== charToRemove) {
            newStr += str[i];
        }
        i++;
    }
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

function findFactorial(num) {
    var factorial = num;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * (num - 1);
        num--;
    }
    return factorial;
}

function reverseNumber(num) {
    var reverse = 0;
    var reminder;
    while (num >= 1) {
        reminder = num % 10;
        reverse = (reverse * 10) + reminder;
        num = Math.floor(num / 10);
    }
    return reverse;
}


function swapNumber(a, b) {
    console.log('a = ' + a, 'b = ' + b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log('After Swap : a = ' + a, 'b = ' + b);
}

function chkPalindrome(str) {
    var string = '';
    count = 0;
    var length = str.length;
    var mid = Math.floor(length / 2);
    for (var i = 0; i !== mid; i++) {
        if (str[i] !== str[length - i - 1]) {
            console.log("It is not palindrome");
            break;
        }

    }
}

function armstrongNumber(number) {
    var rem, result = 0;
    var originalNumber = number;
    var n = 0;

    while (originalNumber != 0) {
        originalNumber = Math.floor(originalNumber / 10);
        n++;
    }
    originalNumber = number;
    while (originalNumber != 0) {
        remainder = originalNumber % 10;
        result = result + Math.pow(remainder, n);
        originalNumber = Math.floor(originalNumber / 10);
    }
    console.log(result);
    if (result == number)
        console.log("It is an Armstrong number.");
    else
        console.log("It is not an Armstrong number.");
}
