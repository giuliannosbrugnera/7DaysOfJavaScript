// sort() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function processData(myArray) {
    
    var secondLargest;
    var length = myArray.length;
    var index = length - 2;
    
    // According to the sort() documentation:
    // If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings 
    // in Unicode code point order. For example, "Cherry" comes before "banana". In a numeric sort, 9 comes before 
    // 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order.
    // So, it is necessary to supply a compareFunction
    myArray.sort( function( a, b ) { return a - b; } );
    
    while( ((secondLargest = myArray[index]) == myArray[length - 1]) && (index >= 0) ) {
        index--;
    }
    
    console.log( secondLargest );
    
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
