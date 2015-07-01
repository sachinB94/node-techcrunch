'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.crunchLast = crunchLast;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _xRay = require('x-ray');

var Xray = _interopRequireWildcard(_xRay);

var _configJs = require('../config.js');

function crunchLast(tc, next) {
  var x = Xray['default']();

  tc.crunchLink(_configJs.BASE_URL + '/latest').then(function (news) {
    return next(null, news);
  })['catch'](function (err) {
    return next(err, null);
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY3J1bmNoTGFzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUlnQixVQUFVLEdBQVYsVUFBVTs7OztvQkFKSixPQUFPOztJQUFqQixJQUFJOzt3QkFFUyxjQUFjOztBQUVoQyxTQUFTLFVBQVUsQ0FBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO0FBQ3BDLE1BQUksQ0FBQyxHQUFHLElBQUksV0FBUSxFQUFFLENBQUM7O0FBRXZCLElBQUUsQ0FBQyxVQUFVLENBQUMsVUFMUCxRQUFRLEdBS1UsU0FBUyxDQUFDLENBQ2hDLElBQUksQ0FBQyxVQUFTLElBQUksRUFBRTtBQUNuQixXQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDekIsQ0FBQyxTQUNJLENBQUMsVUFBUyxHQUFHLEVBQUU7QUFDbkIsV0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3hCLENBQUMsQ0FBQztDQUNOIiwiZmlsZSI6ImNydW5jaExhc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYcmF5IGZyb20gJ3gtcmF5JztcblxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICcuLi9jb25maWcuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3J1bmNoTGFzdCAodGMsIG5leHQpIHtcbiAgbGV0IHggPSBYcmF5LmRlZmF1bHQoKTtcblxuICB0Yy5jcnVuY2hMaW5rKEJBU0VfVVJMICsgJy9sYXRlc3QnKVxuICAgIC50aGVuKGZ1bmN0aW9uKG5ld3MpIHtcbiAgICAgIHJldHVybiBuZXh0KG51bGwsIG5ld3MpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyLCBudWxsKTtcbiAgICB9KTtcbn0iXX0=