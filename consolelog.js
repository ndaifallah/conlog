


const RESET       ="\033[0m";
const WHITE       ="\033[0;49;37m";
const RED         ="\033[0;49;91m";
const GREEN       ="\033[0;49;92m";
const YELLOW      ="\033[0;49;93m";
const CYAN        ="\033[0;49;96m";
const MAGENTA     ="\033[0;49;95m";
const BLUE        ="\033[0;49;34m";
const DARK_BLUE   ="\033[0;49;94m";

/**
 * 
*/
function conlog(str, style){
  console.log(style + "" + str)
}


module.exports = {
  conlog,
  RESET,
  WHITE,
  YELLOW,
  GREEN,
  RED,
  CYAN,
  MAGENTA,
  BLUE,
  DARK_BLUE
}
