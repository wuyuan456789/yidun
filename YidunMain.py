import json
import os
import random
import re
import string
import time

import requests
import execjs
from loguru import logger

DIR_PATH = os.path.dirname(os.path.abspath(__file__))


class Dun163:
    def __init__(self, id_, *, referer, fp_h, ua):
        self.fp = None
        self.resp_json2 = None
        self.domain = 'https://c.dun.163.com'
        self.request_params = {
            'id': id_,
            'referer': referer,
            'fp_h': fp_h,
            'ua': ua
        }
        self.ss = self.set_session()
        self.ctx = self.compile_js_code('dun163.js')

    def compile_js_code(self, file):
        """读取js代码"""
        with open(os.path.join(DIR_PATH, file), 'r', encoding='utf-8') as f:
            js_code = f.read()
        return execjs.compile(js_code)

    def set_session(self):
        """设置session"""
        session = requests.Session()
        session.headers = {
            "Accept": "*/*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Referer": self.request_params['referer'],
            "User-Agent": self.request_params['ua'],
            'Host': 'c.dun.163.com',
        }
        return session

    @staticmethod
    def get_jsonp(text):
        """jsonp数据解析"""
        jsonp_str = re.search(r"\((.*)\)", text, re.S).group(1)
        return json.loads(jsonp_str)

    @staticmethod
    def random_jsonp_str():
        """得到随机callback字符串 __JSONP_15ouv64_0"""
        s = string.ascii_lowercase + string.digits
        text = ''.join(random.choices(s, k=7))
        return "__JSONP_" + text + '_'

    @staticmethod
    def random_vm_str():
        """得到随机cb字符串 __wmjsonp_781648d"""
        s = string.ascii_lowercase + string.digits
        text = ''.join(random.choices(s, k=7))
        return "__wmjsonp_" + text

    @staticmethod
    def download_img(file_name, *, url):
        """下载验证码图片"""
        resp = requests.get(url, headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"})
        pic_dir = os.path.join(DIR_PATH, 'pic')
        if not os.path.exists(pic_dir):
            os.mkdir(pic_dir)
        path = os.path.join(pic_dir, file_name)
        with open(path, mode="wb") as f:
            f.write(resp.content)
        return path

    @staticmethod
    def get_slide_distance(fg_name, bg_name):
        """获取滑块距离"""
        import ddddocr
        det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
        with open(os.path.join(DIR_PATH, 'pic', fg_name), 'rb') as f:
            target_bytes = f.read()
        with open(os.path.join(DIR_PATH, 'pic', bg_name), 'rb') as f:
            background_bytes = f.read()

        res = det.slide_match(target_bytes, background_bytes)

        # print(res)
        return res['target'][0]

    @staticmethod
    def get_track(distance):
        """生成轨迹"""
        # 73.5px   22.8125   300 x 160  6.5
        base_track = [
            [4, 0, 94], [6, 0, 102], [9, 0, 111], [13, 0, 118], [18, 0, 126], [22, 0, 134], [28, 0, 140], [32, 0, 148],
            [35, 0, 156], [40, 0, 164], [42, 1, 172], [45, 2, 180], [46, 2, 189], [47, 3, 196], [49, 4, 204],
            [50, 4, 212], [51, 4, 220], [52, 4, 237], [53, 4, 244], [54, 4, 252], [55, 4, 260], [57, 4, 268],
            [58, 4, 276], [60, 4, 294], [62, 4, 373], [62, 4, 380], [63, 4, 388], [65, 4, 396], [66, 4, 405],
            [67, 4, 412], [68, 4, 421], [70, 4, 428], [73, 5, 437], [74, 5, 444], [75, 6, 452], [78, 6, 460],
            [80, 7, 468], [82, 8, 477], [84, 8, 485], [86, 8, 492], [90, 8, 501], [94, 8, 509], [95, 8, 518],
            [98, 8, 525], [102, 9, 533], [105, 10, 541], [106, 10, 588], [107, 10, 604], [109, 10, 612], [110, 10, 620],
            [110, 10, 628], [113, 11, 636], [115, 11, 644], [116, 11, 653], [118, 11, 660], [118, 11, 668],
            [120, 11, 676], [122, 11, 684], [122, 11, 692], [123, 11, 700], [124, 12, 764], [125, 12, 772],
            [126, 12, 788], [128, 12, 804], [129, 12, 812], [130, 12, 1190], [130, 12, 1252], [131, 12, 1268],
            [132, 12, 1340], [134, 12, 1710]
        ]
        random_y = random.randint(-3, 5)
        radio = distance / (base_track[-1][0] - base_track[0][0])
        new_track = []
        for x, y, t in base_track:
            y = y + random_y if y else 0
            point = [round(x * radio), y, round(t * radio)]
            new_track.append(point)
        return new_track

    def request_getconf(self):
        """1.获取dt值
            {
            "dt": "kF8pA4OgU7dBV0AUUALR4vE2+QIQTx9Z",
            "ac": {
                "enable": 1,
                "bid": "0b46352afd8742fa934f87745fbf7f36",
                "pn": "YD00306804870812",
                "token": "9ca17ae2e6fecda16ae2e6eeb5cb528ab69db8ea65bcaeaf9ad05b9c94a3a3c434898987d2b25ef4b2a983bb2af0feacc3b92ae2f4ee95a132e29aa3b1cd72abae8cd1d44eb0b7bb82f55bb08fa3afd437fffeb3"
            },
            "imageServer": [ "necaptcha.nosdn.127.net", "necaptcha1.nosdn.127.net" ],
            "zoneId": "CN31",
            "resources": [ "/2.24.0/core-optimi.v2.24.0.min.js" ],
            "apiServer": [ "c.dun.163.com", "c.dun.163yun.com" ],
            "theme": "light",
            "audio": false,
            "customStyles": false,
            "smart": false,
            "staticServers": [ "cstaticdun.126.net", "cstaticdun1.126.net" ]
        }
        """
        url = self.domain + '/api/v2/getconf'
        params = {
            "referer": self.request_params['referer'],
            "zoneId": "",
            "id": self.request_params['id'],
            "ipv6": "false",
            "runEnv": "10",
            "iv": "3",
            # "type": "2",
            "loadVersion": "2.23.0",
            "callback": self.random_jsonp_str() + '0'
        }
        response = self.ss.get(url, params=params)
        resp_json = self.get_jsonp(response.text)['data']
        logger.info(f'api/v2/getconf 返回：{resp_json}')
        return resp_json

    # def request_d(self):
    #     """2.获取actoken加密参数, d值生成
    #       [
    #         200,
    #         1708192512503,
    #         "pm/JyFrYfDVEBEVFVBLAs8qES3YO1652",
    #         "dFMbAQ4Ucu5AAFUEUFLQ4s7VSzNPg74y",
    #         null,
    #         "bG9UT76JE+vsMqTsW7PsQrUUPE9jZDPZwv+z7yHOPeMeBl+Na1lMoDxmD2OpHmnPHqWmsTMpLPzIComRvlgln42Nl3ztIBpK0EkblNW7YuDoK3erI/l0oCQFRI4oXDo2b3E="
    #     ]
    #     """
    #     url = 'https://ac.dun.163yun.com' + '/v3/d'
    #     # headers = {
    #     #     "Content-type": "application/x-www-form-urlencoded",
    #     #     "Origin": "https://dun.163.com",
    #     # }
    #     # https://cstaticdun.126.net/load.min.js
    #     # https://cstaticdun.126.net/wm.3.0.0_33d41777.min.js?v=28470626
    #     # d = "FkM9d.FfMPh8TmkhkFCnzbAzOuVX1vk49ZOrlAT2w3E1JecNKi1Q4rBt1IAmnmzF48Wis3M5R933bT6OiwsXSu+6p3sGg0syUPLC6yn1eZtUGqV/SSUJVVal/DOoFqU/7yycPkdYSXiiHjfMQHkB1frMII5D16d2gXr2VgY.7M/y6uXRlLKKihIRbPkPyRFeoOF7bbA03Fmq3dzFIj6Fjqnm18QZaqGcAc5rcIjy8ufUGFlXNI7bP2wpIPyreVLQXcPoL2vFM24ON8LZzm5Ycrc4Z1LN/sXpzFQdoZs1TamYd1K.j4KWCA/YGf7UNme18dibgc6TFyblL292BfMnmd7Hl7by7.rrJaM9ukZXjyK+g.1DSH1.ja39+ZwoghVG/EYuJg0tXotjaqajduEOsX6plH.8Zv3cyPAA2KibftBsigAgRUMR4ca49jv3H9SwZS3DvDiYFBSgrzlyFWfdwNosjNmW/ppaBqSH0b/.kq7ztu0WYLJL8iHWdRUtbOVBkdLI0Dw2W6iTJ2wlKG/YF2lMtl0laTuYyj.5Mas96QfTw3jQWfbDLC7EqCZchvoCX287EpSHkjzq0r1cCUYURoROrOwXohE/5tzNqDfkVOS3zwz0Rr2Vd.CT6JVoFoR4J8pJkHMDdl38wmRp+JkVi.SGsl/CffNIkhG53M0.vFbgAY.IcC09.auZPElRcGNwQv2PfsMH17S5vPbF60kfhw5GpcvQqkimsc5k0Uy8SGmpOBDTfbCy/ufSsA+ZLnHH1UPoJ6Aj0fwwffKLAEteIa9i57SfjmpQ/bFTXrfA/DFukQXm9pCOEpRTp9ctWPL2PRgMWIyvpbl4Dzr/kpXL+rzAQ8Mq3zu57evwY1Hi/bK3MDv0H.7MjvbfqawYvvWCf4+tI2cg0mannvb2wY/bsfGPuNMRjM3cKBGABnHfE7Z/DXWT"
    #     d = 'undefined'
    #     data = {
    #         "d": d,
    #         "v": "33d41777",  # 应该是固定值 buildVersion
    #         "cb": "__wmjsonp_3355665"
    #     }
    #     resp_text = self.ss.post(url, data=data).text
    #     logger.info(f'v3/d 返回: {resp_text}')
    #     resp_list = self.get_jsonp(resp_text)
    #     return resp_list

    def request_get(self, dt, bid, ac_token):
        """3.获取图片链接  fp 和 ac_token 和 cb 参数生成
          {
            "bg": [
                "https://necaptcha.nosdn.127.net/fcef9fa2cc2347809794022270a23be2.jpg",
                "https://necaptcha1.nosdn.127.net/fcef9fa2cc2347809794022270a23be2.jpg"
            ],
            "front": [
                "https://necaptcha.nosdn.127.net/f8f21645760b4d0e94e62072413b4716.png",
                "https://necaptcha1.nosdn.127.net/f8f21645760b4d0e94e62072413b4716.png"
            ],
            "token": "72b1db9d3acc47ad8c7b881c39dcc51b",
            "type": 2,
            "zoneId": "CN31"
          }
        """
        url = self.domain + '/api/v3/get'
        fp = self.ctx.call('get_fp', self.request_params['fp_h'], self.request_params['ua'])
        cb = self.ctx.call('get_cb')
        # logger.info(f'{fp=}  {cb=}')
        self.fp = fp
        params = {
            "referer": self.request_params['referer'],
            "zoneId": "CN31",
            "dt": dt,
            "acToken": ac_token,
            "id": bid,
            "fp": fp,
            "https": "true",
            "type": "undefined",
            "version": "2.23.0",
            "dpr": "1.25",
            "dev": "1",
            "cb": cb,
            "ipv6": "false",
            "runEnv": "10",
            "group": "",
            "scene": "",
            "lang": "zh-CN",
            "sdkVersion": "undefined",
            "iv": "3",
            "width": "320",
            "audio": "false",
            "sizeType": "10",
            "smsVersion": "v3",
            "token": "",
            "callback": self.random_jsonp_str() + '0'
        }
        resp_text = self.ss.get(url, params=params).text
        logger.info(f'api/v3/get 返回：{resp_text}')
        resp_json = self.get_jsonp(resp_text)['data']
        return resp_json

    def request_check(self, dt, bid, *, token, track, distance):
        """4.请求验证  param_data 和 cb 参数生成
        {
          "error": 0, "msg": "ok"
          "data": {
            "result": false,  # 是否成功
            "zoneId": "CN31",
            "token": "ba2d3d7242df4361beaeac32fff4be14",
            "validate": ""
           },
        }
        """
        url = self.domain + '/api/v3/check'

        check_data = self.ctx.call('get_check_data', track, distance, token)
        cb = self.ctx.call('get_cb')
        # logger.info(f'{cb=}  {check_data=}')
        params = {
            "referer": self.request_params['referer'],
            "zoneId": "CN31",
            "dt": dt,
            "id": bid,
            "token": token,
            "acToken": "undefined",
            "data": check_data,
            "width": "320",
            "type": "2",
            "version": "2.23.0",
            "cb": cb,
            "extraData": "",
            "bf": "0",
            "runEnv": "10",
            "sdkVersion": "undefined",
            "iv": "3",
            "callback": self.random_jsonp_str() + '1'
        }
        resp_text = self.ss.get(url, params=params).text
        # logger.info(f'api/v3/check 返回：{resp_text}')
        resp_json = self.get_jsonp(resp_text)['data']

        return resp_json

    def run(self):
        # 1.获取dt值
        get_conf_data = self.request_getconf()
        dt = get_conf_data['dt']
        ac_token = get_conf_data['ac']['token']
        bid = get_conf_data['ac']['bid']  # 不变 "07e2387ab53a4d6f930b8d9a9be71bdf"
        assert bid == self.request_params['id'], f'id不一致：{bid=}  {self.request_params["id"]}'

        self.ss.headers['Referer'] = 'https://app.miit-eidc.org.cn/'
        # 2. 获取actoken加密参数
        # d_list = self.request_d()

        # 3.1 获取图片链接
        get_data = self.request_get(dt, bid, ac_token)

        # 3.2 下载图片
        self.download_img('bg.png', url=get_data['bg'][0])
        self.download_img('front.png', url=get_data['front'][0])

        # 3.3 识别滑块距离
        distance = int(self.get_slide_distance('front.png', bg_name='bg.png') - 1.5)
        logger.info(f'{distance=}')

        # 3.4 生成轨迹
        track = self.get_track(distance + 7)
        time.sleep(4)

        # 4. 请求校验
        resp_json = self.request_check(dt, bid, token=get_data['token'], track=track, distance=distance)
        self.resp_json2 = resp_json

        # 解码 validate
        validate = self.ctx.call('do_onVerify', resp_json['validate'], self.fp)

        if resp_json.get('result'):
            logger.success(f'验证成功：{resp_json}')
            logger.success(f'解码validate：{validate}')
            return True
        else:
            logger.warning(f'验证失败：{resp_json}', )
            return False


if __name__ == '__main__':
    # # 滑动拼图验证码_拼图验证_图形验证_在线体验_网易易盾
    ID_ = '17c07e34e0384612bb239568b6b37643'
    REFERER = "https://id.163.com/mail/retrievepassword"
    FP_H = "app.miit-eidc.org.cn"
    UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"

    d = Dun163(id_=ID_, referer=REFERER, fp_h=FP_H, ua=UA)
    count = 100
    succ_count = 0
    for i in range(count):
        if d.run():
            succ_count += 1
    logger.info(f'成功率(次数{count})：{round(succ_count / count * 100)}% ')

