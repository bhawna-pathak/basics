var array = [2, 3, 5, 8, 9, 2];
console.log(array);

// printArr(array);
printArrReverse(array);


///////////////////////////// Functions /////////////////////////////
function printArrReverse(array) {
    var str = "";
    for (var i = array.length - 1; i >= 0; i--) {
        str = str + array[i] + ' ';
    }
    str = str.substring(0, str.length - 1);
    console.log(str);
}

function printArr(array) {
    var str = "";
    for (var i = 0; i < array.length; i++) {
        str = str + array[i] + ' ';
    }
    str = str.substring(0, str.length - 1);
    console.log(str);
}
