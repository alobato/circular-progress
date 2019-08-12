"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'hsla(211, 61%, 43%, 1)' : _ref$color,
      rest = _objectWithoutProperties(_ref, ["color"]);

  return _react["default"].createElement("div", {
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, _react["default"].createElement("svg", _extends({
    height: 120,
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    style: {
      background: 'none'
    }
  }, rest), _react["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    r: "20",
    stroke: color,
    strokeWidth: "5"
  }), _react["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    r: "20",
    stroke: "#ffffff",
    strokeWidth: "4",
    strokeLinecap: "square",
    transform: "rotate(146.131 50 50)"
  }, _react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    calcMode: "linear",
    values: "0 50 50;180 50 50;720 50 50",
    keyTimes: "0;0.5;1",
    dur: "2.9s",
    begin: "0s",
    repeatCount: "indefinite"
  }), _react["default"].createElement("animate", {
    attributeName: "stroke-dasharray",
    calcMode: "linear",
    values: "12.566370614359172 113.09733552923255;62.83185307179586 62.83185307179586;12.566370614359172 113.09733552923255",
    keyTimes: "0;0.5;1",
    dur: "2.9",
    begin: "0s",
    repeatCount: "indefinite"
  }))));
};

exports["default"] = _default;
