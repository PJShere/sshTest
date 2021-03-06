var Client = require('ssh2').Client;

module.exports = {
  sshConn: function(hostIP) {
    var conn = new Client();
    conn
      .on('ready', function() {
        console.log(hostIP + ': Client :: ready');
        conn.exec('uptime', function(err, stream) {
          if (err) throw err;
          stream
            .on('close', function(code, signal) {
              console.log(
								// 'Stream :: close :: code: ' + code + ', signal: ' + signal,
              );
              conn.end();
            })
            .on('data', function(data) {
							// console.log('STDOUT: ' + data);
							// console.log ('OK')
            })
            .stderr.on('data', function(data) {
              console.log('STDERR: ' + data);
            });
        });
      })
      .connect({
        host: hostIP, 
        port: 22,
        username: 'root',
				privateKey: require('fs').readFileSync('/Users/pankajshere/.ssh/sbits_rsa'),
      });
  },
};
