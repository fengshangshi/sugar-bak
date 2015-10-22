/**
 * @file sugar版本信息
 * @author fengshangshi
 */
var fs = require('fs');
var path = require('path');

var pkg = '../../package.json';
module.exports = function() {
	var json = JSON.parse(fs.readFileSync(path.join(__dirname, pkg)));
	console.log(json['name'] + '/' + json['version']);
};
