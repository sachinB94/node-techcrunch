'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.crunchLink = crunchLink;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _xRay = require('x-ray');

var Xray = _interopRequireWildcard(_xRay);

var _configJs = require('../config.js');

function crunchLink(link, next) {
  var x = Xray['default']();

  x(link, {
    title: '.tweet-title@html',
    next: {
      title: '.next-title@html',
      link: '.next-link@href'
    },
    text: x('.article-entry.text', ['p@html'])
  })(function (err, body) {
    body.text = body.text.join(' ').replace(/<\/?[^>]+(>|$)/g, '');
    return next(err, body);
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY3J1bmNoTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUlnQixVQUFVLEdBQVYsVUFBVTs7OztvQkFKSixPQUFPOztJQUFqQixJQUFJOzt3QkFFUyxjQUFjOztBQUVoQyxTQUFTLFVBQVUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3RDLE1BQUksQ0FBQyxHQUFHLElBQUksV0FBUSxFQUFFLENBQUM7O0FBRXZCLEdBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDTixTQUFLLEVBQUUsbUJBQW1CO0FBQzFCLFFBQUksRUFBRTtBQUNKLFdBQUssRUFBRSxrQkFBa0I7QUFDekIsVUFBSSxFQUFFLGlCQUFpQjtLQUN4QjtBQUNELFFBQUksRUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBRSxRQUFRLENBQUUsQ0FBQztHQUM3QyxDQUFDLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELFdBQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN4QixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJjcnVuY2hMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWHJheSBmcm9tICd4LXJheSc7XG5cbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSAnLi4vY29uZmlnLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNydW5jaExpbmsgKGxpbmssIG5leHQpIHtcbiAgbGV0IHggPSBYcmF5LmRlZmF1bHQoKTtcblxuICB4KGxpbmssIHtcbiAgICB0aXRsZTogJy50d2VldC10aXRsZUBodG1sJyxcbiAgICBuZXh0OiB7XG4gICAgICB0aXRsZTogJy5uZXh0LXRpdGxlQGh0bWwnLFxuICAgICAgbGluazogJy5uZXh0LWxpbmtAaHJlZidcbiAgICB9LFxuICAgIHRleHQ6IHgoJy5hcnRpY2xlLWVudHJ5LnRleHQnLCBbICdwQGh0bWwnIF0pXG4gIH0pKChlcnIsIGJvZHkpID0+IHtcbiAgICBib2R5LnRleHQgPSBib2R5LnRleHQuam9pbignICcpLnJlcGxhY2UoLzxcXC8/W14+XSsoPnwkKS9nLCAnJyk7XG4gICAgcmV0dXJuIG5leHQoZXJyLCBib2R5KTtcbiAgfSk7XG59Il19