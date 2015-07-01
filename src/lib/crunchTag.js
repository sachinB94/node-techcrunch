import * as Xray from 'x-ray';

import { BASE_URL } from '../config.js';

export function crunchTag (tag, next) {
  let x = Xray.default();

  x(BASE_URL + '/' + tag, 'li.river-block', [{
    title: '.post-title a@html',
    link: '.post-title a@href',
    tag: '.tag span@html',
    author: '.byline a@html',
    timestamp: '.timestamp@datetime',
    excerpt: '.excerpt@html'
  }])((err, body) => {
    return next(err, body);
  });
}