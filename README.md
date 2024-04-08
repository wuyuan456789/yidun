成功率 95% 以上，易盾滑块整套在这里了，除了例子外，其他的请自行研究 <br>
python主要模块 requests  execjs  loguru ddddocr <br>
缺少什么安装什么就行了<br>
运行效果：<br>

![image](https://github.com/wuyuan456789/yidun/assets/166347308/110adad1-62ff-4a6c-a1e2-e79a7a08990b) <br>

![image](https://github.com/wuyuan456789/yidun/assets/166347308/1435f317-b0db-43b7-8e91-1c51d6c33225) <br>


<br>
可能错误：<br>
execjs执行js报错;UnicodeEncodeError: ‘gbk‘ <br>
异常 UnicodeEncodeError: ‘gbk’ codec can’t encode character ‘\ufffd’ in position 160: illegal multibyte sequence <br>

![image](https://github.com/wuyuan456789/yidun/assets/166347308/0f0d6ca7-dff0-4104-b0cd-e08c4e09eb19)  <br>

修改subprocess.py文件的 encoding=None<br>

![image](https://github.com/wuyuan456789/yidun/assets/166347308/30a32d42-4c14-4724-8910-a5edd68e3ed6)  <br>

