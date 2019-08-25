const sshConn = require('./sshTest').sshConn;

const lineReader = require('line-reader');
const reComp = /(\[)([a-z]+)(\])/;
const reIP4 = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;

lineReader.eachLine('test.ini', function(line, last) {
  var compName = reComp.test(line) ? reComp.exec(line)[2] : '';
  var ipAddress = reIP4.test(line) ? reIP4.exec(line)[0] : '';
	console.log(compName);
	if (ipAddress) {
	sshConn(ipAddress) 
	}
});
