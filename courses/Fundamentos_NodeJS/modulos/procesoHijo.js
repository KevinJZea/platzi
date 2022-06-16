const { exec, spawn } = require("child_process");

console.log("Entró 1");

// exec("ls -la", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);

proceso.stdout.on("data", data => {
  console.log(data.toString())
});

console.log("Entró 2");

// console.log(proceso.stdout);

proceso.on("exit", () => {
  console.log("El proceso terminó")
});
