(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jinro = function Jinro() {
  _classCallCheck(this, Jinro);
};

exports.default = Jinro;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shimin = function Shimin() {
  _classCallCheck(this, Shimin);
};

exports.default = Shimin;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Judge = function Judge() {
  _classCallCheck(this, Judge);

  console.log(Model);
};

exports.default = Judge;

},{}],4:[function(require,module,exports){
"use strict";

(function () {
  var Model = {
    players: []
  };

  module.exports = Model;
})();

},{}],5:[function(require,module,exports){
'use strict';

var _Judge = require('../lib/factory/Judge.js');

var _Judge2 = _interopRequireDefault(_Judge);

var _Jinro = require('../lib/factory/Job/Jinro.js');

var _Jinro2 = _interopRequireDefault(_Jinro);

var _Shimin = require('../lib/factory/Job/Shimin.js');

var _Shimin2 = _interopRequireDefault(_Shimin);

var _Model = require('../lib/service/Model.js');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function main() {
  _Model2.default.players.push(new _Jinro2.default());
  _Model2.default.players.push(new _Jinro2.default());
  _Model2.default.players.push(new _Shimin2.default());
  _Model2.default.players.push(new _Shimin2.default());
  _Model2.default.players.push(new _Shimin2.default());
  _Model2.default.players.push(new _Shimin2.default());
  new _Judge2.default();
})();

},{"../lib/factory/Job/Jinro.js":1,"../lib/factory/Job/Shimin.js":2,"../lib/factory/Judge.js":3,"../lib/service/Model.js":4}]},{},[5]);
