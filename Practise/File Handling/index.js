const fs = require("fs");

// fs.writeFileSync("test.txt", "Hello Moto ");
// fs.writeFile("./test.txt", "Hello Moto With Sync", (err) => {});

// const result = fs.readFileSync("./demo.txt", "utf-8");
// console.log(result);

fs.readFile("./demo.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error");
  } else {
    console.log(result);
  }
});
