///////////////////////////// Functions /////////////////////////////
function printAstricTriangle(length) {
    for (var i = 0; i < length; i++) {
        for (var j = 0; j <= i; j++) {
            document.write('*');
        }
        document.write("<br>");
    }
}

function printInvertAstrictTriangle(length) {
    for (var i = length; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            document.write('*');
        }
        document.write("<br>");

    }
}

function printFullTriangle(length) {
    for (var i = 1; i <= length; i++) {
        for (var j = i; j < length; j++) {
            document.write("_");
        }
        for (var k = 1; k < (i * 2); k++) {
            document.write("*");
        }
        document.write("<br>");
    }
}

function printInvertFullTriangle(length) {
    for (var i = length; i >= 1; i--) {
        for (var j = length; j > i; j--) {
            document.write("_");
        }
        for (var k = 1; k < (i * 2); k++) {
            document.write("*");
        }
        document.write("<br>");
    }
}
