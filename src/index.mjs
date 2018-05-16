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

(async function main(){

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

  var isWin;
  while( isWin = judger.judge() ) {
    var str = await new Promise(res => rl.once("line",res))
    console.log("getA:"+str);
    console.log(isWin);
  }
  // judger.judge();

  process.exit();
})();
