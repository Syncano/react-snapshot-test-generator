'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformDefinitions = exports.jsxProps = exports.jestReactMocks = exports.flatten = exports.parseDefinitions = undefined;

var _templates = require('./templates');

var parseDefinitions = exports.parseDefinitions = function parseDefinitions(definitions) {
  return Object.keys(definitions).map(function (path) {
    return { path: path, components: definitions[path] };
  }).map(function (_ref) {
    var path = _ref.path,
        components = _ref.components;
    return {
      path: path,
      components: components.map(function (component) {
        return typeof component === 'string' ? { name: component, props: [{}] } : { name: component[0], props: component[1] };
      }) };
  });
};

var flatten = exports.flatten = function flatten(nested) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "\n";
  return nested.map(function (array) {
    return array.join(separator);
  }).join(separator);
};
var jestReactMocks = exports.jestReactMocks = function jestReactMocks(mocks) {
  return mocks.map(function (name) {
    return (0, _templates.jestReactMock)(name);
  }).join("\n");
};
var jsxProps = exports.jsxProps = function jsxProps(props) {
  return Object.keys(props).map(function (name) {
    return (0, _templates.jsxProp)(name, props[name]);
  }).join(" ");
};

var transformDefinitions = exports.transformDefinitions = function transformDefinitions(definitions, transformer) {
  return flatten(parseDefinitions(definitions).map(transformer));
};

exports.default = transformDefinitions;