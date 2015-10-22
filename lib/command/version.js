/**
 * @file sugar版本信息
 * @author fengshangshi
 */
var fs = require('fs');

var pkg = '../../package.json';
module.exports = function() {
	var json = JSON.parse(fs.readFileSync(path.join(__dirname, pkg)));
	console.log(json);
};
