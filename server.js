
pack = require('./package.json')
seconds = 0

setInterval(function(){
  seconds++
  console.log(pack.version+' has been running for '+seconds+' seconds #winning')
}, 1000)