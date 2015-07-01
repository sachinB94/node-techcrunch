'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _libCrunchLink = require('./lib/crunchLink');

var _libCrunchTag = require('./lib/crunchTag');

var TechCrunch = (function () {
  function TechCrunch() {
    _classCallCheck(this, TechCrunch);
  }

  _createClass(TechCrunch, [{
    key: 'crunchTag',
    value: function crunchTag() {
      var tag = arguments[0] === undefined ? 'latest' : arguments[0];

      tag = tag === 'latest' ? '' : tag;
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
  }]);

  return TechCrunch;
})();

var tc = new TechCrunch();

exports['default'] = tc;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzZCQUEyQixrQkFBa0I7OzRCQUNuQixpQkFBaUI7O0lBRXJDLFVBQVU7V0FBVixVQUFVOzBCQUFWLFVBQVU7OztlQUFWLFVBQVU7O1dBRUwscUJBQWlCO1VBQWhCLEdBQUcsZ0NBQUcsUUFBUTs7QUFDdEIsU0FBRyxHQUFHLEdBQUcsS0FBSyxRQUFRLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUNsQyxhQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QywwQkFQRyxTQUFTLEVBT0YsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUksRUFBSztBQUM1QixjQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQzFCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FBQztPQUNKLENBQUMsQ0FBQztLQUNKOzs7V0FFUyxvQkFBQyxJQUFJLEVBQUU7QUFDZixhQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QywyQkFqQkcsVUFBVSxFQWlCRixJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQzlCLGNBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FDMUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztTQW5CRyxVQUFVOzs7QUF1QmhCLElBQUksRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7O3FCQUVYLEVBQUUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcnVuY2hMaW5rIH0gZnJvbSAnLi9saWIvY3J1bmNoTGluayc7XG5pbXBvcnQgeyBjcnVuY2hUYWcgfSBmcm9tICcuL2xpYi9jcnVuY2hUYWcnO1xuXG5jbGFzcyBUZWNoQ3J1bmNoIHtcblxuICBjcnVuY2hUYWcodGFnID0gJ2xhdGVzdCcpIHtcbiAgICB0YWcgPSB0YWcgPT09ICdsYXRlc3QnID8gJycgOiB0YWc7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNydW5jaFRhZyh0YWcsIChlcnIsIGJvZHkpID0+IHtcbiAgICAgICAgaWYgKCFlcnIpIHJldHVybiByZXNvbHZlKGJvZHkpO1xuICAgICAgICBlbHNlIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3J1bmNoTGluayhsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNydW5jaExpbmsobGluaywgKGVyciwgYm9keSkgPT4ge1xuICAgICAgICBpZiAoIWVycikgcmV0dXJuIHJlc29sdmUoYm9keSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7IFxuICB9XG5cbn1cblxudmFyIHRjID0gbmV3IFRlY2hDcnVuY2goKTtcblxuZXhwb3J0IGRlZmF1bHQgdGM7Il19