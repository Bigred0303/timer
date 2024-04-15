

const args = process.argv;
let result = args.filter((arg) => arg === Number);
result = args.filter((arg) => arg > 0);


let times = result.map(arg => arg * 1000);

if (times !== 0) {
  times.forEach((time) => {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time);
  });
}

