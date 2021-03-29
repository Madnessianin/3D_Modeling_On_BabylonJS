/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./App.tsx":
/*!*****************!*\
  !*** ./App.tsx ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ \"../node_modules/antd/lib/layout/style/index.js\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout */ \"../node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.less */ \"../node_modules/antd/dist/antd.less\");\n/* harmony import */ var _assets_styles_App_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles/App.scss */ \"./assets/styles/App.scss\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Component_ModelArea_ModelArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/ModelArea/ModelArea */ \"./Component/ModelArea/ModelArea.tsx\");\n/* harmony import */ var _Component_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/Sidebar/Sidebar */ \"./Component/Sidebar/Sidebar.tsx\");\n/* harmony import */ var _Component_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/Header/Header */ \"./Component/Header/Header.tsx\");\n\n\n\n\n\n\n\n\n\nvar Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__.default.Content,\n    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__.default.Footer;\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__.default, {\n    style: {\n      minHeight: \"100vh\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Component_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__.default, {\n    className: \"site-layout\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Component_Header_Header__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    exact: true,\n    path: \"/\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__.Redirect, {\n        to: \"/modelarea\"\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: \"/modelarea\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Component_ModelArea_ModelArea__WEBPACK_IMPORTED_MODULE_4__.default, null);\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Footer, {\n    style: {\n      textAlign: \"center\"\n    }\n  }, \"3D model mine \\xA92018 Created by Alex\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./App.tsx?");

/***/ }),

/***/ "./Component/Common/LoaderBtn/LoaderBtn.tsx":
/*!**************************************************!*\
  !*** ./Component/Common/LoaderBtn/LoaderBtn.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/upload/style */ \"../node_modules/antd/lib/upload/style/index.js\");\n/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/upload */ \"../node_modules/antd/lib/upload/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button/style */ \"../node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message/style */ \"../node_modules/antd/lib/message/style/index.js\");\n/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/message */ \"../node_modules/antd/lib/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/UploadOutlined.js\");\n/* harmony import */ var _StyleBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyleBtn */ \"./Component/Common/LoaderBtn/StyleBtn.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_mineReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Redux/mineReducer */ \"./Redux/mineReducer.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar BtnLoader = function BtnLoader() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n\n  var dispatchFile = function dispatchFile(file) {\n    if (file.type === \"application/json\") {\n      dispatch((0,_Redux_mineReducer__WEBPACK_IMPORTED_MODULE_6__.loadData)(file.name));\n      return true;\n    } else {\n      antd_lib_message__WEBPACK_IMPORTED_MODULE_7__.default.error(\"Выбран некорректный файл!\");\n\n      return false;\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_8__.default, {\n    beforeUpload: dispatchFile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__.default, {\n    style: _StyleBtn__WEBPACK_IMPORTED_MODULE_4__.styleBtn,\n    type: \"primary\",\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.default, null)\n  }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u0435 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BtnLoader);\n\n//# sourceURL=webpack:///./Component/Common/LoaderBtn/LoaderBtn.tsx?");

/***/ }),

/***/ "./Component/Common/LoaderBtn/StyleBtn.ts":
/*!************************************************!*\
  !*** ./Component/Common/LoaderBtn/StyleBtn.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styleBtn\": function() { return /* binding */ styleBtn; }\n/* harmony export */ });\nvar styleBtn = {\n  fontSize: \"16px\",\n  fontWeight: \"500\",\n  height: \"35px\",\n  width: \"200px\"\n};\n\n//# sourceURL=webpack:///./Component/Common/LoaderBtn/StyleBtn.ts?");

/***/ }),

