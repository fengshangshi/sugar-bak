/**
 * @file sugar初始化模板
 * @author fengshangshi
 */

module.exports = function(argv) {
	console.log(process.cwd());
	var type = argv[3];
	switch (type) {
		// 服务器
		case 'server':
			require('./_server')(argv);
			break;

		case 'app':
			require('./_app')(argv);
			break;

		default:
			console.log('初始化');
			break;
	}
};
