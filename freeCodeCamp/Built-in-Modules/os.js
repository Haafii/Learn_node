const os = require('os')

const user = os.userInfo() //info about current user
console.log(user);

console.log(`The System Uptime is ${os.uptime()} seconds`) // method returns the system uptime in seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)