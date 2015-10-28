/**
 * @file sugar命令入口
 * @author fengshangshi
 */
module.exports = function(argv) {
	// 分组命令
	var type = argv[2];
	switch (type) {
		// 初始化
		case 'init':
			require('./command/init')(argv);
			break;

		// 服务器
		case 'server':
			console.log('服务器相关');
			break;

		// 发布
		case 'release':
			console.log('发布相关');
			break;

		// sugar版本
		case '-v':
		case 'version':
			require('./command/version')();
			break;

		// 帮助信息
		case '-h':
		case 'help':
		default:
			console.log('帮助');
			break;


	}
};