/***/ "./Component/Header/Header.tsx":
/*!*************************************!*\
  !*** ./Component/Header/Header.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ \"../node_modules/antd/lib/layout/style/index.js\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ \"../node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _Common_LoaderBtn_LoaderBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Common/LoaderBtn/LoaderBtn */ \"./Component/Common/LoaderBtn/LoaderBtn.tsx\");\n\n\n\n\nvar Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__.default.Header;\n\nvar HeaderConteiner = function HeaderConteiner() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header, {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"header_inner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"header_item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Common_LoaderBtn_LoaderBtn__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"header_item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", {\n    className: \"header_title\"\n  }, \"3D \\u043C\\u043E\\u0434\\u0435\\u043B\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0433\\u043E\\u0440\\u043D\\u043E\\u0439 \\u0448\\u0430\\u0445\\u0442\\u044B \\u043F\\u043E \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u043D\\u044B\\u043C \\u0434\\u0430\\u043D\\u043D\\u044B\\u043C\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderConteiner);\n\n//# sourceURL=webpack:///./Component/Header/Header.tsx?");

/***/ }),

/***/ "./Component/ModelArea/ModelArea.tsx":
/*!*******************************************!*\
  !*** ./Component/ModelArea/ModelArea.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core */ \"../node_modules/@babylonjs/core/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_mineSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Redux/mineSelectors */ \"./Redux/mineSelectors.ts\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nvar ModelArea = function ModelArea() {\n  var box;\n  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return (0,_Redux_mineSelectors__WEBPACK_IMPORTED_MODULE_3__.getConnections)(state);\n  });\n  console.log(data);\n\n  var onSceneReady = function onSceneReady(scene) {\n    var camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.FreeCamera(\"camera1\", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 5, -10), scene); // Камера (Vector3 - координаты точки(направления))\n\n    camera.setTarget(_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero()); // Направление камеры\n\n    var canvas = scene.getEngine().getRenderingCanvas(); // Получение движка сцены -> получение контекстного элемента canvas\n\n    camera.attachControl(canvas, true); // Привязка кнопок клавиатуры\n\n    var light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.HemisphericLight(\"light\", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0), scene); // Источник света\n\n    light.intensity = 0.7;\n    box = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateBox(\"box\", {\n      size: 3\n    }, scene); // Создание коробки\n\n    box.position.y = 1;\n    _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateGround(\"ground\", {\n      width: 6,\n      height: 6\n    }, scene); // Создание земли\n  };\n\n  var onRender = function onRender(scene) {\n    if (box !== undefined) {\n      var deltaTimeInMillis = scene.getEngine().getDeltaTime(); // Возвращает время между кадрами\n\n      var rpm = 10;\n      box.rotation.y += rpm / 60 * Math.PI * 2 * (deltaTimeInMillis / 1000); // Задает скорость вращения\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"modelArea\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Canvas, {\n    antialias: true,\n    onSceneReady: onSceneReady,\n    onRender: onRender,\n    id: \"my-canvas\"\n  }));\n};\n\nvar Canvas = function Canvas(_ref) {\n  var antialias = _ref.antialias,\n      onRender = _ref.onRender,\n      onSceneReady = _ref.onSceneReady,\n      id = _ref.id,\n      rest = _objectWithoutProperties(_ref, [\"antialias\", \"onRender\", \"onSceneReady\", \"id\"]);\n\n  var reactCanvas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (reactCanvas.current) {\n      var engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Engine(reactCanvas.current, // ссылка на контекс\n      antialias);\n      var scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Scene(engine);\n\n      if (scene.isReady()) {\n        onSceneReady(scene);\n      } else {\n        scene.onReadyObservable.addOnce(function (scene) {\n          return onSceneReady(scene);\n        });\n      }\n\n      engine.runRenderLoop(function () {\n        if (typeof onRender === \"function\") {\n          // Запуск рендоринга\n          onRender(scene);\n        }\n\n        scene.render();\n      });\n\n      var resize = function resize() {\n        scene.getEngine().resize(); // Подгонка размеров отрисовки к размерам canvas\n      };\n\n      if (window) {\n        window.addEventListener(\"resize\", resize);\n      }\n\n      return function () {\n        scene.getEngine().dispose(); // Некое выключение\n\n        if (window) {\n          window.removeEventListener(\"resize\", resize);\n        }\n      };\n    }\n  }, [reactCanvas]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"canvas\", _extends({\n    ref: reactCanvas\n  }, rest));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModelArea);\n\n//# sourceURL=webpack:///./Component/ModelArea/ModelArea.tsx?");

