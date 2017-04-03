"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/alanlaidlaw/Desktop/site/with-next/x-next-blog/components/App.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("main", {
    "data-jsx": 412430643,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, children, _react2.default.createElement(_style2.default, {
    styleId: 412430643,
    css: "\n      * {\n        font-family: Menlo, Monaco, \"Lucida Console\", \"Liberation Mono\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Courier New\", monospace, serif;\n      }\n      body {\n        margin: 0;\n        padding: 25px 50px;\n      }\n      a {\n        color: #22BAD9;\n      }\n      p {\n        font-size: 14px;\n        line-height: 24px;\n      }\n      article {\n        margin: 0 auto;\n        max-width: 650px;\n      }\n      button {\n        align-items: center;\n        background-color: #22BAD9;\n        border: 0;\n        color: white;\n        display: flex;\n        padding: 5px 7px;\n      }\n      button:active {\n        background-color: #1B9DB7;\n        transition: background-color .3s\n      }\n      button:focus {\n        outline: none;\n      }\n    "
  }));
};