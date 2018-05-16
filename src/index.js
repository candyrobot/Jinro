import Judger from '../lib/factory/Judger.js';
import Jinro from '../lib/factory/Job/Jinro.js';
import Shimin from '../lib/factory/Job/Shimin.js';

(function main(){
  var judger = new Judger({
    players: [
      new Jinro(),
      new Jinro(),
      new Shimin(),
      new Shimin(),
      new Shimin(),
      new Shimin(),
    ]
  });
  judger.judge();
})()