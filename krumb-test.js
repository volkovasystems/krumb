
const assert = require( "assert" );
const krumb = require( "./krumb.js" );

assert.deepEqual( krumb( { "name": "simple" } ), { "name": "simple" }, "should be equal to { 'name': 'simple' }" );

assert.deepEqual( krumb( { } ), { }, "should be equal to { }" );

console.log( "ok" );
