const args = process.argv.slice(2); //making arrays of passed numbers.
let sum = 0;
if (args.length === 0) {
  return "";
}
//only adding numerical value
let sortedArgs = args.filter(function (item) { return (typeof item === "number") });
//make array ascending..
sortedArgs = args.map((ar) => Number(ar));
sortedArgs = sortedArgs.filter(function (number) { return number > 0; });//taking only positive numbers.
sortedArgs = sortedArgs.sort(function (a, b) { return a - b });//sorted in ascending
console.log(sortedArgs);
for (let i = 0; i < sortedArgs.length; i++) {
  //console.log(args[i]);
  sum = sortedArgs[i] * 1000;
  setTimeout(() => { // printing "." instead of sound, sound not supported in computer
    process.stdout.write(".");
  }, sortedArgs[i] * 1000);
}
//// fixing the new line at the end.
setTimeout(() => {
  process.stdout.write('\n');
}, sum);