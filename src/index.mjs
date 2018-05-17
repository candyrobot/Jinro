/*
INFO:
- 標準入力
  - 参考: https://qiita.com/yosgspec/items/6a1e18890510f49fef12
- nodeでcjsを使う: https://qiita.com/euxn23/items/c75c0ba08709ab446faf
*/
import readline from 'readline';
const rl = readline.createInterface(process.stdin,process.stdout);

import Judger from '../lib/factory/Judger';
import Jinro from '../lib/factory/Job/Jinro';
import Shimin from '../lib/factory/Job/Shimin';
import Yoko from '../lib/factory/Job/Yoko';
import Akadsukin from '../lib/factory/Job/Akadsukin';

(async function main(){

  var judger = new Judger({
    players: [
      new Yoko(),
      new Jinro(),
      new Jinro(),
      new Shimin(),
      new Akadsukin(),
      new Shimin(),
    ]
  });

  var gameResult;
  while( !(gameResult = judger.judge()) ) {
    console.log('shokei🌟Index:');
    var i = await new Promise(res => rl.once("line",res));
    judger.players.splice(i, 1);
    console.log("players:"+judger.players);

    if( gameResult = judger.judge() ) break;

    console.log('shugeki🌟Index:');
    var i = await new Promise(res => rl.once("line",res));
    judger.players.filter( (player) => player.camp != 'jinro' ).splice(i, 1);
    console.log("players:"+judger.players);
  }
  console.log(gameResult);

  process.exit();
})();
