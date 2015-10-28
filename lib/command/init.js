/**
 * @file sugar初始化模板
 * @author fengshangshi
 */
module.exports = function(argv) {
	var type = argv[3];
	switch (type) {
		// 服务器
		case 'server':
			require('./_server')();
			break;

		// 项目
		case 'app':
			require('./_app')();
			break;

		// 使用方法
		default:
			console.log('初始化');
			break;
	}
};
