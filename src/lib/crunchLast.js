import * as Xray from 'x-ray';

import { BASE_URL } from '../config.js';

export function crunchLast (tc, next) {
  let x = Xray.default();

  tc.crunchLink(BASE_URL + '/latest')
    .then(function(news) {
      return next(null, news);
    })
    .catch(function(err) {
      return next(err, null);
    });
}