'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _libCrunchTag = require('./lib/crunchTag');

var _libCrunchLink = require('./lib/crunchLink');

var _libCrunchLast = require('./lib/crunchLast');

var TechCrunch = (function () {
  function TechCrunch() {
    _classCallCheck(this, TechCrunch);
  }

  _createClass(TechCrunch, [{
    key: 'crunchTag',
    value: function crunchTag() {
      var tag = arguments[0] === undefined ? 'latest' : arguments[0];

      tag = tag === 'latest' ? '' : tag;
      console.log('tag', tag);
      return new Promise(function (resolve, reject) {
        (0, _libCrunchTag.crunchTag)(tag, function (err, body) {
          if (!err) return resolve(body);else return reject(err);
        });
      });
    }
  }, {
    key: 'crunchLink',
    value: function crunchLink(link) {
      return new Promise(function (resolve, reject) {
        (0, _libCrunchLink.crunchLink)(link, function (err, body) {
          if (!err) return resolve(body);else return reject(err);
        });
      });
    }
  }, {
    key: 'crunchLast',
    value: function crunchLast() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        (0, _libCrunchLast.crunchLast)(_this, function (err, body) {
          if (!err) return resolve(body);else return reject(err);
        });
      });
    }
  }]);

  return TechCrunch;
})();

var tc = new TechCrunch();

exports['default'] = tc;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzRCQUEwQixpQkFBaUI7OzZCQUNoQixrQkFBa0I7OzZCQUNsQixrQkFBa0I7O0lBRXZDLFVBQVU7V0FBVixVQUFVOzBCQUFWLFVBQVU7OztlQUFWLFVBQVU7O1dBRUwscUJBQWlCO1VBQWhCLEdBQUcsZ0NBQUcsUUFBUTs7QUFDdEIsU0FBRyxHQUFHLEdBQUcsS0FBSyxRQUFRLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUNsQyxhQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN4QixhQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QywwQkFWRyxTQUFTLEVBVUYsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUksRUFBSztBQUM1QixjQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQzFCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FBQztPQUNKLENBQUMsQ0FBQztLQUNKOzs7V0FFUyxvQkFBQyxJQUFJLEVBQUU7QUFDZixhQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QywyQkFsQkcsVUFBVSxFQWtCRixJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQzlCLGNBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FDMUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztXQUVTLHNCQUFHOzs7QUFDWCxhQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QywyQkExQkcsVUFBVSxTQTBCSSxVQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUs7QUFDOUIsY0FBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUMxQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQUM7T0FDSixDQUFDLENBQUM7S0FDSjs7O1NBN0JHLFVBQVU7OztBQWlDaEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQzs7cUJBRVgsRUFBRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNydW5jaFRhZyB9IGZyb20gJy4vbGliL2NydW5jaFRhZyc7XG5pbXBvcnQgeyBjcnVuY2hMaW5rIH0gZnJvbSAnLi9saWIvY3J1bmNoTGluayc7XG5pbXBvcnQgeyBjcnVuY2hMYXN0IH0gZnJvbSAnLi9saWIvY3J1bmNoTGFzdCc7XG5cbmNsYXNzIFRlY2hDcnVuY2gge1xuXG4gIGNydW5jaFRhZyh0YWcgPSAnbGF0ZXN0Jykge1xuICAgIHRhZyA9IHRhZyA9PT0gJ2xhdGVzdCcgPyAnJyA6IHRhZztcbiAgICBjb25zb2xlLmxvZygndGFnJywgdGFnKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY3J1bmNoVGFnKHRhZywgKGVyciwgYm9keSkgPT4ge1xuICAgICAgICBpZiAoIWVycikgcmV0dXJuIHJlc29sdmUoYm9keSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcnVuY2hMaW5rKGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY3J1bmNoTGluayhsaW5rLCAoZXJyLCBib2R5KSA9PiB7XG4gICAgICAgIGlmICghZXJyKSByZXR1cm4gcmVzb2x2ZShib2R5KTtcbiAgICAgICAgZWxzZSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNydW5jaExhc3QoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNydW5jaExhc3QodGhpcywgKGVyciwgYm9keSkgPT4ge1xuICAgICAgICBpZiAoIWVycikgcmV0dXJuIHJlc29sdmUoYm9keSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG52YXIgdGMgPSBuZXcgVGVjaENydW5jaCgpO1xuXG5leHBvcnQgZGVmYXVsdCB0YzsiXX0=