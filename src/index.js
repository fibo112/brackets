module.exports = function check(str, bracketsConfig) {
    var bc = str.split('');

    for (var i = 0; i < bc.length; i++) {
      for (var j = 0; j < bracketsConfig.length; j++) {
        if ( bc[i] === bracketsConfig[j][0] && bc[i + 1] === bracketsConfig[j][1] ) {
          bc.splice (i, 2);
          i = -1;
          continue; 
        }
      }
    }
    if (bc.length === 0) {return true;}
    else {return false;}
}
