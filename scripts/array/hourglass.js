var _2dArray = make2dArray(6);
print2dArray(_2dArray);

makeHourGlass();


///////////////////////////// Functions /////////////////////////////
function make2dArray(rows, cols) {
    cols = cols || rows;
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
        for (var j = 0; j < cols; j++) {
            arr[i][j] = Math.floor((Math.random() * 9));
        }
    }
    return arr;
    // console.log(arr);
}

function print2dArray(array) {
    for (var i = 0; i < array.length; i++) {
        printArr(array[i]);
    }
}

function makeHourGlass(array) {
    var array = make2dArray(7);
    print2dArray(array);
    var hourGlass = [];
    for (var i = 0; i < array.length; i++) {

        hourGlass = array.slice(0, 4);

    }
    console.log(hourGlass);
    print2dArray(hourGlass);
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
