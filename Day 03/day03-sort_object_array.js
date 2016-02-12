// sort() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// localeCompare() documentation: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

function sortLibrary() {
   console.log( library.sort( function( a, b ) { 
       return a.title.localeCompare( b.title ); 
   } ) );
} 

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();
