"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var componentImport = exports.componentImport = function componentImport(path, name) {
  return "import " + name + " from '../" + path + "/" + name + "';";
};

var jestReactMock = exports.jestReactMock = function jestReactMock(mock) {
  return "jest.mock('" + mock + "', () => '" + mock + "');";
};

var jsxProp = exports.jsxProp = function jsxProp(name, value) {
  return name + "={" + value + "}";
};

var jsxTag = exports.jsxTag = function jsxTag(name, props) {
  return props.length > 0 ? "<" + name + " " + props + " />" : "<" + name + " />";
};

var testDescription = exports.testDescription = function testDescription(componentName, componentProps) {
  return "\ndescribe('" + jsxTag(componentName, componentProps) + "', () => {\n  it('renders correctly', () => {\n    snapshotTest(" + jsxTag(componentName, componentProps) + ");\n  });\n});";
};