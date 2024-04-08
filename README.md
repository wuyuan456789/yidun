易盾滑块整套在这里了，除了例子外，其他的请自行研究
python主要模块 requests  execjs  loguru <br>
缺少什么安装什么就行了<br>
运行效果：<br>
![image](https://github.com/wuyuan456789/yidun/assets/166347308/3c60dce0-ca0f-4e59-8efb-f45a76bf5b6e)<br>
<br>
可能错误：<br>
execjs执行js报错;UnicodeEncodeError: ‘gbk‘<br>
异常 UnicodeEncodeError: ‘gbk’ codec can’t encode character ‘\ufffd’ in position 160: illegal multibyte sequence<br>
![image](https://github.com/wuyuan456789/yidun/assets/166347308/8b446b99-6a3c-4d50-bd9a-89aadbf2c41b)<br>
修改subprocess.py文件的 encoding=None<br>
![image](https://github.com/wuyuan456789/yidun/assets/166347308/9af3f163-3df3-4f64-80bf-f27a591ec82f)<br>
