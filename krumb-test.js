
const assert = require( "assert" );
const krumb = require( "./krumb.js" );

assert.deepEqual( krumb( { "name": "simple" } ), { "name": "simple" }, "should be equal" );

assert.deepEqual( krumb( { } ), { }, "should be equal" );

console.log( "ok" );
