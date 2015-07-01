import * as Xray from 'x-ray';

import { BASE_URL } from '../config.js';

export function crunchLink (link, next) {
  let x = Xray.default();

  x(link, {
    title: '.tweet-title@html',
    next: {
      title: '.next-title@html',
      link: '.next-link@href'
    },
    text: x('.article-entry.text', [ 'p@html' ])
  })((err, body) => {
    body.text = body.text.join(' ').replace(/<\/?[^>]+(>|$)/g, '');
    return next(err, body);
  });
}