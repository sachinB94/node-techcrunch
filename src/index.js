import { crunchLink } from './lib/crunchLink';
import { crunchTag } from './lib/crunchTag';

class TechCrunch {

  crunchTag(tag = 'latest') {
    tag = tag === 'latest' ? '' : tag;
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

}

var tc = new TechCrunch();

export default tc;