/***/ }),

/***/ "./Component/Sidebar/ModalForm/ModalForm.tsx":
/*!***************************************************!*\
  !*** ./Component/Sidebar/ModalForm/ModalForm.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ \"../node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form/style */ \"../node_modules/antd/lib/form/style/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/form */ \"../node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input-number/style */ \"../node_modules/antd/lib/input-number/style/index.js\");\n/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input-number */ \"../node_modules/antd/lib/input-number/index.js\");\n/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/modal/Modal */ \"../node_modules/antd/lib/modal/Modal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_mineReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Redux/mineReducer */ \"./Redux/mineReducer.ts\");\n\n\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar ModalForm = function ModalForm(_ref) {\n  var visible = _ref.visible;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(visible),\n      _useState2 = _slicedToArray(_useState, 2),\n      visibleMode = _useState2[0],\n      setVisibleMode = _useState2[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setVisibleMode(visible);\n  }, [visible]);\n\n  var onSubmit = function onSubmit(scale) {\n    dispatch((0,_Redux_mineReducer__WEBPACK_IMPORTED_MODULE_5__.changeScale)(scale));\n    setVisibleMode(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {\n    title: \"\\u0423\\u043C\\u0435\\u043D\\u044C\\u0448\\u0438\\u0442\\u044C \\u043C\\u0430\\u0441\\u0448\\u0442\\u0430\\u0431: \",\n    visible: visibleMode,\n    centered: true,\n    width: \"285px\",\n    footer: null\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ScaleForm, {\n    onSubmit: onSubmit\n  }));\n};\n\nvar ScaleForm = function ScaleForm(_ref2) {\n  var onSubmit = _ref2.onSubmit;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__.default, {\n    className: \"modalForm\",\n    name: \"scale\",\n    onFinish: onSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    name: \"scaleX\",\n    label: \"\\u041C\\u0430\\u0441\\u0448\\u0442\\u0430\\u0431 \\u043F\\u043E \\u043E\\u0441\\u0438 X: \",\n    initialValue: 100\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_8__.default, {\n    min: 50,\n    max: 200\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    name: \"scaleY\",\n    label: \"\\u041C\\u0430\\u0441\\u0448\\u0442\\u0430\\u0431 \\u043F\\u043E \\u043E\\u0441\\u0438 Y: \",\n    initialValue: 100\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_8__.default, {\n    min: 50,\n    max: 200\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__.default.Item, {\n    name: \"scaleZ\",\n    label: \"\\u041C\\u0430\\u0441\\u0448\\u0442\\u0430\\u0431 \\u043F\\u043E \\u043E\\u0441\\u0438 Z: \",\n    initialValue: 10\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_8__.default, {\n    min: 5,\n    max: 50\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__.default.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: \"modal_btn\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__.default, {\n    type: \"primary\",\n    htmlType: \"submit\"\n  }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalForm);\n\n//# sourceURL=webpack:///./Component/Sidebar/ModalForm/ModalForm.tsx?");

/***/ }),

/***/ "./Component/Sidebar/SideBarStyle.ts":
/*!*******************************************!*\
  !*** ./Component/Sidebar/SideBarStyle.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styleBtn\": function() { return /* binding */ styleBtn; },\n/* harmony export */   \"styleMenu\": function() { return /* binding */ styleMenu; },\n/* harmony export */   \"styleSidebar\": function() { return /* binding */ styleSidebar; }\n/* harmony export */ });\nvar styleBtn = {\n  fontSize: \"18px\",\n  marginLeft: \"5px\",\n  background: \"transparent\"\n};\nvar styleMenu = {\n  position: \"relative\",\n  left: \"-10px\",\n  marginTop: \"10px\",\n  fontSize: \"16px\",\n  background: \"transparent\",\n  border: \"none\"\n};\nvar styleSidebar = {\n  background: \"#fff\",\n  height: \"100%\",\n  padding: \"10px\"\n};\n\n//# sourceURL=webpack:///./Component/Sidebar/SideBarStyle.ts?");

