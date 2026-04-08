let L = parseInt(prompt("Enter the number L:"));
let R = parseInt(prompt("Enter the number R:"));
let K = parseInt(prompt("Enter the number K:"));
let count = 0;

for (let x = L; x < R; x++) {
    if (x % K === 0) {
        let strX = x.toString();
        if (strX.includes('0')) continue;

        let sum = 0;
        for (let char of strX) {
            sum += parseInt(char);
        }
        let isPrime = sum > 1;
        for (let i = 2; i <= Math.sqrt(sum); i++) {
            if (sum % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) count++;
    }
}
alert(count);