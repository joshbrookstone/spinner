const spinner = function(keys,time) {
  for (let i = 0; i < keys.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${keys[i]}     `);
    }, time[i]);
  }
};
let keys = ["\\", "|","/","-","\\","|","/","-","\\","|", "\n"];
let time = [100,300,500,700,900,1100,1300,1500,1700,1900,2100];
spinner(keys,time);
