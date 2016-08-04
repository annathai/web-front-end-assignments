/**
 * Session 6 - assignment 4
 * checkBrackets('( ( a + b ) / 5 abd )');
 * checkBrackets(') ( a + b ) )');
 * checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 abc / ( a + 3 ) ) ) )');
 */

function checkBrackets(statement) {
    var openBrackets = [];
    var closeBrackets = [];
    for(var i = 0; i < statement.length; i++) {
        var char = statement.charAt(i);
        switch(char) {
            case '(':
                openBrackets.push(char);
                break;
            case ')':
                closeBrackets.push(char);
            default:
                break;
        }
    }
    if(openBrackets.length != closeBrackets.length) {
        console.log("incorrect");
    } else {
        console.log("correct");
    }

}

checkBrackets('( ( a + b ) / 5 abd )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 abc / ( a + 3 ) ) ) )');
