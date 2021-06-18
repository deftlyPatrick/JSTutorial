

function add7(number){
    return number + 7;
}

console.log(add7(18));

function multiply(a, b){
    return a * b;
}

console.log(multiply(2,5));

function capitalize(str){
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.substring(1, str.length) ;
}

console.log(capitalize("Hello World"));


function lastString(str){
    return str.charAt(str.length-1);
}

console.log(lastString("Hello World"));