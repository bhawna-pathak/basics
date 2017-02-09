// printAstricTriangle();
///////////////////////////// Functions /////////////////////////////
function printAstricTriangle(row) {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j <= i; j++) {
            document.write('*');
        }
        document.write("<br>");
    }
}
