'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.crunchTag = crunchTag;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _xRay = require('x-ray');

var Xray = _interopRequireWildcard(_xRay);

var _configJs = require('../config.js');

function crunchTag(tag, next) {
  var x = Xray['default']();

  x(_configJs.BASE_URL + '/' + tag, 'li.river-block', [{
    title: '.post-title a@html',
    link: '.post-title a@href',
    tag: '.tag span@html',
    author: '.byline a@html',
    timestamp: '.timestamp@datetime',
    excerpt: '.excerpt@html'
  }])(function (err, body) {
    return next(err, body);
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY3J1bmNoVGFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBSWdCLFNBQVMsR0FBVCxTQUFTOzs7O29CQUpILE9BQU87O0lBQWpCLElBQUk7O3dCQUVTLGNBQWM7O0FBRWhDLFNBQVMsU0FBUyxDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDcEMsTUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFRLEVBQUUsQ0FBQzs7QUFFdkIsR0FBQyxDQUFDLFVBTEssUUFBUSxHQUtGLEdBQUcsR0FBRyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztBQUN6QyxTQUFLLEVBQUUsb0JBQW9CO0FBQzNCLFFBQUksRUFBRSxvQkFBb0I7QUFDMUIsT0FBRyxFQUFFLGdCQUFnQjtBQUNyQixVQUFNLEVBQUUsZ0JBQWdCO0FBQ3hCLGFBQVMsRUFBRSxxQkFBcUI7QUFDaEMsV0FBTyxFQUFFLGVBQWU7R0FDekIsQ0FBQyxDQUFDLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ2pCLFdBQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN4QixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJjcnVuY2hUYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYcmF5IGZyb20gJ3gtcmF5JztcblxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICcuLi9jb25maWcuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3J1bmNoVGFnICh0YWcsIG5leHQpIHtcbiAgbGV0IHggPSBYcmF5LmRlZmF1bHQoKTtcblxuICB4KEJBU0VfVVJMICsgJy8nICsgdGFnLCAnbGkucml2ZXItYmxvY2snLCBbe1xuICAgIHRpdGxlOiAnLnBvc3QtdGl0bGUgYUBodG1sJyxcbiAgICBsaW5rOiAnLnBvc3QtdGl0bGUgYUBocmVmJyxcbiAgICB0YWc6ICcudGFnIHNwYW5AaHRtbCcsXG4gICAgYXV0aG9yOiAnLmJ5bGluZSBhQGh0bWwnLFxuICAgIHRpbWVzdGFtcDogJy50aW1lc3RhbXBAZGF0ZXRpbWUnLFxuICAgIGV4Y2VycHQ6ICcuZXhjZXJwdEBodG1sJ1xuICB9XSkoKGVyciwgYm9keSkgPT4ge1xuICAgIHJldHVybiBuZXh0KGVyciwgYm9keSk7XG4gIH0pO1xufSJdfQ==