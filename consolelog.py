#/Users/kenshinvag/anaconda/bin/python3


# created constants

RESET       ="\033[0m"
WHITE       ="\033[0;49;37m"
RED         ="\033[0;49;91m"
GREEN       ="\033[0;49;92m"
YELLOW      ="\033[0;49;93m"
CYAN        ="\033[0;49;96m"
MAGENTA     ="\033[0;49;95m"
BLUE        ="\033[0;49;34m"
DARK_BLUE   ="\033[0;49;94m"


def conlog(string, style):
    print(style + "" + string + "" + RESET)


