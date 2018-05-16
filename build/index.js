(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jinro = function Jinro() {
  _classCallCheck(this, Jinro);

  this.role = 'Jinro';
};

exports.default = Jinro;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shimin = function Shimin() {
  _classCallCheck(this, Shimin);

  this.role = 'Shimin';
};

exports.default = Shimin;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Judger = function () {
  function Judger(hash) {
    _classCallCheck(this, Judger);

    this.players = hash.players;
  }

  _createClass(Judger, [{
    key: 'judge',
    value: function judge() {
      var jinros = this.players.filter(function (player) {
        return player.role == 'Jinro';
      });
      var shimins = this.players.filter(function (player) {
        return player.role == 'Shimin';
      });
      if (jinros.length == 2 && shimins.length <= 2 || jinros.length == 1 && shimins.length <= 1) {
        console.log('Jinro win');
      } else {
        console.log('except for Jinro win');
      }
    }
  }]);

  return Judger;
}();

exports.default = Judger;

},{}],4:[function(require,module,exports){
'use strict';

var _Judger = require('../lib/factory/Judger.js');

var _Judger2 = _interopRequireDefault(_Judger);

var _Jinro = require('../lib/factory/Job/Jinro.js');

var _Jinro2 = _interopRequireDefault(_Jinro);

var _Shimin = require('../lib/factory/Job/Shimin.js');

var _Shimin2 = _interopRequireDefault(_Shimin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function main() {
  var judger = new _Judger2.default({
    players: [new _Jinro2.default(), new _Shimin2.default()]
  });
  judger.judge();
})();

},{"../lib/factory/Job/Jinro.js":1,"../lib/factory/Job/Shimin.js":2,"../lib/factory/Judger.js":3}]},{},[4]);
