export default class Judger {
  constructor(hash) {
    this.players = hash.players;
  }

  judge() {
    var jinros = this.players.filter( (player) => player.camp == 'jinro' );
    var shimins = this.players.filter( (player) => player.camp == 'shimin' );
    var yokos = this.players.filter( (player) => player.camp == 'yoko' );
    if(
      ( jinros.length == 2 && shimins.length <= 2 ) ||
      ( jinros.length == 1 && shimins.length <= 1 )
    ) {
      if(yokos.length >= 1)
        return 'yoko win';
      else
        return 'jinro win';
    }
    else if(
      jinros.length == 0
    ) {
      if(yokos.length >= 1)
        return 'yoko win';
      else
        return 'shimin win';
    }
    return false; // as Game continue.
  }
}