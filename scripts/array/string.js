// var str = "hello how are you";
// console.log(str);

removeSpace("my name is bhawna");

///////////////////////////// Functions /////////////////////////////
function removeSpace(string) {
    var str = '';
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            string = string.replace(/ /g, '');
        }
        str = str + string[i];
    }
    console.log(str);
}
