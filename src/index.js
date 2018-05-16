import Judge from '../lib/factory/Judge.js';
import Jinro from '../lib/factory/Job/Jinro.js';
import Shimin from '../lib/factory/Job/Shimin.js';
import Model from '../lib/service/Model.js';

(function main(){
  Model.players.push( new Jinro() );
  Model.players.push( new Jinro() );
  Model.players.push( new Shimin() );
  Model.players.push( new Shimin() );
  Model.players.push( new Shimin() );
  Model.players.push( new Shimin() );
  new Judge();
})()