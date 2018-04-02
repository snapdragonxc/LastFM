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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(13);

var _Home2 = _interopRequireDefault(_Home);

var _Artists = __webpack_require__(15);

var _Artists2 = _interopRequireDefault(_Artists);

var _Artist = __webpack_require__(18);

var _Artist2 = _interopRequireDefault(_Artist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
exports.default = [_extends({}, _App2.default, {
    routes: [_extends({
        path: '/',
        exact: true
    }, _Home2.default), _extends({
        path: '/artists/:country',
        exact: true
    }, _Artists2.default), _extends({
        path: '/artists/:country/:page'
    }, _Artists2.default), _extends({
        path: '/artist/:name',
        exact: true
    }, _Artist2.default), _extends({
        path: '/artist/:name/:page'
    }, _Artist2.default)]
})];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getArtist = exports.getArtists = undefined;

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(17);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
var getArtists = exports.getArtists = function getArtists(cur_country, cur_page) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            var baseURL, country, api_key, limit, page, fmt, url, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            baseURL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists';
                            country = '&country=' + cur_country;
                            api_key = '&api_key=' + _config2.default.apiKey;
                            limit = '&limit=' + _config2.default.limit;
                            page = '&page=' + cur_page;
                            fmt = '&format=json';
                            url = baseURL + api_key + limit + fmt + country + page;
                            _context.next = 9;
                            return _axios2.default.get(url);

                        case 9:
                            res = _context.sent;

                            dispatch({
                                type: 'GET_ARTISTS',
                                payload: res
                            });

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};
var getArtist = exports.getArtist = function getArtist(cur_artist, cur_page) {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
            var baseURL, artist, api_key, limit, page, fmt, url, res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            baseURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks';
                            artist = '&artist=' + cur_artist;
                            api_key = '&api_key=' + _config2.default.apiKey;
                            limit = '&limit=' + _config2.default.limit;
                            page = '&page=' + cur_page;
                            fmt = '&format=json';
                            url = baseURL + api_key + limit + fmt + artist + page;
                            _context2.next = 9;
                            return _axios2.default.get(url);

                        case 9:
                            res = _context2.sent;

                            dispatch({
                                type: 'GET_ARTIST',
                                payload: res
                            });

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function (_x2) {
            return _ref2.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(19);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(22);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
    var store = (0, _createStore2.default)();
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store, req.path) : null;
    });
    Promise.all(promises).then(function () {
        res.send((0, _renderer2.default)(req, store));
    });
});
app.listen(8080, function () {
    console.log('Listening on port 8080');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(12);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var Header = function Header() {
    return _react2.default.createElement(
        'nav',
        { className: 'uk-container uk-container-small' },
        _react2.default.createElement(
            'div',
            { className: 'uk-navbar-container' },
            _react2.default.createElement(
                'div',
                { className: 'uk-navbar-left' },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/', className: 'uk-navbar-item uk-logo' },
                    'LastFM'
                )
            )
        )
    );
};
exports.default = Header;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var Footer = function Footer() {
    return _react2.default.createElement(
        "div",
        { className: "uk-container uk-container-small" },
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
            "p",
            { className: "footer" },
            "LastFM 2018"
        )
    );
};
exports.default = Footer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _countries = __webpack_require__(14);

