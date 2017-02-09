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
