-----------------------
RegExp					|
-----------------------
	# 正则表达式
	# 创建
		var re = new RegExp("\\w+");
		var re = /\w+/;
		
		* 当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）。
	
	# 实例方法
		exec();
			* 检测指定的字符串,返回符合正则的子串
		
		test();
			* 检测指定的字符串是否有一个或者多个符合正则表达,返回 true/false
		
	