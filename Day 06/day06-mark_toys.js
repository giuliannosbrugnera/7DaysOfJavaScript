function processData( input ) {
    
    input = input.split( '\n' );
    var max = input[0].split( ' ' ).map(Number)[1];
    var values = input[1].split( ' ' ).map(Number);
    values = values.sort( function( a, b ) { return a - b; } );
    
    var i, total;
    i = total = 0;
    
    while ( max > total ) {
        total += values[i++];
    }
    
    console.log( i - 1 );
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
