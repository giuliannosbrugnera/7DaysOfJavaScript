// for...of documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

for ( var string of my_array ) {
    var reverse = string.split("").reverse().join("");
    if ( string.localeCompare( reverse ) === 0 ) {
        console.log( string );
    }
}