/***/ }),

/***/ "./Component/Sidebar/Sidebar.tsx":
/*!***************************************!*\
  !*** ./Component/Sidebar/Sidebar.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ \"../node_modules/antd/lib/menu/style/index.js\");\n/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/menu */ \"../node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button/style */ \"../node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ \"../node_modules/antd/lib/layout/style/index.js\");\n/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ \"../node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/MenuOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/SettingOutlined.js\");\n/* harmony import */ var _SideBarStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideBarStyle */ \"./Component/Sidebar/SideBarStyle.ts\");\n/* harmony import */ var _ModalForm_ModalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalForm/ModalForm */ \"./Component/Sidebar/ModalForm/ModalForm.tsx\");\n\n\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__.default.Sider;\n\nvar Sidebar = function Sidebar() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      collapseMode = _useState2[0],\n      setCollapseMode = _useState2[1];\n\n  var onClickCollapseeMode = function onClickCollapseeMode() {\n    setCollapseMode(!collapseMode);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      modalVisible = _useState4[0],\n      setModalVisible = _useState4[1];\n\n  var onClick = function onClick() {\n    setModalVisible(!modalVisible);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Sider, {\n    trigger: null,\n    collapsible: true,\n    collapsed: collapseMode,\n    style: _SideBarStyle__WEBPACK_IMPORTED_MODULE_4__.styleSidebar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__.default, {\n    type: \"text\",\n    onClick: onClickCollapseeMode,\n    style: _SideBarStyle__WEBPACK_IMPORTED_MODULE_4__.styleBtn\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"span\", {\n    className: \"visible_btn_name \".concat(!collapseMode ? \"visible_btn_name--visible\" : \"\")\n  }, \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9__.default, {\n    style: _SideBarStyle__WEBPACK_IMPORTED_MODULE_4__.styleMenu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9__.default.Item, {\n    key: \"1\",\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.default, null),\n    onClick: onClick\n  }, \"\\u0417\\u0430\\u0434\\u0430\\u0442\\u044C \\u043C\\u0430\\u0441\\u0448\\u0442\\u0430\\u0431\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ModalForm_ModalForm__WEBPACK_IMPORTED_MODULE_5__.default, {\n    visible: modalVisible\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\n//# sourceURL=webpack:///./Component/Sidebar/Sidebar.tsx?");

/***/ }),

