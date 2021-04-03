/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/App.js":
/*!***********************!*\
  !*** ./public/App.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphQLFetch.js */ \"./public/graphQLFetch.js\");\n/* eslint linebreak-style: [\"error\", \"windows\"] */\n\n/* eslint \"react/react-in-jsx-scope\": \"off\" */\n\n/* globals React ReactDOM */\n\n/* eslint \"react/jsx-no-undef\": \"off\" */\n\n/* eslint \"react/no-multi-comp\": \"off\" */\n\n/* eslint \"no-alert\": \"off\" */\nconst buttonStyle = {\n  color: 'black',\n  background: 'rgb(242, 245, 244)',\n  alignContent: 'center'\n};\n // eslint-disable-next-line react/prefer-stateless-function\n\nfunction ProductRow({\n  product\n}) {\n  return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, product.name), /*#__PURE__*/React.createElement(\"td\", null, \"$\", product.pricePerUnit), /*#__PURE__*/React.createElement(\"td\", null, product.category), /*#__PURE__*/React.createElement(\"td\", null, /*#__PURE__*/React.createElement(\"a\", {\n    href: product.imageUrl,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, \"View\")));\n}\n\nfunction ProductTable({\n  products\n}) {\n  const productRows = products.map(product => /*#__PURE__*/React.createElement(ProductRow, {\n    key: product.id,\n    product: product\n  }));\n  return /*#__PURE__*/React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"Product Name\"), /*#__PURE__*/React.createElement(\"th\", null, \"Price\"), /*#__PURE__*/React.createElement(\"th\", null, \"Category\"), /*#__PURE__*/React.createElement(\"th\", null, \"Image\"))), /*#__PURE__*/React.createElement(\"tbody\", null, productRows));\n}\n\nclass ProductAdd extends React.Component {\n  constructor() {\n    super();\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleSubmit(e) {\n    e.preventDefault();\n    const form = document.forms.productAdd;\n    const product = {\n      name: form.productName.value,\n      pricePerUnit: form.pricePerUnit.value.substr(1),\n      category: form.category.value,\n      imageUrl: form.imageUrl.value\n    };\n    const {\n      createProduct\n    } = this.props;\n    createProduct(product);\n    form.productName.value = '';\n    form.pricePerUnit.value = '$';\n    form.category.value = '';\n    form.imageUrl.value = '';\n  }\n\n  render() {\n    return /*#__PURE__*/React.createElement(\"form\", {\n      name: \"productAdd\",\n      onSubmit: this.handleSubmit\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"formContainer\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"formCol\"\n    }, \"Category:\", /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"select\", {\n      id: \"menu\",\n      name: \"category\"\n    }, /*#__PURE__*/React.createElement(\"option\", {\n      value: \"Shirts\"\n    }, \"Shirts\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"Jeans\"\n    }, \"Jeans\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"Jackets\"\n    }, \"Jackets\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"Sweaters\"\n    }, \"Sweaters\"), /*#__PURE__*/React.createElement(\"option\", {\n      value: \"Accessories\"\n    }, \"Accessories\")), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"br\", null), \"Product Name:\", /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"productName\"\n    }), /*#__PURE__*/React.createElement(\"br\", null)), \"\\xA0\\xA0\", /*#__PURE__*/React.createElement(\"div\", {\n      className: \"formCol\"\n    }, \"Price Per Unit:\", /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"pricePerUnit\",\n      defaultValue: \"$\"\n    }), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"br\", null), \"Image URL:\", /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"imageUrl\"\n    }), /*#__PURE__*/React.createElement(\"br\", null))), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"button\", {\n      style: buttonStyle,\n      type: \"submit\"\n    }, \"Add Product\"));\n  }\n\n}\n\nclass ProductList extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      products: []\n    };\n    this.createProduct = this.createProduct.bind(this);\n  }\n\n  componentDidMount() {\n    this.loadData();\n  }\n\n  async loadData() {\n    const query = `query {\n            productList {\n              id\n              name\n              pricePerUnit\n              category\n              imageUrl\n            }\n          }`;\n    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(query);\n\n    if (data) {\n      this.setState({\n        products: data.productList\n      });\n    }\n  }\n\n  async createProduct(product) {\n    const query = `mutation addProduct($product: ProductInputs!) {\n            addProduct(product: $product) {\n                id\n            }\n          }`;\n    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(query, {\n      product\n    });\n\n    if (data) {\n      this.loadData();\n    }\n  }\n\n  render() {\n    const {\n      products\n    } = this.state;\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"My Company Inventory\"), /*#__PURE__*/React.createElement(\"p\", null, \"Showing all available products\"), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(ProductTable, {\n      products: products\n    }), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"p\", null, \"Add a new product to inventory\"), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(ProductAdd, {\n      createProduct: this.createProduct\n    }));\n  }\n\n}\n\nconst element = /*#__PURE__*/React.createElement(ProductList, null);\nReactDOM.render(element, document.getElementById('contents'));\n\n//# sourceURL=webpack:///./public/App.js?");

/***/ }),

/***/ "./public/graphQLFetch.js":
/*!********************************!*\
  !*** ./public/graphQLFetch.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return graphQLFetch; });\n/* eslint linebreak-style: [\"error\", \"windows\"] */\n\n/* eslint \"no-alert\": \"off\" */\nasync function graphQLFetch(query, variables = {}) {\n  try {\n    const response = await fetch(window.ENV.UI_API_ENDPOINT, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query,\n        variables\n      })\n    });\n    const body = await response.text();\n    const result = JSON.parse(body);\n\n    if (result.errors) {\n      const error = result.errors[0];\n\n      if (error.extensions.code === 'BAD_USER_INPUT') {\n        const details = error.extensions.exception.errors.join('\\n ');\n        alert(`${error.message}:\\n ${details}`);\n      } else {\n        alert(`${error.extensions.code}: ${error.message}`);\n      }\n    }\n\n    return result.data;\n  } catch (e) {\n    alert(`Error in sending data to server: ${e.message}`);\n    return null;\n  }\n}\n\n//# sourceURL=webpack:///./public/graphQLFetch.js?");

/***/ })

/******/ });