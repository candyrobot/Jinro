export default class Judger {
  constructor(hash) {
    this.players = hash.players;
  }

  judge() {
    var jinros = this.players.filter( (player) => player.job == 'Jinro' );
    var shimins = this.players.filter( (player) => player.job == 'Shimin' );
    var yokos = this.players.filter( (player) => player.job == 'Yoko' );
    if(
      ( jinros.length == 2 && shimins.length <= 2 ) ||
      ( jinros.length == 1 && shimins.length <= 1 )
    ) {
      if(yokos.length >= 1)
        return 'Yoko win';
      else
        return 'Jinro win';
    }
    else if(
      jinros.length == 0
    ) {
      if(yokos.length >= 1)
        return 'Yoko win';
      else
        return 'Shimin win';
    }
    return false; // as Game continue.
  }
}