var _countries2 = _interopRequireDefault(_countries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            value: '',
            hintsArray: []
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'handleSelect',
        value: function handleSelect(index) {
            this.setState({
                value: _countries2.default[index],
                hintsArray: []
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var country = this.state.value;
            //<--- Validate country ---> ///
            country = _countries2.default.find(function (elem) {
                return elem.toUpperCase() == country.toUpperCase();
            });

            if (country == undefined) {
                alert('invalid country');
                this.setState({
                    value: '',
                    hintsArray: []
                });
                return;
            }
            var url = "/artists/" + country + "/1"; // always go to page '1' to prevent glitch if no page ... until fix
            this.props.history.push(url);
            event.preventDefault();
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var _this2 = this;

            var val = event.target.value;
            var hints = [];

            var _loop = function _loop(i) {
                /*check if the item starts with the same letters as the text field value:*/
                if (_countries2.default[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    hints.push(_react2.default.createElement(
                        'div',
                        { key: i, onClick: function onClick() {
                                return _this2.handleSelect(i);
                            } },
                        _react2.default.createElement(
                            'strong',
                            null,
                            _countries2.default[i].substr(0, val.length)
                        ),
                        _countries2.default[i].substr(val.length)
                    ));
                }
            };

            for (var i = 0; i < _countries2.default.length; i++) {
                _loop(i);
            }
            if (val == '') {
                hints = [];
            }
            this.setState({
                value: event.target.value,
                hintsArray: hints
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'uk-container uk-container-small' },
                _react2.default.createElement(
                    'div',
                    { className: 'home' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Top Artists'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Search by Country:'
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'div',
                            { className: 'autocomplete', style: { width: '300px' } },
                            _react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
                        ),
                        _react2.default.createElement('input', { type: 'submit', value: 'Submit' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'autocomplete-items' },
                            this.state.hintsArray
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = {
    component: Home
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
var Artists = function (_Component) {
    _inherits(Artists, _Component);

    function Artists(props) {
        _classCallCheck(this, Artists);

        var _this = _possibleConstructorReturn(this, (Artists.__proto__ || Object.getPrototypeOf(Artists)).call(this, props));

        var params = props.location.pathname.split('\/');
        _this.country = decodeURI(params[2]);
        _this.page = params[3];
        _this.page = typeof _this.page === 'undefined' ? 1 : parseInt(_this.page);
        _this.minPage = 1;
        _this.maxPage = 1;
        _this.canDraw = false;
        // Add Listen function to monitor Browser Buttons
        _this.unlisten = _this.props.history.listen(function (location, action) {
            if (action === 'POP') {
                var params = location.pathname.split('\/');
                _this.country = decodeURI(params[2]);
                _this.page = params[3];
                _this.page = typeof _this.page === 'undefined' ? 1 : parseInt(_this.page);
                _this.props.getArtists(_this.country, _this.page);
            }
        });
        return _this;
    }

    _createClass(Artists, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unlisten();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.canDraw = false;
            this.props.getArtists(this.country, this.page);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.canDraw = true;
        }
    }, {
        key: 'getPagingRange',
        value: function getPagingRange(current) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref$min = _ref.min,
                min = _ref$min === undefined ? 1 : _ref$min,
                _ref$total = _ref.total,
                total = _ref$total === undefined ? 2000 : _ref$total,
                _ref$length = _ref.length,
                length = _ref$length === undefined ? 10 : _ref$length;

            if (length > total) length = total;
            var start = current - Math.floor(length / 2);
            start = Math.max(start, min);
            start = Math.min(start, min + total - length);
            return Array.from({ length: length }, function (el, i) {
                return start + i;
            });
        }
    }, {
        key: 'decrement',
        value: function decrement(event) {
            if (this.page == this.minPage) return;
            this.page = this.page - 1;
            this.props.getArtists(this.country, this.page);
            var url = "/artists/" + this.country + "/" + this.page;
            this.props.history.push(url);
        }
    }, {
        key: 'increment',
        value: function increment(event) {
            if (this.page == this.maxPage) return;
            this.page = this.page + 1;
            this.props.getArtists(this.country, this.page);
            var url = "/artists/" + this.country + "/" + this.page;
            this.props.history.push(url);
        }
    }, {
        key: 'handleArtist',
        value: function handleArtist(name) {
            var url = "/artist/" + name + "/1";
            this.props.history.push(url);
        }
    }, {
        key: 'renderArtists',
        value: function renderArtists() {
            var _this2 = this;

            var artists = [];
            if (this.props.artists.topartists != undefined) {
                // api somes times returned more than five? Limit to five.
                artists = this.props.artists.topartists.artist.slice(0, 5);
            } else {
                artists = [];
            }
            if (this.canDraw) {
                return artists.map(function (artist, index) {
                    return _react2.default.createElement(
                        'li',
                        { key: index },
                        _react2.default.createElement(
                            'h5',
                            null,
                            artist.name
                        ),
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.handleArtist(artist.name);
                                }, className: 'artists-thbImage' },
                            _react2.default.createElement('img', { src: artist.image[1]['#text'], width: '100', alt: '' })
                        )
                    );
                });
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    '...Loading'
                );
            }
        }
    }, {
        key: 'onClickPage',
        value: function onClickPage(event, page) {
            this.page = page;
            this.props.getArtists(this.country, this.page);
            var url = "/artists/" + this.country + "/" + this.page;
            this.props.history.push(url);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var curPage = this.page;
            if (this.props.artists.topartists != undefined) {
                this.maxPage = this.props.artists.topartists['\@attr'].totalPages;
            }
            var that = this;
            var pages = this.getPagingRange(curPage, { total: this.maxPage }).map(function (page, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index },
                    _react2.default.createElement(
                        'a',
                        { className: curPage === page ? 'uk-active' : '',
                            onClick: function onClick(event) {
                                return that.onClickPage(event, page);
                            } },
                        ' ',
                        page,
                        ' '
                    )
                );
            });
            // handle api error messages
            if (this.props.artists.error != undefined && this.canDraw) {

                return _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small' },
                    _react2.default.createElement(
                        'div',
                        { className: 'error-message' },
                        _react2.default.createElement(
                            'p',
                            null,
                            '...',
                            this.props.artists.message
                        )
                    )
                );
            }
            // handle zero pages 
            if (this.props.artists.topartists != undefined && this.maxPage == 0) {

                return _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small' },
                    _react2.default.createElement(
                        'div',
                        { className: 'error-message' },
                        _react2.default.createElement(
                            'p',
                            null,
                            '... not available'
                        )
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { className: 'uk-container uk-container-small' },
                _react2.default.createElement(
                    'div',
                    { className: 'artists' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Top artists of ',
                        _react2.default.createElement(
                            'span',
                            { className: 'artists-country' },
                            this.country
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'artists-list' },
                        this.renderArtists()
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'uk-pagination' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(event) {
                                        return _this3.decrement(event);
                                    } },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '<'
                                )
                            )
                        ),
                        pages,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(event) {
                                        return _this3.increment(event);
                                    } },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '>'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Artists;
}(_react.Component);

function loadData(store, path) {
    var params = path.split('\/');
    var country = decodeURI(params[2]);
    var page = params[3];
    page = typeof page === 'undefined' ? 1 : parseInt(page);
    return store.dispatch((0, _actions.getArtists)(country, page));
}
function mapStateToProps(state) {
    return {
        artists: state.artists
    };
}
exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { getArtists: _actions.getArtists, getArtist: _actions.getArtist })(Artists)
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    apiKey: 'd8ec87a07e4ca6e49dcb69f5799281e3',
    limit: 5
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
var Artist = function (_Component) {
    _inherits(Artist, _Component);

    function Artist(props) {
        _classCallCheck(this, Artist);

        var _this = _possibleConstructorReturn(this, (Artist.__proto__ || Object.getPrototypeOf(Artist)).call(this, props));

        var params = props.location.pathname.split('\/');
        _this.name = decodeURI(params[2]);
        _this.page = params[3];
        _this.page = typeof _this.page === 'undefined' ? 1 : parseInt(_this.page);
        _this.minPage = 1;
        _this.maxPage = 1;
        _this.canDraw = false;
        // Add Listen function to monitor Browser Buttons
        _this.unlisten = _this.props.history.listen(function (location, action) {
            if (action === 'POP') {
                var params = location.pathname.split('\/');
                _this.name = decodeURI(params[2]);
                _this.page = params[3];
                _this.page = typeof _this.page === 'undefined' ? 1 : parseInt(_this.page);
                _this.props.getArtist(_this.name, _this.page);
            }
        });
        return _this;
    }

    _createClass(Artist, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unlisten();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.canDraw = false;
            this.props.getArtist(this.name, this.page);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.canDraw = true;
        }
    }, {
        key: 'getPagingRange',
        value: function getPagingRange(current) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref$min = _ref.min,
                min = _ref$min === undefined ? 1 : _ref$min,
                _ref$total = _ref.total,
                total = _ref$total === undefined ? 2000 : _ref$total,
                _ref$length = _ref.length,
                length = _ref$length === undefined ? 10 : _ref$length;

            if (length > total) length = total;
            var start = current - Math.floor(length / 2);
            start = Math.max(start, min);
            start = Math.min(start, min + total - length);
            return Array.from({ length: length }, function (el, i) {
                return start + i;
            });
        }
    }, {
        key: 'decrement',
        value: function decrement(event) {
            if (this.page == this.minPage) return;
            this.page = this.page - 1;
            this.props.getArtist(this.name, this.page);
            var url = "/artist/" + this.name + "/" + this.page;
            this.props.history.push(url);
        }
    }, {
        key: 'increment',
        value: function increment(event) {
            if (this.page == this.maxPage) return;
            this.page = this.page + 1;
            this.props.getArtist(this.name, this.page);
            var url = "/artist/" + this.name + "/" + this.page;
            this.props.history.push(url);
        }
    }, {
        key: 'renderImage',
        value: function renderImage() {
            var src = '';
            if (this.props.artist.toptracks != undefined) {
                // api somes times returned more than five? Limit to five.
                src = this.props.artist.toptracks.track[0].image[3]['#text'];
            } else {
                src = '';
            }
            if (this.canDraw) {
                return _react2.default.createElement('img', { src: src, width: '300', alt: 'image not found' });
            } else {
                return _react2.default.createElement('div', null);
            }
        }
    }, {
        key: 'renderTracks',
        value: function renderTracks() {
            var tracks = [];
            if (this.props.artist.toptracks != undefined) {
                // api somes times returned more than five? Limit to five.
                tracks = this.props.artist.toptracks.track.slice(0, 5);
            } else {
                tracks = [];
            }
            if (this.canDraw) {
                return tracks.map(function (track, index) {
                    return _react2.default.createElement(
                        'li',
                        { key: index },
                        _react2.default.createElement(
                            'h4',
                            null,
                            track.name
                        )
                    );
                });
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    '...Loading'
                );
            }
        }
    }, {
        key: 'onClickPage',
        value: function onClickPage(event, page) {
            this.page = page;
            this.props.getArtist(this.name, this.page);
            var url = "/artist/" + this.name + "/" + this.page;
            this.props.history.push(url);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var curPage = this.page;
            if (this.props.artist.toptracks != undefined) {
                this.maxPage = this.props.artist.toptracks['\@attr'].totalPages;
            }
            var that = this;
            var pages = this.getPagingRange(curPage, { total: this.maxPage }).map(function (page, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index },
                    _react2.default.createElement(
                        'a',
                        { className: curPage === page ? 'uk-active' : '',
                            onClick: function onClick(event) {
                                return that.onClickPage(event, page);
                            } },
                        ' ',
                        page,
                        ' '
                    )
                );
            });
            // handle api error messages
            if (this.props.artist.error != undefined && this.canDraw) {
                return _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small' },
                    _react2.default.createElement(
                        'div',
                        { className: 'error-message' },
                        _react2.default.createElement(
                            'p',
                            null,
                            '...',
                            this.props.artist.message
                        )
                    )
                );
            }
            // handle zero pages 
            if (this.props.artist.toptracks != undefined && this.maxPage == 0) {
                return _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small' },
                    _react2.default.createElement(
                        'div',
                        { className: 'error-message' },
                        _react2.default.createElement(
                            'p',
                            null,
                            '... not available'
                        )
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { className: 'uk-container uk-container-small' },
                _react2.default.createElement(
                    'div',
                    { className: 'artist' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Top tracks of ',
                        _react2.default.createElement(
                            'span',
                            { className: 'artist-name' },
                            this.name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'artist-left' },
                        this.renderImage()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'artist-right' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'artist-list' },
                            this.renderTracks()
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'uk-pagination' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { onClick: function onClick(event) {
                                            return _this2.decrement(event);
                                        } },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '<'
                                    )
                                )
                            ),
                            pages,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { onClick: function onClick(event) {
                                            return _this2.increment(event);
                                        } },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '>'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'artist-footer' })
                )
            );
        }
    }]);

    return Artist;
}(_react.Component);

