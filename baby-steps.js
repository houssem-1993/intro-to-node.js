const numbers=process.argv.slice(2)

console.log(numbers.reduce((a,b)=>Number(a)+Number(b)))