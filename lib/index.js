'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap\");\n\n.uploader-simple-main {\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n}\n\n.uploader-simple-main *,\n.uploader-detailed-main *,\n.uploader-imageless-main * {\n  font-family: \"Inter\";\n}\n\n.uploader-simple-img-container {\n  display: flex;\n  padding: 20px;\n}\n\n.uploader-simple-img {\n  flex: 1;\n  width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.uploader-simple-text {\n  position: absolute;\n  background-color: #0008;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 20px;\n}\n\n.hide {\n  display: none !important;\n}\n\n.uploader-blurred {\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n}\n\n.uploader-input {\n  display: none;\n}\n\n.uploader-detailed-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-width: 0;\n  min-height: 0;\n  height: 100px;\n  width: 300px;\n  flex: 1;\n  gap: 15px;\n  object-fit: contain;\n  cursor: pointer;\n}\n\n.uploader-imageless-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-width: 0;\n  min-height: 0;\n  height: 100px;\n  width: 300px;\n  flex: 1;\n  object-fit: contain;\n  cursor: pointer;\n}\n\n.uploader-detail-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 12px;\n  flex: 1;\n  padding-right: 15px;\n  box-sizing: border-box;\n}\n\n.uploader-detail-img-container {\n  display: flex;\n  min-height: 0;\n  height: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.uploader-detail-img {\n  min-height: 0;\n  height: 100%;\n  object-fit: contain;\n}\n\n.uploader-cloud-container {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n}\n\n.uploader-cloud {\n  width: 28px;\n  height: 28px;\n}\n\n.uploader-cloud-text {\n  font-size: 16px;\n  color: #0bf;\n}\n\n.uploader-description {\n  font-size: 12px;\n  color: #555;\n}\n";
styleInject(css_248z);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var imageTypes = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/ico",
    "image/gif",
];
var uploadFile = function (file, endpoint, type) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                if (!file)
                    reject("Missing file");
                if (type === "IMAGE" && !imageTypes.includes(file.type)) {
                    reject("Not an image");
                }
                var formData = new FormData();
                var code = v4();
                formData.append(code, file, "".concat(code, ".").concat(file.name.split(".").at(-1)));
                axios__default["default"]
                    .post(endpoint, formData, {
                    headers: {
                        "Content-Type": "application/octet-stream",
                    },
                })
                    .then(function (res) { return resolve(res.data); })
                    .catch(function (err) { return reject(err); });
            })];
    });
}); };

var defaultImage = "https://cdn-icons-png.flaticon.com/512/739/739249.png";
var defaultFile = "https://cdn-icons-png.flaticon.com/512/569/569800.png";
var uploadIcon = "https://cdn-icons.flaticon.com/png/512/2716/premium/2716054.png?token=exp=1655752480~hmac=11f964f9b3374fd947497854fbfaf62f";
var FileUploader = function (props) {
    var endpoint = props.endpoint, fileType = props.fileType, onUpload = props.onUpload, imageSource = props.imageSource, design = props.design, description = props.description, uploadText = props.uploadText;
    var _a = React.useState(false), isHovered = _a[0], setIsHovered = _a[1];
    var _b = React.useState(), file = _b[0], setFile = _b[1];
    React.useEffect(function () {
        if (!file)
            return;
        uploadFile(file, endpoint, fileType)
            .then(function (res) {
            console.log(res);
            if (!res || typeof res !== "string")
                return;
            onUpload(res);
        })
            .catch(function (err) { return console.error(err); });
    }, [file]);
    var onChangeFile = function (event) {
        if (!event || !event.target || !event.target.files)
            return;
        setFile(event.target.files[0]);
    };
    if (design === "DETAILED") {
        return (React__default["default"].createElement("label", { className: "uploader-detailed-main" },
            React__default["default"].createElement("div", { className: "uploader-detailed-container" },
                React__default["default"].createElement("div", { className: "uploader-detail-img-container" },
                    React__default["default"].createElement("img", { className: "uploader-detail-img", src: fileType === "IMAGE"
                            ? imageSource
                                ? imageSource
                                : defaultImage
                            : defaultFile })),
                React__default["default"].createElement("div", { className: "uploader-detail-container" },
                    React__default["default"].createElement("div", { className: "uploader-cloud-container" },
                        React__default["default"].createElement("img", { className: "uploader-cloud", src: uploadIcon }),
                        React__default["default"].createElement("div", { className: "uploader-cloud-text" }, uploadText)),
                    React__default["default"].createElement("div", { className: "uploader-description" }, description))),
            React__default["default"].createElement("input", { type: "file", className: "uploader-input", onChange: onChangeFile })));
    }
    if (design === "IMAGELESS") {
        return (React__default["default"].createElement("label", { className: "uploader-imageless-main" },
            React__default["default"].createElement("div", { className: "uploader-imageless-container" },
                React__default["default"].createElement("div", { className: "uploader-detail-container" },
                    React__default["default"].createElement("div", { className: "uploader-cloud-container" },
                        React__default["default"].createElement("img", { className: "uploader-cloud", src: uploadIcon }),
                        React__default["default"].createElement("div", { className: "uploader-cloud-text" }, uploadText)),
                    React__default["default"].createElement("div", { className: "uploader-description" }, description))),
            React__default["default"].createElement("input", { type: "file", className: "uploader-input", onChange: onChangeFile })));
    }
    return (React__default["default"].createElement("div", { className: "uploader-simple-main" },
        React__default["default"].createElement("div", { className: "uploader-simple-img-container", onMouseEnter: function () { return setIsHovered(true); } },
            React__default["default"].createElement("img", { className: "uploader-simple-img ".concat(isHovered ? "uploader-blurred" : ""), src: fileType === "IMAGE"
                    ? imageSource
                        ? imageSource
                        : defaultImage
                    : defaultFile })),
        React__default["default"].createElement("label", { className: "uploader-simple-text ".concat(isHovered ? "" : "hide"), onMouseLeave: function () { return setIsHovered(false); } },
            fileType === "IMAGE" ? "Upload an Image" : "Upload a File",
            React__default["default"].createElement("input", { type: "file", className: "uploader-input", onChange: onChangeFile }))));
};

var GlobalContext = React.createContext(undefined);
var MainComp = function () {
    var _a = React.useState({}), global = _a[0], setGlobal = _a[1];
    var handleNewImage = function (name, newPath) {
        var _a;
        if (!setGlobal)
            return;
        setGlobal(__assign(__assign({}, global), (_a = {}, _a[name] = newPath, _a)));
    };
    return (React__default["default"].createElement(GlobalContext.Provider, { value: [global, setGlobal] },
        React__default["default"].createElement("div", { style: { width: "150px", height: "150px" } },
            React__default["default"].createElement(FileUploader, { endpoint: "".concat(process.env.REACT_APP_DOMAIN
                    ? process.env.REACT_APP_DOMAIN
                    : "http://localhost:8080", "/cloudFunctions/uploadFile"), onUpload: function (newVal) { return handleNewImage("test", newVal); }, fileType: "IMAGE", imageSource: global && global.test ? global.test : "", design: "DETAILED", uploadText: "Upload", description: "This is a test description" }))));
};

exports.FileUploader = FileUploader;
exports.MainComp = MainComp;
