export default class Judger {
  constructor(hash) {
    this.players = hash.players;
  }

  judge() {
    var jinros = this.players.filter( (player) => player.role == 'Jinro' );
    var shimins = this.players.filter( (player) => player.role == 'Shimin' );
    if(
      ( jinros.length == 2 && shimins.length <= 2 ) ||
      ( jinros.length == 1 && shimins.length <= 1 )
    ){
      console.log('Jinro win');
    }
    else {
      console.log('except for Jinro win');
    }
    return true;
  }
}