/**
 * @file 初始化server环境
 * @descript 从github加载服务器环境模板
 * @author fengshangshi
 */
var fs = require('fs-extra');
var Scaffold = require('sugar-template-scaffold');
var configs = require('../../config/scaffold');

module.exports = function() {
	var config = configs.framework['config'];
	var id = config['repos'],
		type = config['type'];

	var template = id.split('/')[1];

	var scaffold = new Scaffold({type: type});

	console.log('开始下载服务器模板');
	scaffold.download(
		// repos
		id,

		// 回调函数
		function(err, src) {
			if (err) {
				console.log('下载服务器模板失败: ' + err);
				return false;
			}

			console.log('开始初始化服务器环境...');
			
			var target = process.cwd();
			src += ('/' + template + '-master');
			fs.copy(src, target, function(err) {
				if (err) {
					console.log('初始化服务器环境失败:' + err);
					return false;
				}

				console.log('目录复制成功，开始安装必要的模块...');

				// 安装必要模板
				var exec = require('child_process').exec,
					command = 'npm install';

				var e = exec(command, function(err, stdout, stderr) {
					if (err) {
						console.log('安装服务器模块失败，请手动输入命令npm install完成');
						console.log(err);
					} else {
						console.log('安装模块成功, 服务器初始化成功');
					}
				});

				// 打印子进程返回的信息
				e.stdout.on('data', function(chunk) {
					console.log(chunk);
				});
			});
		},

		// 回调函数-复制进度function(progress, loaded, total)
		function(progress, loaded, total) {
			if (total <= 0)  return false;
			progress = (progress * 100).toFixed(2);
			process.stdout.clearLine();
			process.stdout.write('模板已经加载: ' + progress + '%');
			process.stdout.cursorTo(0);
			if (loaded === total) {
				console.log('');
			}
		}
	);
};
