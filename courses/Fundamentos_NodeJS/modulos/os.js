const os = require("os");

// console.log(os.arch());
// console.log(os.platform());

// console.table(os.cpus());


// console.log(os.constants);

// const SIZE = 1024;
// const kb = bytes => bytes / SIZE;
// const mb = bytes => kb(bytes) / SIZE;
// const gb = bytes => mb(bytes) / SIZE;

// console.log(mb(os.freemem()));
// console.log(gb(os.totalmem()));

// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(os.hostname());

console.table(os.networkInterfaces());