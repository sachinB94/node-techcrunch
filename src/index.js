import { crunchTag } from './lib/crunchTag';
import { crunchLink } from './lib/crunchLink';
import { crunchLast } from './lib/crunchLast';

class TechCrunch {

  crunchTag(tag = 'latest') {
    tag = tag === 'latest' ? '' : tag;
    console.log('tag', tag);
    return new Promise((resolve, reject) => {
      crunchTag(tag, (err, body) => {
        if (!err) return resolve(body);
        else return reject(err);
      });
    });
  }

  crunchLink(link) {
    return new Promise((resolve, reject) => {
      crunchLink(link, (err, body) => {
        if (!err) return resolve(body);
        else return reject(err);
      });
    });
  }

  crunchLast() {
    return new Promise((resolve, reject) => {
      crunchLast(this, (err, body) => {
        if (!err) return resolve(body);
        else return reject(err);
      });
    });
  }

}

var tc = new TechCrunch();

export default tc;