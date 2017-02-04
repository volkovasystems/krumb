"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "krumb",
			"path": "krumb/krumb.js",
			"file": "krumb.js",
			"module": "krumb",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/krumb.git",
			"test": "krumb-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Filter only owned entity properties.

		This will return the object's owned enumerable properties.
	@end-module-documentation
*/

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var krumb = function krumb(entity) {
	/*;
 	@meta-configuration:
 		{
 			"entity:required": "object"
 		}
 	@end-meta-configuration
 */

	var object = {};

	try {
		(0, _getOwnPropertyNames2.default)(entity).filter(function (property) {
			return (0, _getOwnPropertyDescriptor2.default)(entity, property).enumerable;
		}).forEach(function (property) {
			object[property] = entity[property];
		});
	} catch (error) {
		object = {};
	}

	return object;
};

module.exports = krumb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtydW1iLmpzIl0sIm5hbWVzIjpbImtydW1iIiwiZW50aXR5Iiwib2JqZWN0IiwiZmlsdGVyIiwicHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZm9yRWFjaCIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREEsSUFBTUEsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNyQzs7Ozs7Ozs7QUFRQSxLQUFJQyxTQUFTLEVBQWI7O0FBRUEsS0FBRztBQUNGLHFDQUE0QkQsTUFBNUIsRUFDRUUsTUFERixDQUNVLFVBQUVDLFFBQUYsRUFBZ0I7QUFDeEIsVUFBTyx3Q0FBaUNILE1BQWpDLEVBQXlDRyxRQUF6QyxFQUFvREMsVUFBM0Q7QUFDQSxHQUhGLEVBSUVDLE9BSkYsQ0FJVyxVQUFFRixRQUFGLEVBQWdCO0FBQUVGLFVBQVFFLFFBQVIsSUFBcUJILE9BQVFHLFFBQVIsQ0FBckI7QUFBMEMsR0FKdkU7QUFNQSxFQVBELENBT0MsT0FBT0csS0FBUCxFQUFjO0FBQ2RMLFdBQVMsRUFBVDtBQUNBOztBQUVELFFBQU9BLE1BQVA7QUFDQSxDQXZCRDs7QUF5QkFNLE9BQU9DLE9BQVAsR0FBaUJULEtBQWpCIiwiZmlsZSI6ImtydW1iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJrcnVtYlwiLFxuXHRcdFx0XCJwYXRoXCI6IFwia3J1bWIva3J1bWIuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImtydW1iLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImtydW1iXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9rcnVtYi5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImtydW1iLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RmlsdGVyIG9ubHkgb3duZWQgZW50aXR5IHByb3BlcnRpZXMuXG5cblx0XHRUaGlzIHdpbGwgcmV0dXJuIHRoZSBvYmplY3QncyBvd25lZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cbiovXG5cbmNvbnN0IGtydW1iID0gZnVuY3Rpb24ga3J1bWIoIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIm9iamVjdFwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgb2JqZWN0ID0geyB9O1xuXG5cdHRyeXtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggZW50aXR5IClcblx0XHRcdC5maWx0ZXIoICggcHJvcGVydHkgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCBlbnRpdHksIHByb3BlcnR5ICkuZW51bWVyYWJsZTtcblx0XHRcdH0gKVxuXHRcdFx0LmZvckVhY2goICggcHJvcGVydHkgKSA9PiB7IG9iamVjdFsgcHJvcGVydHkgXSA9IGVudGl0eVsgcHJvcGVydHkgXTsgfSApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHRvYmplY3QgPSB7IH07XG5cdH1cblxuXHRyZXR1cm4gb2JqZWN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrcnVtYjtcbiJdfQ==
