let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));
let foundX = -1;

for (let X = 0; X <= 10000; X++) {
    let num = N + X;
    let strNum = num.toString();
    let revNum = strNum.split('').reverse().join('');
    
    if (strNum === revNum && num % K === 0) {
        foundX = X;
        break;
    }
}
alert(foundX);