function loadData(store, path) {
    var params = path.split('\/');
    var name = decodeURI(params[2]);
    var page = params[3];
    page = typeof page === 'undefined' ? 1 : parseInt(page);
    return store.dispatch((0, _actions.getArtist)(name, page));
}
function mapStateToProps(state) {
    return {
        artist: state.artist
    };
}
exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { getArtist: _actions.getArtist })(Artist)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(21);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: {} },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));
    return '\n        <html>\n            <head>\n                <title>Last FM API</title>\n                <meta charset="utf-8">\n                <meta name="viewport" content="width=device-width, initial-scale=1">\n                <link rel="stylesheet" href="/css/uikit.min.css" />\n                <link rel="stylesheet" type="text/css" href="/style.css">\n                <style>\n                    html { overflow-y: scroll; }\n                </style>\n            </head>           \n            <body>\n                <div id="root">' + content + '</div>\n                <script>\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="/bundle.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(23);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(24);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    return store;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _artistsReducer = __webpack_require__(25);

var _artistsReducer2 = _interopRequireDefault(_artistsReducer);

var _artistReducer = __webpack_require__(26);

var _artistReducer2 = _interopRequireDefault(_artistReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
exports.default = (0, _redux.combineReducers)({
    artists: _artistsReducer2.default,
    artist: _artistReducer2.default
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'GET_ARTISTS':
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'GET_ARTIST':
            return action.payload.data;
        default:
            return state;
    }
};

/***/ })
/******/ ]);