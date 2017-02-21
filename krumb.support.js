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
              */var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
		(0, _getOwnPropertyNames2.default)(entity).
		filter(function (property) {
			return (0, _getOwnPropertyDescriptor2.default)(entity, property).enumerable;
		}).
		forEach(function (property) {object[property] = entity[property];});

	} catch (error) {
		object = {};
	}

	return object;
};

module.exports = krumb;

//# sourceMappingURL=krumb.support.js.map