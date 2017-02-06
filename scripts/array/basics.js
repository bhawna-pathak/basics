var array = [2, 3, 0, 1, 5, 8, 9, 2];
console.log(array);

// printArr(array);
printArrReverse(array, '#');
// printArrAscending(array, '<');


///////////////////////////// Functions /////////////////////////////
function arrayAscending(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                var temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

function printArrAscending(array, separator) {
    separator = separator || " ";
    var arrayAsc = arrayAscending(array);
    printArr(arrayAsc, separator);
}

function arrayReverse(array) {
    var arrayRev = [];
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
        arrayRev.push(array[i]);
    }
    return arrayRev;
}

function printArrReverse(array, separator) {
    separator = separator || " ";
    var arrayRev = arrayReverse(array);
    printArr(arrayRev, separator);
}

function printArr(array, separator) {
    separator = separator || " ";
    var str = "";
    for (var i = 0; i < array.length; i++) {
        str = str + array[i] + separator;
    }
    str = str.substring(0, str.length - 1);
    console.log(str);
}