/***/ "./Redux/mineReducer.ts":
/*!******************************!*\
  !*** ./Redux/mineReducer.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setData\": function() { return /* binding */ setData; },\n/* harmony export */   \"setScale\": function() { return /* binding */ setScale; },\n/* harmony export */   \"setConnections\": function() { return /* binding */ setConnections; },\n/* harmony export */   \"loadData\": function() { return /* binding */ loadData; },\n/* harmony export */   \"changeConnections\": function() { return /* binding */ changeConnections; },\n/* harmony export */   \"changeScale\": function() { return /* binding */ changeScale; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar SET_DATA = \"3dmodelingBabylonJS/SET_DATA\",\n    SET_SCALE_MINE = \"3dmodelingBabylonJS/SET_SCALE_MINE\",\n    SET_CONNECTIONS = \"3dmodelingBabylonJS/SET_CONNECTIONS\";\n\nvar changePoint = function changePoint(point, scale) {\n  var newPoint = {\n    x: point.x / scale.x,\n    y: point.y / scale.y,\n    z: point.z / scale.z\n  };\n  return newPoint;\n};\n\nvar createConnection = function createConnection(array, scale) {\n  var listPoint = {};\n  var arraysLinks = [];\n  array.forEach(function (item) {\n    var point = _defineProperty({}, item.id, changePoint(item.point, scale));\n\n    listPoint = _objectSpread(_objectSpread({}, listPoint), point);\n    arraysLinks.push(_toConsumableArray(item.linkedNodes));\n  });\n  var arrayIdPoint = Object.keys(listPoint);\n  var arrayIdProcessedPoint = [];\n  var connections = [];\n  arraysLinks.forEach(function (item, index) {\n    arrayIdProcessedPoint.push(arrayIdPoint[index]);\n    item.forEach(function (elem) {\n      if (arrayIdProcessedPoint.indexOf(elem) === -1) {\n        connections.push({\n          pointOne: {\n            id: arrayIdPoint[index],\n            point: _objectSpread({}, listPoint[arrayIdPoint[index]])\n          },\n          pointTwo: {\n            id: elem,\n            point: _objectSpread({}, listPoint[elem])\n          }\n        });\n      }\n    });\n  });\n  return connections;\n};\n\nvar initialState = {\n  dataMine: {\n    id: \"\",\n    title: \"\",\n    created: \"\",\n    updated: \"\",\n    nodes: []\n  },\n  scale: {\n    x: 100,\n    y: 100,\n    z: 10\n  },\n  connections: []\n};\n\nvar mineReducer = function mineReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case SET_DATA:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          dataMine: _objectSpread(_objectSpread({}, action.data), {}, {\n            nodes: _toConsumableArray(action.data.nodes)\n          })\n        });\n      }\n\n    case SET_SCALE_MINE:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          scale: _objectSpread({}, action.scale)\n        });\n      }\n\n    case SET_CONNECTIONS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          connections: _toConsumableArray(action.connections)\n        });\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n};\n\nvar setData = function setData(data) {\n  return {\n    type: SET_DATA,\n    data: data\n  };\n};\nvar setScale = function setScale(scale) {\n  return {\n    type: SET_SCALE_MINE,\n    scale: scale\n  };\n};\nvar setConnections = function setConnections(connections) {\n  return {\n    type: SET_CONNECTIONS,\n    connections: connections\n  };\n};\n/* Thunk */\n\nvar loadData = function loadData(fileName) {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"http://localhost:5000/\".concat(fileName));\n\n            case 2:\n              _context.next = 4;\n              return _context.sent.json();\n\n            case 4:\n              data = _context.sent;\n              dispatch(setData(data));\n              dispatch(changeConnections());\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar changeConnections = function changeConnections() {\n  return function (dispatch, getState) {\n    var nodes = getState().mine.dataMine.nodes;\n    var scale = getState().mine.scale;\n    var connections = createConnection(nodes, scale);\n    dispatch(setConnections(connections));\n  };\n};\nvar changeScale = function changeScale(scale) {\n  return function (dispatch) {\n    dispatch(setScale(scale));\n    dispatch(changeConnections());\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mineReducer);\n\n//# sourceURL=webpack:///./Redux/mineReducer.ts?");

/***/ }),

/***/ "./Redux/mineSelectors.ts":
/*!********************************!*\
  !*** ./Redux/mineSelectors.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getConnections\": function() { return /* binding */ getConnections; }\n/* harmony export */ });\nvar getConnections = function getConnections(state) {\n  return state.mine.connections;\n};\n\n//# sourceURL=webpack:///./Redux/mineSelectors.ts?");

/***/ }),

/***/ "./Redux/redux.ts":
/*!************************!*\
  !*** ./Redux/redux.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"../node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"../node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _mineReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mineReducer */ \"./Redux/mineReducer.ts\");\n\n\n\nvar reducers = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({\n  mine: _mineReducer__WEBPACK_IMPORTED_MODULE_1__.default\n});\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(reducers, (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_0__.default));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./Redux/redux.ts?");

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./App.tsx\");\n/* harmony import */ var _Redux_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Redux/redux */ \"./Redux/redux.ts\");\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n  store: _Redux_redux__WEBPACK_IMPORTED_MODULE_4__.default\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__.default, null))), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./index.tsx?");

/***/ }),

/***/ "./assets/styles/App.scss":
/*!********************************!*\
  !*** ./assets/styles/App.scss ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1617014432935\n      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack:///./assets/styles/App.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "main." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "9e46d283ca02202a19cd"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				const oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./index.tsx","vendors-node_modules_ant-design_icons_es_icons_MenuOutlined_js-node_modules_ant-design_icons_-1a28d1"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;