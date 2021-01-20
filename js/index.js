//TASK ONE

let a = 3;
let b = 5;
let c;

let output = '';
output += 'let a = 3;';
output += '\n';
output += 'let b = 5;';
output += '\n';
output += 'let c;';
output += '\n';
output += '----------';
output += '\n';
output += 'a + b = ' + (a + b);
output += '\n';
output += 'a - b = ' + (a - b);
output += '\n';
output += 'a * b = ' + (a * b);
output += '\n';
output += 'a / b = ' + (a / b);
output += '\n';
output += 'a % b = ' + (a % b);
output += '\n';
output += '(a += b): ' + (a += b);
output += '\n';
output += '(a -= b): ' + (a -= b);
output += '\n';
output += '(a *= b): ' + (a *= b);
output += '\n';
output += '(a /= b): ' + (a /= b);
output += '\n';
output += '(a %= b): ' + (a %= b);
output += '\n';
output += '(a == b): ' + (a == b);
output += '\n';
output += '(a != b): ' + (a != b);
output += '\n';
output += '(a > b): ' + (a > b);
output += '\n';
output += '(a < b): ' + (a < b);
output += '\n';
output += '(!a && !c): ' + (!a && !c);
output += '\n';
output += '(!a || !c): ' + (!a || !c);

alert(output);

//TASK TWO

let first_name = 'Braeden';
let last_name = 'Halverson';
let email = 'bhalverson97@gmail.com';
let output2 = '';

output2 += `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

alert(output2)