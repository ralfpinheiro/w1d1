//Every "a" in the string should be replaced with a "4".
//Every "e" in the string should be replaced with a "3".
//Every "o" (oh) in the string should be replaced with a "0" (zero).
//Every "l" (el) in the string should be replaced with a "1" (one).

var myArgs = process.argv.slice(2);

function obfuscate(password) {
    var split = password.split('');
    for (var i = 0; i < split.length; i++) {

        switch(split[i]) {
          case 'a':
            split[i] = '4';
            break;
            case 'e':
            split[i] = '3';
            break;
            case 'o':
            split[i] = '0';
            break;
            case 'l':
            split[i] = '1';
            break;
        }

    }
    return split.join('');
}

console.log(obfuscate(myArgs[0]));
