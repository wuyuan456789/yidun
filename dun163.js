//
// Math.random = function () {
//     return 0.6
// }
// Date.prototype.getTime = function (){
//     return 1708362026333 - 900000
// }
// // ----------------------------
window = global;

// ---------------------------------------------
const m = [
    36, 28, 51, 9, 23, 7, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049,
    -9, 9, 10, -10, -11, 11, 2563907772, -12, 12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, -18, 18, 19, -19, 20, -20, 21, -21, -22, 22, -23, 23, 24, -24, 25, -25, -26, 26, 27, -27, 28, -28, 29,
    -29, 30, -30, 31, -31, 33, -33, -32, 32, -34, -35, 34, 35, 37, -37, 36, -36, 38, 39, -39, -38, 40, 41, -41, -40, 42, -43, -42, 43, 45, -45, -44, 44, 47, -46, -47, 46, 48, -49, -48,
    49, -50, 51, -51, 50, 570562233, 53, -52, 52, -53, -54, -55, 55, 54, 503444072, 57, -56, -57, 56, 59, 58, -59, -58, 60, 61, -61, -60, 62, 63, -63, -62, -64, 711928724, -66, 67, -65, 65, -67, 66, 64, -71, -69, 69, 68,
    70, -68, -70, 71, -72, 3686517206, -74, -73, 73, 75, 74, -75, 72, -79, 76, 79, 78, -78, -76, 77, -77, 3554079995, -81, 81, -82, -83, 80, -80, 82, 83, -84, 84, 85, -86, -87, 86, -85, 87, 90, -88, -89, -90, 88, 89, 91, -91,
    94, 92, 95, -94, 93, -93, -95, -92, -98, 97, 98, -97, -99, 96, 99, -96, -100, 3272380065, 102, -102, -101, -103, 103, 100, 101, -107, -104, 105, 104, 106, -106, -105, 107, 109, -109, -108, -111, 110, -110, 111, 108, 251722036,
    115, -115, 112, -114, -112, 113, 114, -113, -117, 119, -116, -119, 117, -118, 118, 116, 123, -120, 122, -121, 120, -122, -123, 121, 125, 127, 3412177804, -127, 126, -126, 124, -125, -124, -128, 128, -129, 1843258603, 3803740692,
    984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 2097651377, 376229701, 853044451, 752459403, 426522225, 1000,
    3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1231636301, 10000, 83908371, 1090812512,
    2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776,
    2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203,
    3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626,
    1068828381, 2768942443, 2909243462, 936918000, 3183342108, 27492, 141376813, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612,
    2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, 0.4, 2238001368,
    2512341634, 2647816111, -0.2, 314042704, 1510334235, 900000, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -0.26, 1202900863,
    498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, 0.732134444, 3705015759, 3569037538, 1994146192,
    1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285,
    3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -0.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040,
    783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948,
    2567524794, 2439277719, 1088359270, 671266974, 1219638859, 840000, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324,
    -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465
];
const K = [
    "",
    "GrayText",
    "parent",
    "幼圆",
    "plugins",
    "AdobeExManDetect",
    "0010",
    "Google Earth Plugin",
    "Veetle TV Core",
    "0007",
    "0004",
    "0002",
    "0003",
    "0000",
    "0001",
    "Unity Player",
    "Skype Web Plugin",
    "WebKit-integrierte PDF",
    "gdxidpyhxdE",
    "Bell MT",
    "0008",
    "getSupportedExtensions",
    "0009",
    "SafeSearch",
    "setTime",
    "appendChild",
    "\"",
    "$",
    "Univers",
    "%",
    "&",
    "'",
    "1110",
    "get plugin string exception",
    "ThreeDShadow",
    "+",
    ",",
    "-",
    "Arab",
    "苹果丽细宋",
    ".",
    "FUZEShare",
    "/",
    "0",
    "1",
    "2",
    "3",
    "4",
    "仿宋_GB2312",
    "5",
    "6",
    "InactiveCaptionText",
    "7",
    "WEBZEN Browser Extension",
    "8",
    "9",
    "DivX Browser Plug-In",
    ":",
    ";",
    "Uplay PC",
    "=",
    "canvas exception",
    "A",
    "B",
    "C",
    "D",
    "E",
    "微软雅黑",
    "F",
    "Harrington",
    "G",
    "H",
    "I",
    "J",
    "Gnome Shell Integration",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "Niagara Solid",
    "T",
    "SefClient Plugin",
    "U",
    "V",
    "1111",
    "W",
    "X",
    "Y",
    "Z",
    "Goudy Old Style",
    "\\",
    "Roblox Launcher Plugin",
    "Microsoft Office 2013",
    "QQMusic",
    "a",
    "Eurostile",
    "b",
    "rmocx.RealPlayer G2 Control.1",
    "c",
    "Scripting.Dictionary",
    "d",
    "仿宋",
    "e",
    "f",
    "g",
    "h",
    "Ma-Config.com plugin",
    "i",
    "1010",
    "Casual",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "1008",
    "doNotTrack",
    "q",
    "ct",
    "丽宋 Pro",
    "r",
    "setTimeout",
    "Gisha",
    "getTimezoneOffset",
    "s",
    "1005",
    "1004",
    "t",
    "1003",
    "u",
    "v",
    "1001",
    "w",
    "x",
    "drawArrays",
    "y",
    "z",
    "{",
    "}",
    "~",
    "font",
    "1009",
    "suffixes",
    "=null; path=/; expires=",
    "Shell.UIHelper",
    "toDataURL",
    "WindowText",
    "language",
    "丽黑 Pro",
    "do",
    "HighlightText",
    "div",
    "MenuText",
    "AOL Media Playback Plugin",
    "Citrix online plug-in",
    "ec",
    "Desdemona",
    "InactiveBorder",
    "RealPlayer",
    ", 'code':",
    "HELLO",
    "npTongbuAddin",
    "em",
    "createElement",
    "phantom",
    "MS PMincho",
    "楷体",
    "eval",
    "ex",
    "DivX VOD Helper Plug-in",
    "新细明体",
    "QuickTimeCheckObject.QuickTimeCheck.1",
    "FlyOrDie Games Plugin",
    "attachShader",
    "PlayOn Plug-in",
    "getTime",
    "1.01",
    "Broadway",
    "fp",
    "Alawar NPAPI utils",
    "Forte",
    "hashCode",
    "方正姚体",
    "ESN Sonar API",
    "HPDetect",
    "Bitdefender QuickScan",
    "IE Tab plugin",
    "ButtonFace",
    "',",
    "cpuClass",
    "message",
    "Century Gothic",
    "Online Storage plug-in",
    "Safer Update",
    "Msxml2.DOMDocument",
    "Engravers MT",
    "Silverlight Plug-In",
    "Google Gears 0.5.33.0",
    "Citrix ICA Client",
    "alphabetic",
    "context",
    "VDownloader",
    "华文楷体",
    "attrVertex",
    "宋体",
    "cookie",
    "%22",
    "%26",
    "Centaur",
    "4game",
    "Rockwell",
    "LogMeIn Plugin 1.0.0.961",
    "Octoshape Streaming Services",
    "toGMTString",
    "th=/",
    "SumatraPDF Browser Plugin",
    "PDF.PdfCtrl",
    "fillStyle",
    "fontSize",
    "Adobe Ming Std",
    "je",
    "TorchHelper",
    "Franklin Gothic Heavy",
    "华文仿宋",
    "Harmony Plug-In",
    "Gigi",
    "v1.1",
    "Kino MT",
    "SimHei",
    "AliSSOLogin plugin",
    "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
    "Yandex PDF Viewer",
    "Citrix Receiver Plug-in",
    "top",
    "mai",
    "AcroPDF.PDF",
    "canvas api exception",
    "InactiveCaption",
    "Menu",
    "precision mediump float; varying vec2 varyinTexCoordinate; void main() {   gl_FragColor = vec4(varyinTexCoordinate, 0, 1); }",
    "QQ2013 Firefox Plugin",
    "Google Update",
    "华文彩云",
    "eMusicPlugin DLM6",
    "Web Components",
    "Babylon ToolBar",
    "Coowon Update",
    "InfoText",
    "rmocx.RealPlayer G2 Control",
    "iMesh plugin",
    "RealDownloader Plugin",
    "Symantec PKI Client",
    "_phantom",
    "GDL Object Web Plug-in 16.00",
    "webgl",
    "华文宋体",
    "screen",
    "body",
    "TRIANGLE_STRIP",
    "TlwgMono",
    "n=",
    "LogMeIn Plugin 1.0.0.935",
    "':'",
    "function",
    "context.hashCode",
    "ArchiCAD",
    "VERTEX_SHADER",
    "Ubuntu",
    "Facebook Plugin",
    "ActiveCaption",
    "细明体",
    "Malgun Gothic",
    "News Gothic MT",
    "CaptionText",
    "aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA",
    "DejaVu LGC Sans Mono",
    "Copperplate Gothic Light",
    "Segoe Print",
    "Sawasdee",
    "Bauhaus 93",
    "Chalkduster",
    "Abadi MT Condensed Light",
    "Lucida Bright",
    "Wide Latin",
    "font detect error",
    "Kozuka Gothic Pr6N",
    "Html5 location provider",
    "DivX Plus Web Player",
    "Vladimir Script",
    "File Downloader Plug-in",
    "ob",
    "Adodb.Stream",
    "Menlo",
    "callPhantom",
    "Wolfram Mathematica",
    "CatalinaGroup Update",
    "Eras Bold ITC",
    "DevalVRXCtrl.DevalVRXCtrl.1",
    "华文细黑",
    "addBehavior",
    "pa",
    "Bitstream Vera Serif",
    "(function(){return 123;})();",
    "pi",
    "Tencent FTN plug-in",
    "removeChild",
    "Folx 3 Browser Plugin",
    "useProgram",
    "hostname",
    "phantom.injectJs",
    "ShockwaveFlash.ShockwaveFlash",
    "height",
    "rgba(102, 204, 0, 0.7)",
    "AdblockPlugin",
    "Background",
    "AgControl.AgControl",
    "PhotoCenterPlugin1.1.2.2",
    "GungSeo",
    "s=",
    "decodeURI",
    "方正舒体",
    "华文新魏",
    "123",
    "webgl exception",
    "re",
    "WMPlayer.OCX",
    "72px",
    "AppWorkspace",
    "Highlight",
    "document",
    "Yandex Media Plugin",
    "ESN Launch Mozilla Plugin",
    "70px 'Arial'",
    "injectJs",
    "Loma",
    "BitCometAgent",
    "Calibri",
    "Bookman Old Style",
    "sessionStorage",
    "Utopia",
    "compileShader",
    "escape",
    "Scrollbar",
    "Window",
    "隶书",
    "Kaspersky Password Manager",
    "MingLiU-ExtB",
    "get system colors exception",
    "Skype.Detection",
    "FileLab plugin",
    "npAPI Plugin",
    "not_exist_host",
    "2d",
    "ActiveXObject",
    "Dotum",
    "PDF-XChange Viewer",
    "offsetHeight",
    "PMingLiU",
    "colorDepth",
    "Nokia Suite Enabler Plugin",
    "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
    "Magneto",
    "AdobeExManCCDetect",
    "Gabriola",
    "Playbill",
    "navigator",
    "Rachana",
    "Tw Cen MT Condensed Extra Bold",
    "QQMiniDL Plugin",
    "#f60",
    "fillRect",
    "Default Browser Helper",
    "=null; path=/; domain=",
    "French Script MT",
    "标楷体",
    "encodeURI",
    "Umpush",
    "icp",
    "华文琥珀",
    "createProgram",
    "monospace",
    "ButtonShadow",
    "Bodoni MT",
    "STATIC_DRAW",
    "黑体",
    "downloadUpdater",
    "Aliedit Plug-In",
    "PDF integrado do WebKit",
    "uniformOffset",
    "encodeURIComponent",
    "Picasa",
    "Adobe Fangsong Std",
    "bindBuffer",
    "AVG SiteSafety plugin",
    "Orbit Downloader",
    "color",
    "hidden",
    "localStorage",
    "Google Talk Effects Plugin",
    "description",
    "indexedDB",
    "Lucida Fax",
    "AmazonMP3DownloaderPlugin",
    "createBuffer",
    "Castellar",
    "linkProgram",
    "Californian FB",
    "ThreeDHighlight",
    "createShader",
    "Gulim",
    "NyxLauncher",
    "YouTube Plug-in",
    "楷体_GB2312",
    "SWCtl.SWCtl",
    "Google Earth Plug-in",
    "QQDownload Plugin",
    "Norton Identity Safe",
    "parseInt",
    "Simple Pass",
    "Colonna MT",
    "zako",
    "getUniformLocation",
    "shaderSource",
    "Downloaders plugin",
    "location",
    "Heroes & Generals live",
    "window",
    "Showcard Gothic",
    "微软正黑体",
    "华文行楷",
    "Ginger",
    "RockMelt Update",
    "WindowFrame",
    "enableVertexAttribArray",
    "KacstOne",
    "attribute vec2 attrVertex; varying vec2 varyinTexCoordinate; uniform vec2 uniformOffset; void main() {   varyinTexCoordinate = attrVertex + uniformOffset;   gl_Position = vec4(attrVertex, 0, 1); }",
    "Perpetua",
    "openDatabase",
    "canvas",
    "iGetterScriptablePlugin",
    "Informal Roman",
    "Nitro PDF Plug-In",
    "Msxml2.XMLHTTP",
    "华文黑体",
    "NPLastPass",
    "ThreeDFace",
    "style",
    "LastPass",
    "::",
    "parseFloat",
    "华文隶书",
    "; ",
    "getAttribLocation",
    "{'name':",
    "Nyala",
    "not_exist_hostname",
    "\\'",
    "GFACE Plugin",
    "undefined",
    "新宋体",
    "\\.",
    "Matura MT Script Capitals",
    "Arial Black",
    "FangSong",
    "mwC nkbafjord phsgly exvt zqiu, ὠ tphst/:/uhbgtic.mo/levva",
    "Braggadocio",
    "Harmony Firefox Plugin",
    "Palace Script MT",
    "Native Client",
    "offsetWidth"
];
const X = [
    0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274,
    2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666,
    4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042,
    2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
    1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451,
    1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731,
    3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275,
    3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059,
    2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444,
    476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704,
    2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092,
    3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856,
    1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450,
    3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804,
    225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526,
    2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637,
    3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
    2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842,
    628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954,
    1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498,
    2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603,
    3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115,
    1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795,
    376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035,
    2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108,
    3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456,
    1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
];
const wX = [
    -9, -84, -50, 59, 115, 102, 57, 125, 94, -15, 15, 2, -72, -98, -79, 38, -56, -49, 76, -26, -117, 60, 90, 9, -107, -12, -71,
    -100, 63, 42, -18, 28, -120, -11, 33, 45, 79, 92, 37, 97, 4, 58, 98, 84, -97, -88, 95, -104, -13, -89, 78, -90, 119, -66, 13,
    -5, 29, -116, -4, -81, 27, 40, -59, -43, 85, 48, -74, 109, -64, 26, 67, -33, -115, 0, -37, -102, 88,
    -48, 127, -86, 41, 105, -2, 122, -42, 112, -94, 81, -31, -65, -101, -14, 65, 49, -67, -114, -103, -87, -19, 104, 66, -73, -34, -78,
    -45, -27, -109, -108, 47, 61, 86, 43, -54, 25, 64, -35, -44, 53, -112, 36, 73, 89, -82, 51, -32, 39, -83, 80, -85, -111, 12, -58, 103,
    -76, -46, -127, 34, 1, -99, 14, -57, 110, 106, 93, -52, 11, 113, 20, -106, 75, 62,
    -69, -39, -55, -119, 126, 114, 123, 10, 77, -121, -8, 74, 21, -93, 17, -61, -21, -105, -126, 18, 124, -17, 52, -10, -77, -24, -22, 120,
    -95, -25, 96, -110, 22, -23, 69, -125, -128, -47, -38, -1, 3, -20, 100, 68, 101, 5, 117, -122, 44, -51, -36, -41, 24, -80, 30, 82, -63,
    -40, -92, 91, -6, -53, -124, -62, -28, 111, 19, 50, 108, 70, -68, -29, -75, 99,
    -91, -60, -70, 71, -118, -3, 83, 87, -7, 32, 55, 31, -123, 121, 107, -113, 46, -30, 118, 54, 23, 116, -16, 7, 6, 35, 16, -96, 56, 72, 8
]

// -------------------------------------
function getUuid(y, K) {
    // 62位数组
    var T = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var m = [];
    var A = undefined;

    if (K = K || T.length, y) {
        for (A = 0; A < y; A++) m[A] = T[0 | Math.random() * K];
    } else {
        var O = undefined;
        m[8] = m[13] = m[18] = m[23] = "-", m[14] = "4"; //  m[ 14 ] = "4"
        for (A = 0; A < 36; A++) {
            m[A] || (O = 0 | 16 * Math.random(), m[A] = T[19 === A ? 3 & O | 8 : O]);
        }
    }

    return m.join("");
}

function F(N) {
    return N < -128 ? F(256 + N) : N > 127 ? F(N - 256) : N;
}

function A(N) {
    N = "" + N;

    for (var X = [], J = 0, Z = 0, B = N.length / 2; J < B; J++) {
        var E = parseInt(N.charAt(Z++), 16) << 4;
        var P = parseInt(N.charAt(Z++), 16);
        X[J] = F(E + P);
    }

    return X;
}

function wK_O(N) {
    N = encodeURIComponent(N);

    for (var X = [], J = 0, Z = N.length; J < Z; J++) {
        if ("%" === N.charAt(J)) {
            if (J + 2 < Z) {
                X.push(A("" + N.charAt(++J) + N.charAt(++J))[0]);
            }
        } else {
            X.push(F(N.charCodeAt(J)));
        }
    }

    return X;
}

function Z() {
    for (var wq = [], wH = 0; wH < 4; wH++) {
        wq[wH] = F(Math.floor(256 * Math.random()));
    }

    return wq;
}

function M(N) {
    return R(N, 0);  // R未补充
}

function q(wq) {
    var wH = [];
    if (!wq.length) {
        return M(64);  // M未补充完
    }
    if (wq.length >= 64) {
        return wq.splice(0, 64);
    }

    for (var wp = 0; wp < 64; wp++) {
        wH[wp] = wq[wp % wq.length];
    }

    return wH;
}

function func_K(N, X) {
    return F(F(N) ^ F(X));
}

function T() {
    var N = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    var X = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    var J = [], Z = X.length;
    for (var B = 0, E = N.length; B < E; B++) {
        J[B] = func_K(N[B], X[B % Z]);
    }
    return J;
}

function kk(N, X) {
    return F(N + X);
}

function W() {
    var N = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    var X = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    var J = [], Z = X.length;
    for (var B = 0, E = N.length; B < E; B++) {
        J[B] = kk(N[B], X[B % Z]);
    }

    return J;
}

function w7() {
    var wq = wK_O('fd6a43ae25f74398b61c03c83be37449'); // WI
    var wH = Z();
    var wq = q(wq);
    wq = T(wq, q(wH));
    wq = q(wq);
    return [wq, wH];
}

function _wC(wH, wp) {
    if (Array.isArray(wH)) {
        return wH;
    }
    if (Symbol.iterator in Object(wH)) {
        return wq(wH, wp);  // 未补充
    }
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _m(N) {
    var X = [];
    X[0] = F(N >>> 24 & 255), X[1] = F(N >>> 16 & 255), X[2] = F(N >>> 8 & 255);
    X[3] = F(255 & N);
    return X;
}

function Y(N) {
    var X = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    return "" + X[N >>> 4 & 15] + X[15 & N];
}

function I(N) {
    return N.map(function (X) {
        return Y(X);
    }).join("");
}

function _qN(N) {
    return I(_m(N));
}

function j_wR(N) {
    for (var J = 4294967295, Z = 0, B = N.length; Z < B; Z++) {
        J = J >>> 8 ^ X[255 & (J ^ N[Z])];
    }

    return _qN(4294967295 ^ J);
}

function _K(wq) {
    if (Array.isArray(wq)) {
        for (var wH = 0, wp = Array(wq.length); wH < wq.length; wH++) {
            wp[wH] = wq[wH];
        }
        return wp;
    }
    return Array.from(wq);
}

function wz_H(N, X, J, Z, B) {
    for (var E = 0, P = N.length; E < B; E++) if (X + E < P) {
        J[Z + E] = N[X + E];
    }

    return J;
}

function H(wq) {
    if (!wq.length) {
        return M(64);
    }
    var wH = [];
    var wp = wq.length;
    var wo;

    if (wp % 64 <= 60) {
        wo = 64 - wp % 64 - 4;
    } else {
        wo = 128 - wp % 64 - 4;
    }

    wz_H(wq, 0, wH, 0, wp);

    for (var wn = 0; wn < wo; wn++) {
        wH[wp + wn] = 0;
    }
    wz_H(_m(wp), 0, wH, wp + wo, 4);
    return wH;
}

function func_X(wq) {
    if (wq.length % 64 !== 0) {
        return [];
    }
    for (var wH = [], wp = wq.length / 64, wo = 0, wn = 0; wo < wp; wo++) {
        wH[wo] = [];
        for (var wM = 0; wM < 64; wM++) {
            wH[wo][wM] = wq[wn++];
        }
    }
    return wH;
}

function wW(N, X) {
    return F(N + X);
}


function w5(wq) {
    var wH;
    if (arguments.length > 1 && void 0 !== arguments[1]) {
        wH = arguments[1];
    } else {
        wH = 0;
    }
    return wH + 256 >= 0 ? wq : [];
}

function G(wq, wH) {
    if (!wq.length) return [];
    wH = F(wH); // ?

    for (var wp = [], wo = 0, wn = wq.length; wo < wn; wo++) {
        wp.push(wu(wq[wo], wH)); // ?
    }
    return wp;
}

function w0(wq, wH) {
    if (!wq.length) return [];
    wH = F(wH);

    for (var wp = [], wo = 0, wn = wq.length; wo < wn; wo++) {
        wp.push(func_K(wq[wo], wH++));
    }

    return wp;
}

function w1(wq, wH) {
    if (!wq.length) return [];
    wH = F(wH);

    for (var wp = [], wo = 0, wn = wq.length; wo < wn; wo++) {
        wp.push(func_K(wq[wo], wH--));
    }

    return wp;
}

function w2(wq, wH) {
    if (!wq.length) return [];
    wH = F(wH);

    for (var wp = [], wo = 0, wn = wq.length; wo < wn; wo++) {
        wp.push(wW(wq[wo], wH));  // ?
    }

    return wp;
}

function w3(wq, wH) {
    if (!wq.length) return [];
    wH = F(wH);

    for (var wp = [], wo = 0, wn = wq.length; wo < wn; wo++) {
        wp.push(wW(wq[wo], wH++));
    }

    return wp;
}

function w4(wq, wH) {
    if (!wq.length) return [];
    wH = F(wH);

    for (var wp = [], wo = 0, wn = wq.length; wo < wn; wo++) {
        wp.push(wW(wq[wo], wH--));
    }

    return wp;
}

function V_ws(N) {
    N = "" + N;
    var X = parseInt(N.charAt(0), 16) << 4;
    var J = parseInt(N.charAt(1), 16);
    return F(X + J);
}

function w6(wq) {
    var wH = [w5, G, w2, w0, w3, w1, w4];
    var wp = '037606da0296055c';
    for (var wo = 0, wn = wp.length; wo < wn;) {
        var wM = wp.substring(wo, wo + 4);
        var wg = V_ws(wM.substring(0, 2));
        var wj = V_ws(wM.substring(2, 4));
        wq = wH[wg](wq, wj);
        wo += 4;
    }

    return wq;
}


function J(wq) {
    var _wH = function (wM) {
        var wV = 'a7be3f3933fa8c5fcf86c4b6908b569ba1e26c1a6d7cfbf60ae4b00e074a194dac4b73e7f898541159a39d08183b76eedee3ed341e6685d2357440158394b1ff03a9004cbbb5ca7dcb7f41489a16e03dcc9c71eb3c9796685b1d01b4d56193a6e1f1a2470445c191ae49c5d82765dc82c350f263387a24a502fcbf442e2dddaad0e936d9ea22b89275307b42518fbc3a626ba806d4ecd6d725f50cc8c72fefa4551ccd6fc9b2b7ab954f815c7264c6e51f4eaf99885a79892b1b60a0b3526e57ba5d178d370958847eb9fd28f9ce0bc023f4148a2adfe632126769057043d3bd8eda0df7872629f3809ef05310e83113216afe202c460fc23e789f77d1addb5e'
        var wg = A(wV);
        return wg[16 * (wM >>> 4 & 15) + (15 & wM)];
    };

    if (!wq.length) {
        return [];
    }

    for (var wp = [], wo = 0, wn = wq.length; wo < wn; wo++) {
        wp[wo] = _wH(wq[wo]);
    }

    return wp;
}

function A_wL(q, H, M) {
    var __BASE64_PADDING__ = "7";
    var j;

    if (void 0 !== H && null !== H) {
        j = H;
    } else {
        j = "MB.CfHUzEeJpsuGkgNwhqiSaI4Fd9L6jYKZAxn1/Vml0c5rbXRP+8tD3QTO2vWyo";
    }

    var N;

    if (void 0 !== M && null !== M) {
        N = M;
    } else {
        N = __BASE64_PADDING__; // __BASE64_PADDING__
    }

    return k_A(q, j.split(""), N);
}

function F_ka(q, H, M) {
    var j = void 0;
    var N = void 0;
    var X = void 0;
    var J = [];

    switch (q.length) {
        case 1:
            j = q[0];
            N = X = 0;
            J.push(H[j >>> 2 & 63], H[(j << 4 & 48) + (N >>> 4 & 15)], M, M);
            break;

        case 2:
            j = q[0];
            N = q[1];
            X = 0;
            J.push(H[j >>> 2 & 63], H[(j << 4 & 48) + (N >>> 4 & 15)], H[(N << 2 & 60) + (X >>> 6 & 3)], M);
            break;

        case 3:
            j = q[0];
            N = q[1];
            X = q[2];
            J.push(H[j >>> 2 & 63], H[(j << 4 & 48) + (N >>> 4 & 15)], H[(N << 2 & 60) + (X >>> 6 & 3)], H[63 & X]);
            break;

        default:
            return "";
    }

    return J.join("");
}

function k_A(q, H, M) {
    if (!q || 0 === q.length) return "";

    try {
        for (var j = 0, N = []; j < q.length;) {
            if (!(j + 3 <= q.length)) {
                var X = q.slice(j);
                N.push(F_ka(X, H, M));
                break;
            }

            var J = q.slice(j, j + 3);
            N.push(F_ka(J, H, M));
            j += 3;
        }

        return N.join("");
    } catch (Z) {
        console.log('function k_A error: ', Z);
        return "";
    }
}

function encryUuid(uuid) {
    var wH = wK_O(uuid),
        wp = w7(),
        wo = _wC(wp, 2),
        wn = wo[0],
        wM = wo[1],
        wg = wK_O(j_wR(wH)),
        wj = H([].concat(_K(wH), _K(wg))),
        wN = func_X(wj),
        we = [].concat(_K(wM)),
        wX = wn;

    for (var wJ = 0, wZ = wN.length; wJ < wZ; wJ++) {
        var wh = T(w6(wN[wJ]), wn);
        var wB = W(wh, wX);
        wh = T(wB, wX);
        wX = J(J(wh));
        wz_H(wX, 0, we, 64 * wJ + 4, 64);
    }

    return A_wL(we);
}

function wm(wb) {
    var wc = 'aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA';
    for (var wD = [], wv = 0; wv < wb; wv++) {
        var C0 = Math.random() * 62;
        C0 = Math.floor(C0);
        wD.push(wc.charAt(C0));
    }
    return wD.join('');
}

function R(s) {
    return typeof s;
}

function fp_wk(wb, wD) {
    if (wb <= 0) return [0];

    for (var wv = [], C0 = 0; C0 < wb; C0++) wv.push(wD);

    return wv;
}

function wF(wb, wD) {
    // var T5 = C;
    if (wb < 0 || wb >= m[34]) throw Error(K[32]);

    wD = fp_wk(wD, K[43]);
    wb = '' + wb;

    for (var wv = 0, C0 = 0; wv < wD.length && C0 < wb.length; C0++) {
        if (wb.charAt(C0) != K[40]) {
            wD[wv++] = wb.charAt(C0);
        }
    }

    return parseInt(wD.join(''));
}

function wl(wb, wD, wv, C0) {
    // var T6 = C;
    if (wb = '' + wb, wb.length > wv) throw Error(K[89]);
    if (wb.length == wv) return wb;

    var C1 = [];
    wD || C1["push"](wb);

    for (var C2 = wb["length"]; C2 < wv; C2++) {
        C1["push"](C0);
    }

    return wD && C1["push"](wb), C1.join('');
}

function fp_ws(wb) {
    // var T4 = C;
    var wg = wj = 2;
    var wD;
    var wv = m[79];
    var C0 = wb.length & 3;
    var C1 = wb['length'] - C0;
    var C2 = wv;
    wv = m[12];
    var C3 = m[365];

    for (wD = 0; wD < C1;) {
        var C4 = wb['charCodeAt'](wD) & 255 | (wb.charCodeAt(++wD) & 255) << 8 | (wb['charCodeAt'](++wD) & 255) << 16 | (wb['charCodeAt'](++wD) & 255) << m[65];
        ++wD;
        C4 = (C4 & m[475]) * wv + (((C4 >>> 16) * wv & m[475]) << 16) & 4294967295;
        C4 = C4 << 15 | C4 >>> m[51];
        C4 = (C4 & m[475]) * C3 + (((C4 >>> 16) * C3 & m[475]) << 16) & 4294967295;
        C2 ^= C4;
        C2 = C2 << m[41] | C2 >>> m[55];
        C2 = (C2 & m[475]) * m[17] + (((C2 >>> 16) * m[17] & m[475]) << 16) & 4294967295;
        C2 = (C2 & m[475]) + m[384] + (((C2 >>> 16) + m[425] & m[475]) << 16);
    }

    switch (C4 = 0, C0) {
        case 3:
            C4 ^= (wb['charCodeAt'](wD + 2) & 255) << 16;

        case 2:
            C4 ^= (wb.charCodeAt(wD + 1) & 255) << 8;

        case 1:
            C4 ^= wb['charCodeAt'](wD) & 255;
            C4 = (C4 & m[475]) * wv + (((C4 >>> 16) * wv & m[475]) << 16) & 4294967295;
            C4 = C4 << 15 | C4 >>> m[51];
            C4 = (C4 & m[475]) * C3 + (((C4 >>> 16) * C3 & m[475]) << 16) & 4294967295;
            C2 ^= C4;
    }

    C2 ^= wb['length'];
    C2 ^= C2 >>> 16;
    C2 = (C2 & m[475]) * m[396] + (((C2 >>> 16) * m[396] & m[475]) << 16) & 4294967295;
    C2 ^= C2 >>> m[41];
    C2 = (C2 & m[475]) * m[339] + (((C2 >>> 16) * m[339] & m[475]) << 16) & 4294967295;
    C2 ^= C2 >>> 16;
    wb = C2 >>> 0;
    C0 = [];
    C0['push'](wb);

    // try {
    for (var C5, C6 = wb + '', C7 = 0, C8 = 0, C9 = 0; C9 < C6['length']; C9++) {
        // try {
        var Cw = parseInt(C6['charAt'](C9) + '');
        Cw || Cw === 0 ? C7 = C7 + Cw : C7 = C7 + 1;
        C8++;
        // } catch (Ci) {
        //     console.log(Ci);
        //     C7 += 1;
        //     C8++;
        // }
    }

    C8 == 0 ? C8 = 1 : C8 = C8;
    C5 = wF(C7 * 1 / C8, 2);
    var CC,
        CQ = Math['floor'](C5 / Math['pow'](m[34], wg - 1)),
        Cz = wb + '',
        CR = 0,
        Cs = 0,
        CF = 0,
        Cl = 0;
    for (var Ck = 0; Ck < Cz.length; Ck++) {
        // try {
        var CW = parseInt(Cz.charAt(Ck) + '');

        if (CW || CW === 0) {
            if (CW < CQ) {
                Cs++;
                CR += CW;
            } else {
                Cl++;
                CF += CW;
            }
        } else {
            Cl++;
            CF += CQ;
        }
    }
    // catch
    //     (Cy)
    //     {
    //         console.log(Cy);
    //         Cl++;
    //         CF += CQ;
    //     }
    // }

    Cl == 0 ? Cl = 1 : Cl = Cl;
    Cs == 0 ? Cs = 1 : Cs = Cs;
    CC = wF(CF * 1 / Cl - CR * 1 / Cs, wj);
    C0.push(wl(C5, !0, wg, K[43]));
    C0.push(wl(CC, !0, wj, K[43]));
    // } catch (CK) {
    //     console.log(CK);
    //     C0 = [];
    //     C0['push'](wb);
    //     C0['push'](wk(wg, K[37])['join'](''));
    //     C0['push'](wk(wj, K[37])['join'](''));
    // }
    var result = C0.join('');
    return result;
}

function wR(wb) {
    // var T2 = C;

    function wD() {
        var font = "Agency FB;Arial Black;Bauhaus 93;Bell MT;Bodoni MT;Bookman Old Style;Broadway;Calibri;Californian FB;Castellar;Centaur;Century Gothic;Colonna MT;Copperplate Gothic Light;Engravers MT;FangSong;Forte;Franklin Gothic Heavy;French Script MT;Gabriola;Gigi;Goudy Old Style;Haettenschweiler;Harrington;Impact;Informal Roman;Lucida Bright;Lucida Fax;Magneto;Malgun Gothic;Matura MT Script Capitals;MingLiU-ExtB;MS Reference Sans Serif;Niagara Solid;Palace Script MT;Papyrus;Perpetua;Playbill;Rockwell;Segoe Print;Showcard Gothic;SimHei;Snap ITC;Vladimir Script;Wide Latin;仿宋;华文中宋;华文仿宋;华文宋体;华文彩云;华文新魏;华文楷体;华文琥珀;华文细黑;华文行楷;华文隶书;宋体;幼圆;微软雅黑;新宋体;方正姚体;方正舒体;楷体;隶书;黑体"
        return font;
    }

    function wv() {
        var KP = C;

        function CR(Cy) {
            var CK = {};
            return Ci[K[453]][T[20]] = Cy, CW[K[25]](Ci), CK['height'] = Ci[K[363]], CK['width'] = Ci[K[476]], CW[K[312]](Ci), CK;
        }

        var Cs = [K[387], T[34], T[78]];
        var CF = [];
        var Cl = T[32];
        var Ck = K[333];
        var CW = wn['body'];
        var Ci = wn['createElement'](T[14]);

        for (Ci[K[453]][K[225]] = Ck, Ci[K[453]][KP(1552)] = K[403], Ci[T[15]] = Cl, Cl = 0; Cl < Cs[KP(1023)]; Cl++) CF[Cl] = CR(Cs[Cl]);

        return function (Cy) {
            var Kc = KP;

            for (var CK = 0; CK < CF[Kc(1023)]; CK++) {
                var CT = CR(Cy + K[36] + Cs[CK]);
                var Cu = CF[CK];
                if (CT['height'] !== Cu['height'] || CT['width'] !== Cu['width']) return !0;
            }

            return !1;
        };
    }

    function C0() {
        // var Kf = C;
        // var CR = null;
        // var Cs = null;
        // var CF = [];
        //
        // try {
        //     Cs = wn['createElement']('canvas');
        //     CR = Cs['getContext'](K[261]) || Cs['getContext'](T[2]);
        // } catch (Cl) {
        //     console.log(Cl);
        // }
        //
        // if (!CR) return CF;
        //
        // try {
        //     CF[Kf(795)](CR[K[21]]());
        // } catch (Ck) {
        //     console.log(Ck);
        // }
        //
        // try {
        //     CF[Kf(795)](C1(CR, Cs));
        // } catch (CW) {
        //     console.log(CW);
        // }
        //
        // return CF.join(K[58]);
        return 'ANGLE_instanced_arrays,EXT_blend_minmax,EXT_color_buffer_half_float,EXT_depth_clamp,EXT_disjoint_timer_query,EXT_float_blend,EXT_frag_depth,EXT_shader_texture_lod,EXT_texture_compression_bptc,EXT_texture_compression_rgtc,EXT_texture_filter_anisotropic,EXT_sRGB,KHR_parallel_shader_compile,OES_element_index_uint,OES_fbo_render_mipmap,OES_standard_derivatives,OES_texture_float,OES_texture_float_linear,OES_texture_half_float,OES_texture_half_float_linear,OES_vertex_array_object,WEBGL_color_buffer_float,WEBGL_compressed_texture_s3tc,WEBGL_compressed_texture_s3tc_srgb,WEBGL_debug_renderer_info,WEBGL_debug_shaders,WEBGL_depth_texture,WEBGL_draw_buffers,WEBGL_lose_context,WEBGL_multi_draw,WEBGL_polygon_mode;10927936604362'
    }

    function C1(CR, Cs) {
        var KS = C;

        try {
            var CF = K[442];
            var Cl = K[246];
            var Ck = CR[K[410]]();
            CR[K[399]](CR[T[3]], Ck);
            CR[KS(683)](CR[T[3]], new Float32Array([m[421], m[477], 0, m[417], m[442], 0, 0, m[457], 0]), CR[K[390]]);
            Ck.s = 3;
            Ck.u = 3;
            var CW = CR[K[386]]();
            var Ci = CR[K[415]](CR[K[273]]);
            CR[K[429]](Ci, CF);
            CR[K[347]](Ci);
            var Cy = CR[K[415]](CR[T[43]]);
            return CR[K[429]](Cy, Cl), CR[K[347]](Cy), CR[K[180]](CW, Ci), CR[K[180]](CW, Cy), CR[K[412]](CW), CR[K[314]](CW), CW.A = CR[K[459]](CW, K[210]), CW.w = CR[K[428]](CW, K[395]), CR[K[440]](CW.B), CR[T[61]](CW.A, Ck.s, CR[KS(1759)], !1, 0, 0), CR[T[80]](CW.w, 1, 1), CR[K[141]](CR[K[265]], 0, Ck.u), ws(Cs[K[152]]());
        } catch (CK) {
            console.log(CK);
            return K[330];
        }
    }

    function C2() {
        // var Ka = C;
        // var CR = wn['createElement']('div');
        // var Cs = [];
        // var CF = [
        //     "ActiveBorder", "ActiveCaption", "AppWorkspace", "Background", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "CaptionText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "Window", "WindowFrame", "WindowText"
        // ];
        // if (!window[T[48]]) return Cs[Ka(1528)]('');
        //
        // for (var Cl = 0; Cl < CF[Ka(1023)]; Cl++) try {
        //     wn['body'][K[25]](CR);
        //     CR["style"].color = CF[Cl];
        //     Cs["push"](CF[Cl]);
        //     Cs["push"](window["getComputedStyle"](CR).getPropertyValue(K[402]));
        //     wn['body']["removeChild"](CR);
        // } catch (Ck) {
        //     console.log(Ck);
        //     Cs["push"]("get system colors exception");
        // }
        //
        // return Cs[Ka(1528)](K[57]);
        return "ActiveBorder:rgb(0, 0, 0):ActiveCaption:rgb(0, 0, 0):AppWorkspace:rgb(255, 255, 255):Background:rgb(255, 255, 255):ButtonFace:rgb(240, 240, 240):ButtonHighlight:rgb(240, 240, 240):ButtonShadow:rgb(240, 240, 240):ButtonText:rgb(0, 0, 0):CaptionText:rgb(0, 0, 0):GrayText:rgb(109, 109, 109):Highlight:rgb(0, 120, 215):HighlightText:rgb(255, 255, 255):InactiveBorder:rgb(0, 0, 0):InactiveCaption:rgb(255, 255, 255):InactiveCaptionText:rgb(128, 128, 128):InfoBackground:rgb(255, 255, 255):InfoText:rgb(0, 0, 0):Menu:rgb(255, 255, 255):MenuText:rgb(0, 0, 0):Scrollbar:rgb(255, 255, 255):ThreeDDarkShadow:rgb(0, 0, 0):ThreeDFace:rgb(240, 240, 240):ThreeDHighlight:rgb(0, 0, 0):ThreeDLightShadow:rgb(0, 0, 0):ThreeDShadow:rgb(0, 0, 0):Window:rgb(255, 255, 255):WindowFrame:rgb(0, 0, 0):WindowText:rgb(0, 0, 0)"
    }

    function getcanvasToDataURL() { // C3
        // var CR = wn['createElement']('canvas');
        // var Cs = CR['getContext']('2d');
        // var CF = "mwC nkbafjord phsgly exvt zqiu, ὠ tphst/:/uhbgtic.mo/levva";
        // Cs.textBaseline = 'top';
        // Cs.font = "70px 'Arial'";
        // Cs['textBaseline'] = 'alphabetic';
        // Cs['fillStyle'] = '#f60';
        // Cs['fillRect']([125, 1, 62, 20]);
        // Cs['fillStyle'] = '#069';
        // Cs.fillText(CF, 2, 15);
        // Cs['fillStyle'] = K[319];
        // Cs.fillText(CF, 4, 17);
        // return CR['toDataURL']();

        return Math.random().toString(36)
        // var canvasToDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAAF/9JREFUeF7tnHt4lNWdx7/vXJPJdZJMEu7hFi7hlpBLsV3a2j66tX9st4/afdpd66okSIutblvF9nFpd7XYWnelFWaiKG23u93aFhShiCB4KURuIqiRcgsYkhBCQgK5z8zZnjeZMMnMJCcR3IN8z/P4PD7k+575vZ/feb9zzu+cdwzEaovKb4QhNk+atA+5Uyv6VE5Ha31mVtU+wxo4FYjDg2vy0Bizj4F/+KdfJSCu43fOuIs3FRevR4LrfJ8iI+ODNxMSms5C4Je+IvxeuU8pvByx3vl0GqyBzfn5m4qyMk/0fbzd3nE+K+v4mxar/3/KC/FLlPq+DmCty9WMoqLnER93AXZHR2NW1vHdVovfL4Dfm7pQK/MudDpatxQXP+/su19DiIyM6t2uhKYDJsOV3nQIYxuAcXNmb8Xo0YfNq5OSGw6nuWuOAOiGBU/6CiA1sduSJ7Pht20rLHxhZkb6B/10Dmd7Q6bn+G6rLeD1zceGYfEdiXj5chtOj/bCEHd6PFXIy9uB9vYknD2bg9raXLR3JN4C3+Lh5XkkcchrSn33AHginK38Z5er+aTHc/KQEKgsL8L3RtR9mXcuhLF11KgjGbNmbYPVEjC7sdm6LmZlHdtls3Y3WIAfrC7C8aj9x4hN5suTUfWWzdbdaV4n0Gi1YMWq+ahM+PaK++blv/RYUuI5Y2CfcfEXat' +
        //     'LcNSueWdD582Hfz6Ly1TDE4pKSP8CdWmdebliCfo/nZEVc3IVaEcRPnyrGnmH3G37BovKVMMTSmLkwcDrCV0p9XwRMT4iLuOG+vi+HCVxNhgVhoLT80XFj3/3ujJmvwWIEzegtlkCXJ7OqwulorRi9cfmy5bXZXghj0ahRRxAaoAkJjccyMqorBdAekdQ7n54Aa+CV/PxNk8KNUF6TnlG939Sv8U6AMJ6z2ztQUrwOiYmNfQMlPu7CeWGgHgI/KC9E7eCDRRgo8/1i0sT9S8K/ZMyBZwSD8kshPr55o+8p/PuHGnQKF7+PbHwO96IGqcjN3YVJE/f3XeVCFxb6j2PcxS7MqAZmnFbo8ENIVuJ6fAtfwdVkWCEzNb3KQL3w49GnSvAXE8PSlckTsg9vyp2665NWq78/GUOIpKRzb6Wn1tztLcLuYWGLYljy+vSMU7sTXOerDSue8BXgtWH1GS5eutKJTuevAdwyMBcpKfXvpqbWnRAGqvztePCZT+FC6F7R5VgHYVxvtXaDhhUOtMz7t4kJ518sKlxvdTrb+v7idtceSE4+e/DY+wse2/ra7WsAFM2c8RrGjz8E9M6WElxNZ6MaS2+SJkw4eMv06W/AgDD7NWdlmcd3C4v45Zry1V+AIW6TM5G5c7fAZu1GaGZntfq7hUBFeREeVhoopb7PpqTU/6lw/ganNMDwJr99PRmntvzsN4Hbk9qVehux6FHciAfwZcgHqqhoPVJTzvT1NR6NmI3TJouCE8CCnsfwirWr2rAEzliARyJmaItX58+b8/L27KyjKQPBWaz+DnfqmT86s88tfmZ674OvQjeGYSUn17+X6q77i8WA1zsfL6l0FVXTuwIAMLO4eB3S3D' +
        //     'U9MvkMpZ96MyGhuSFitlvmLYQwXgaQOmXyHhpWP7ClvvGGIV4unL8hNz1sSRUff6E6I7Nqz5HDn9i449XbHzUMkS6nzfIhtFr9bVlZx3fZ7R3tAnirvBAPRSSr1HdPWtrpJwryN8mlgvlni9Xfmek5WREQlv2//tVjN8okhs9EwmZt/mENlKUrk41u+7riovXXu1P7T8jkLCstvWbPd/7cWDKvasTDbsgLq5COz+NeHIMHmZknMHfOFtO4zPtGECWQiotw+IGb3gLGqBcVhvzsaIKr2bBiL1eFkX7/Q9+fmffqvyUkXCqthO7f6WytS0+refyZ69p/qgwthmHJ5aAns+otq1X82luA3yr3N1BY6vssgE12e0ecLAklJZ4zFVZroD3Tc7zC4WxvBbDdV4jH+y7tLcHEx19AcdF6GlY/pj11lzWTJu+9LXxJZbN1XcjKOlZRdSK/Ztv2O7+emNBkzhrkLMzpbD2TmVm132IE/EGB/3qqGL+LYlgldnvH1uLi9YmhJElNWtrpfYGg9dyGDd/5XGdngrWk+I9ITj7bt3xzuZplRhutQfxgVTH6F6UGGzWlvltycg78dtq0nZbQjC4kt9k7W77UWJX8tT2diOse8dCLeWE3rPg2bsUqfMbUzJu3GdlZx/r0GbiIQlTBhiCymoEv7QFsPWWfK9Y+nobVszScOOq9l6dM2V0cdWmYeO7tlJT6e54u8b+uBDeGYYV9KW/2FeIxpb4iRD0lFwDfTUmpR+H8DXIVYapCdXH5DBkWPOudj3V9ly8qXwFD3D9mzPvIm7mDhhXBtcx7c1pq7XP5BZtgt/XUO2XhMSP95O662lz3KzvumJGVeRyzZr0i61uXCuMGWoXAw+WFOB' +
        //     'TRZ+9UeM7srTNDBXWpcSU0V4mg0bWr4tZcWZAOJdFm62zOyjrxps3W1RVz1jbYqLl7lTsxrnnj/PkbF8THt0Qos3ABdxytxsJjl9exBAz8Ap/BvbgVAViQnl6NefP+BHvvrNJcAuIURqHZHHjXHQau5EwvdOMfW8OSxf0y74JZc1/alp11LH5gouXSMDW1bkO8p3Gx0uZYDMOS/coaU4q7bnu/+tJwnKvUNx0wN41G5+QcwLRpO/vKI6mpdQdTUupPRa0B98YUKsGwhjUQepl3qtXwv1JSsm6snO2EWmJS45GLF91pu3bdmj5m9Ptm/aqnkH2qwuVqkYua6k4rlq3NR+T8vHfmNm7cO7f1K+hb/aYjHj1a7PT7HX27sdLIPBkn3xECQRh4trwQ64czNkztovJPT5/+xpacnAOOaNeO7WrF/QeqMaWpx5Q/bJNm9QLm4Ku4C21wQBZICws3IHxZmo0W5OMUrAgiub1ndnWla2nyvj7OhiVL8u4Hfvjw7Lxty+TO9cAmVwCpaaefWLugY4UxcLo9UDyIYVmt3e0ZGad2OONa74/6pTzYACr12WGIcgjjdsMQ5hdzqORitXW3ZmUer7DbO9tFtB3C3hlWYeELkDvfNKyBoG9/Ng6Ort/k5u76cvjOlpxlBYM2o7LyU9axYyrNpVtoqSi3nocsjJf6vp6SUr82fCoc+uim86MQCNjMhAwo4jdZLHjIm4/hV5yWL7eltYknZ8/ZWirX/9FaUqsFD+47jXntl4x5J' +
        //     'MYll4HSFJbh7yH/Xw5KuYM6pvd4huwzDt0oQhVS0FPt/yiK7dfCDMu8x7tXuSfnvPXq5El7Z8tZf78mdw0Tz73tTqu/r7zQv33Q/A5iWPI6aX6yFvvsdR0/Vh8n5s71NyGM/5DlqoE1zcTExqPp6dXvy/6EwObyIjzZr+9S390AVoWOWtCwopEv9d3j8VQ9EdqxC5ecbZiA5KSzZv1KFuM9mVVvQ4iAYcHTg55vKvPOtVr820qK16WHz9xk34GgzfwIq8WPft84Au/5CvHAkN+MsUbP0pXJ03L2bM2ZcLBImki0drElAwsOxGNZ+3a4cWlnVGVAyllVJbKxBF/Fq8g1L5GfM2XKbkyauM/8f/PfIJCHGuSgp8jqbgX+bg+QcHkmd0OG+vGeYfXcvm3x6s/Mmbt5S2bmCftAID27hnUvJrkbv+Gdi/qYwIYwLHmdw9leFRd34Y7ffb5ucPOT4uXLLajN/gaE8TO5MS5n3bLYnpLcE4LV2t2WmXmiwuHoaBMCFy3Aw94ivNMvvjLvQgjjpcLCF+I4w4qVuTJvoSySlxStT5FnosJbUFjMB1E+hKGzIxC4gAD+1fcJyEOe0VvvwdSZM14rMo9DxGiu+JZTGZknDxlCBGMW8Yd8RC8Jsh5YPmny9Fd3Jiedy4p1WUdHIo69dx2+eLYWd+ENzEE17IhdCW9BHHZgGh7H5/EGppj1qt4BiFmztiM7+0jf1F1ymogGzECdycweAD79HjCtd0d7GLcyYum1YFhyaZi+7KGVs/Je+Wa0GbXT0Vafml79n4MuDRUMSyahqyuu4dQHeTcf/d4zr8klQdTE3LFmNOzdP4Ew/kF6U8Ss2xAizV2zPynpnLmVbRjYt7oAP4z4cl66Mlme' +
        //     'w5qVt/16ubLhDCsa7VKfPNvywpzZWxeGF8nDpaETwPJgJwSOOlLxwM+nYpA5Q8+hzlHZR5eEn4ge+PFy51AmMeY3zgge2xkrv/aJUZ5jGx2OtrRYl8tRd+7cOFRWLkRHazLGognX4TgycalofwhjcBjZOI3Uft3IwSin+tOnvSFnnX1/G2hW8g/SqD73TsxhPoK7G/qSa8OwzBP9o6ZM2f365El7J0ebUZtLw/Qz98ZcGkY76W4EZR01KIKWnmVAb2tu8YiDB2/Y03rR7YMhdiJoaZKzKBiiAIb4EoCvyH0lKZfL1Ly87eYbHCHDSUg4fyI944P3DAghBFoNK37sK8DbUbO5qPz2CTkH1kyf/mcLDSvWeF9UvmLM2Mr75VZqRF1AZqb3lR15sDPi7EisPsu8Nye6zj8XOhIxUDbgTNdhZwq+P7gJDv2whhQ3/G/RQout87m/1gMyB7tKCAPnm7NQXZ2HurrJCAQiVhh9l0tzGjOmEnITYuC3ujQrOauSs6tQrXdsI3DTfpizrI+yXTOGJacyd6/6QkH+i8+np1dHLg0tgS63u3ZjkrtxcdSlYRTDkm96JKecrWxpyZgWDNjiwvPW2eVCZeXf4MyZyZDjJlqTZxVn5u1AclJD359drvNV0qwshghCQBgW/NE7H2tjjomlK5MT7a3PzS/YeAMNK7a5LHTFt2wpKnreKd8XHNj6dvIA9YOdZd6pBrCtuHjduIGHOmX/oQN6MpER7yRehif8a6+4P9nakbq6sz1xtlzUqjS/34629hT4u539jMrhaDd3A' +
        //     'qO1JHSYy8rwmtj/l1nJ+K4lw0Kpz5496sjTM6a/cZvTEVmTdDjbzrrd1U+sva7jkYjlVwzDkq+m+f1OZ0PD2AJDzqIGNFlSqD+bg4aG8ZD/L8+EyV1Aj+ekWe/tm+0ZQiQmNh11u08fMc2qpx3qTMeP1k5E/9cyBn7IXU+NnTvvT7toWLGe2kFeJJaX9L6uUz2sg51LnkyE3/aH3NxdN4TvQIZC6OtzsDNdKi4ziGbRm8idfTT+8P64LJxBElSNS+VjbQhgOuogX72x9L6CJAfYlDrgs+989DOrUMzXlGHJm77rqbHTZr7+es74t3OiLQ0TEpvezXDXfstX7O//Mv0ghuV0tDbU1eVWdXXFLQ4t9VTGREhjsfg7U911h5ISG3veqjbf58Y7/kQ8ovr6UFH5jXk0rJjUe2pOE8YfWhL+DqCUh16IjnO2tojh7uQtKl/hyTxx/8AdyPDXEyJeAB3OyFDQtn8DYtts4LDHbr4k8wHc6Ij84lToqUciZ1RTUY8stJhnrEItvhsoPgLMUj+jr/yZwxFec4YFIP6+H98yZ+aO/3a7a/vVniQ3wxLsdqfWbUpOayjttzQcwrDky88drUmTL7S6l7W1pUyBMIacphuGCLhcTVVud+0RqzXQ836WgBAW7PMn4HFVswrle8gPLNuDm2FA/qRKvxb1kJfiKLrzXaRZO/CIITAm4pKR/LxMbydXItayCkz969GiH8JAUrTb++s5uBe9RfAp3ropK92LDAN4BMCoy9XncD5flPZMf6o8wM5pQFMC0AkbzsOFRrjQDBfaYTdNLLQDaA50CPM8lfwvDW2Qr9mkoi1iR9EqgCm1wKfexxV5/Wc49xquXVyKfwEg32frP5Y/zM/LhMbefiwUAXzLMND/o' +
        //     'K7AhUF/XiZ0/V7cd7ljW7IPMwJBPAhjwC7Jpbvf6Z2PiAOlpXvwE8PAjHBIQqAr9GsNpXvxxYDftqitPXV8a6t7nN/vSAoGrD01A0MIm7W71eFoP5eQcL4mLr6lKWz5JxUdCOJ5bxF+M5LjOjSsIUa/EDDK9ppJnRlloPclcbgPUele/MgA8iP6jPYTNcPtfKh76jWskKwuFdg7GahxA93WkX+YnFFNOw3kVwGuj+iM1XCivdYMS7Ip241/FAZuMYzesyf9gXUjiHJfMTaH//NQhiW1/7wfHnsQSyEwzzCUCqIBARzstuDnzxZgxCeVhzSs4QwIaq8OAqEZVoRZGkBDEnAiE5Am1uwCOu09JhYcMFLkLy04AoD7IiAL6hPP9BwI1bkZ5UoPls63oF1si3diDJy4SQRRIgB3aIYp5O4fcFEA1TCw09+BbX2/cfUh7oKG9SHgXa2XxjKsq/V+VOOmYamS0ldHw9I3N1csMhrWFUPLjq8wARrWFQasY/c0LB2zwphUCNCwVChRQwIkoAUBGpYWaWAQJEACKgRoWCqUqCEBEtCCAA1LizQwCBIgARUCNCwVStSQAAloQYCGpUUaGAQJkIAKARqWCiVqSIAEtCBAw9IiDQyCBEhAhQANS4USNSRAAloQoGFpkQYGQQIkoEKAhqVCiRoSIAEtCNCwtEgDgyABElAhQMNSoUQNCZCAFgRoWFqkgUGQAAmoEKBhqVCihgRIQAsCNCwt0sAgSIAEV' +
        //     'AjQsFQoUUMCJKAFARqWFmlgECRAAioEaFgqlKghARLQggANS4s0MAgSIAEVAjQsFUrUkAAJaEGAhqVFGhgECZCACgEalgolakiABLQgQMPSIg0MggRIQIUADUuFEjUkQAJaEKBhaZEGBkECJKBCgIalQokaEiABLQjQsLRIA4MgARJQIUDDUqFEDQmQgBYEaFhapIFBkAAJqBCgYalQooYESEALAjQsLdLAIEiABFQI0LBUKFFDAiSgBQEalhZpYBAkQAIqBGhYKpSoIQES0IIADUuLNDAIEiABFQI0LBVK1JAACWhBgIalRRoYBAmQgAoBGpYKJWpIgAS0IEDD0iINDIIESECFAA1LhRI1JEACWhCgYWmRBgZBAiSgQoCGpUKJGhIgAS0I0LC0SAODIAESUCFAw1KhRA0JkIAWBGhYWqSBQZAACagQoGGpUKKGBEhACwI0LC3SwCBIgARUCNCwVChRQwIkoAUBGpYWaWAQJEACKgRoWCqUqCEBEtCCAA1LizQwCBIgARUCNCwVStSQAAloQYCGpUUaGAQJkIAKARqWCiVqSIAEtCBAw9IiDQyCBEhAhQANS4USNSRAAloQoGFpkQYGQQIkoEKAhqVCiRoSIAEtCNCwtEgDgyABElAhQMNSoUQNCZCAFgRoWFqkgUGQAAmoEKBhqVCihgRIQAsCNCwt0sAgSIAEVAjQsFQoUUMCJKAFARqWFmlgECRAAioEaFgqlKghARLQggANS4s0MAgSIAEVAjQsFUrUkAAJaEGAhqVFGhgECZCACgEalgolakiABLQgQMPSIg0MggRIQIUADUuFEjUkQAJaEKBhaZEGBkECJKBCgIalQokaEiABLQjQsLRIA4MgARJQIUDDUqFEDQmQgBYEaFhapIFB' +
        //     'kAAJqBCgYalQooYESEALAjQsLdLAIEiABFQI0LBUKFFDAiSgBQEalhZpYBAkQAIqBGhYKpSoIQES0IIADUuLNDAIEiABFQI0LBVK1JAACWhBgIalRRoYBAmQgAoBGpYKJWpIgAS0IEDD0iINDIIESECFAA1LhRI1JEACWhCgYWmRBgZBAiSgQoCGpUKJGhIgAS0I0LC0SAODIAESUCFAw1KhRA0JkIAWBGhYWqSBQZAACagQoGGpUKKGBEhACwI0LC3SwCBIgARUCNCwVChRQwIkoAUBGpYWaWAQJEACKgRoWCqUqCEBEtCCAA1LizQwCBIgARUCNCwVStSQAAloQYCGpUUaGAQJkIAKARqWCiVqSIAEtCBAw9IiDQyCBEhAhQANS4USNSRAAloQoGFpkQYGQQIkoEKAhqVCiRoSIAEtCNCwtEgDgyABElAhQMNSoUQNCZCAFgRoWFqkgUGQAAmoEKBhqVCihgRIQAsCNCwt0sAgSIAEVAjQsFQoUUMCJKAFARqWFmlgECRAAioEaFgqlKghARLQggANS4s0MAgSIAEVAjQsFUrUkAAJaEGAhqVFGhgECZCACgEalgolakiABLQgQMPSIg0MggRIQIUADUuFEjUkQAJaEKBhaZEGBkECJKBCgIalQokaEiABLQjQsLRIA4MgARJQIUDDUqFEDQmQgBYEaFhapIFBkAAJqBCgYalQooYESEALAjQsLdLAIEiABFQI0LBUKFFDAiSgBYH/AxnrCrqrwtd5AAAAAElFTkSuQmCC'
        // return canvasToDataURL;

    }

    function C4() {
        return Math.random().toString(36)
        // return "PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf$Chrome PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf$Chromium PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf$Microsoft Edge PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf$WebKit built-in PDF::Portable Document Format::application/pdf~pdf,text/pdf~pdf;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
        // return window.ActiveXObject && Cz.j ? C6() : C5();

    }

    function C5() {
        var Kr = C;
        if (!wM[K[4]]) return '';
        var CR = [
            "4game", "AdblockPlugin", "AdobeExManCCDetect", "AdobeExManDetect", "Alawar NPAPI utils", "Aliedit Plug-In", "Alipay Security Control 3", "AliSSOLogin plugin", "AmazonMP3DownloaderPlugin", "AOL Media Playback Plugin", "AppUp", "ArchiCAD", "AVG SiteSafety plugin", "Babylon ToolBar", "Battlelog Game Launcher", "BitCometAgent", "Bitdefender QuickScan", "BlueStacks Install Detector", "CatalinaGroup Update",
            "Citrix ICA Client", "Citrix online plug-in", "Citrix Receiver Plug-in", "Coowon Update", "DealPlyLive Update", "Default Browser Helper", "DivX Browser Plug-In", "DivX Plus Web Player", "DivX VOD Helper Plug-in", "doubleTwist Web Plugin", "Downloaders plugin", "downloadUpdater", "eMusicPlugin DLM6", "ESN Launch Mozilla Plugin", "ESN Sonar API", "Exif Everywhere", "Facebook Plugin", "File Downloader Plug-in",
            "FileLab plugin", "FlyOrDie Games Plugin", "Folx 3 Browser Plugin", "FUZEShare", "GDL Object Web Plug-in 16.00", "GFACE Plugin", "Ginger", "Gnome Shell Integration", "Google Earth Plugin", "Google Earth Plug-in", "Google Gears 0.5.33.0", "Google Talk Effects Plugin", "Google Update", "Harmony Firefox Plugin", "Harmony Plug-In", "Heroes & Generals live", "HPDetect", "Html5 location provider", "IE Tab plugin", "iGetterScriptablePlugin",
            "iMesh plugin", "Kaspersky Password Manager", "LastPass", "LogMeIn Plugin 1.0.0.935", "LogMeIn Plugin 1.0.0.961", "Ma-Config.com plugin", "Microsoft Office 2013", "MinibarPlugin", "Native Client", "Nitro PDF Plug-In", "Nokia Suite Enabler Plugin", "Norton Identity Safe", "npAPI Plugin", "NPLastPass", "NPPlayerShell", "npTongbuAddin", "NyxLauncher", "Octoshape Streaming Services", "Online Storage plug-in", "Orbit Downloader",
            "Pando Web Plugin", "Parom.TV player plugin", "PDF integrado do WebKit", "PDF-XChange Viewer",
            "PhotoCenterPlugin1.1.2.2", "Picasa", "PlayOn Plug-in", "QQ2013 Firefox Plugin", "QQDownload Plugin", "QQMiniDL Plugin", "QQMusic", "RealDownloader Plugin", "Roblox Launcher Plugin", "RockMelt Update", "Safer Update", "SafeSearch", "Scripting.Dictionary", "SefClient Plugin", "Shell.UIHelper", "Silverlight Plug-In", "Simple Pass", "Skype Web Plugin", "SumatraPDF Browser Plugin", "Symantec PKI Client", "Tencent FTN plug-in",
            "Thunder DapCtrl NPAPI Plugin", "TorchHelper", "Unity Player", "Uplay PC", "VDownloader",
            "Veetle TV Core", "VLC Multimedia Plugin", "Web Components", "WebKit-integrierte PDF", "WEBZEN Browser Extension", "Wolfram Mathematica", "WordCaptureX", "WPI Detector 1.4", "Yandex Media Plugin", "Yandex PDF Viewer", "YouTube Plug-in", "zako"
        ];
        var Cs = [];
        var CF = {};
        return Cs[Kr(795)](C9(wM[K[4]], function (Cl) {
            var Kx = Kr;
            CF[Cl.name] = 1;
            var Ck = C9(Cl, function (CW) {
                var KG = C;
                return [CW[KG(1619)], CW[K[149]]].join(K[146]);
            })[Kx(1528)](K[36]);
            return [Cl[Kx(1677)], Cl[K[406]], Ck].join(K[455]);
        }, this)[Kr(1528)](K[27])), Cs.push(C9(CR, function (Cl) {
            var Kb = Kr;
            if (CF[Cl]) return '';
            if (Cl = wM[K[4]][Cl], !Cl) return '';
            var Ck = C9(Cl, function (CW) {
                var KU = C;
                return [CW[KU(1619)], CW[K[149]]][KU(1528)](K[146]);
            })[Kb(1528)](K[36]);
            return [Cl.name, Cl[K[406]], Ck][Kb(1528)](K[455]);
        }, this)[Kr(1528)](K[58])), Cs[Kr(1528)](K[58]);
    }

    function C6() {
        var KD = C;
        return window[K[360]] ? C9([K[242], K[298], K[322], K[304], T[45], K[201], K[449], K[223], T[1], K[178], K[255], K[102], K[165], K[237], K[367], K[255], K[104], K[151], K[317], K[420], K[355], T[8], K[332]], function (CR) {
            try {
                return new window[K[360]](CR), CR;
            } catch (Cs) {
                console.log(Cs);
                return null;
            }
        })[KD(1528)](K[58]) : '';
    }

    // function C7() {
    //     try {
    //         return !!window.sessionStorage;
    //     } catch (CR) {
    //         console.log(CR);
    //         return !0;
    //     }
    // }
    //
    // function C8() {
    //     try {
    //         return !!window.localStorage;
    //     } catch (CR) {
    //         console.log(CR);
    //         return !0;
    //     }
    // }

    function C9(CR, Cs, CF) {
        var Kv = C;
        var Cl = [];
        return null == CR ? Cl : CQ && CR[Kv(1628)] === CQ ? CR[Kv(1628)](Cs, CF) : (Cw(CR, function (Ck, CW, Ci) {
            var T0 = Kv;
            Cl[Cl[T0(1023)]] = Cs[T0(1319)](CF, Ck, CW, Ci);
        }), Cl);
    }

    function Cw(CR, Cs, CF) {
        var T1 = C;

        if (null !== CR) {
            if (CC && CR.forEach === CC) CR[T1(714)](Cs, CF); else {
                if (CR[T1(1023)] === +CR[T1(1023)]) {
                    for (var Cl = 0, Ck = CR[T1(1023)]; Cl < Ck && Cs[T1(1319)](CF, CR[Cl], Cl, CR) !== {}; Cl++) ;
                } else {
                    for (Cl in CR) if (CR[T1(1562)](Cl) && Cs.call(CF, CR[Cl], Cl, CR) === {}) break;
                }
            }
        }
    }

    var CC = Array.prototype.forEach;
    var CQ = Array.prototype.map;
    var Cz = {
        "g": fp_ws,
        "o": !0,
        "l": !0,
        "j": !0,
        "b": !0,
        "a": !0
    };
    ("undefined" == typeof wb ? "undefined" : R(wb)) == "function" ? Cz.g = wb : (null != wb.b && void 0 != wb.b && (Cz.b = wb.b), null != wb.a && void 0 != wb.a && (Cz.a = wb.a));

    this.get = function (ua) {
        // var T3 = T2;
        // var ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"

        var CR = [];
        var Cs = [];

        CR['push'](true); // sessionStorage
        CR['push'](true); // localStorage
        CR['push'](true); // indexedDB
        CR['push']("undefined") // document.body['addBehavior']
        CR['push']('undefined'); // openDatabase
        CR['push'](undefined); // cpuClass
        CR['push']("Win32"); // navigator.platform

        var CF = Cz.l;
        if (CF) {
            // var Cl = document['createElement']('canvas');
            CF = true; // !(!Cl['getContext'] || !Cl['getContext']('2d'));
        }

        if (CF) {
            CR.push(getcanvasToDataURL());
            Cz.b && CR['push'](C0());
        }
        CR['push'](C2());
        //  CR: [true, true, 'undefined', 'undefined', 'Win32', 'data:image/png;base64,iv...', 'ActiveBorder:rgb(0, 0, 0):ActiveCaption:rgb(0, 0, 0):...']

        Cz.a && Cs.push(wD());
        Cs['push'](ua) // navigator.userAgent
        Cs.push("zh-CN");  // navigator.language
        Cs['push'](24); // window['screen']['colorDepth']
        Cz.o && (Cs['push'](['864', '1536']['join']('x')));
        Cs['push'](new Date()['getTimezoneOffset']());
        Cs['push'](null) // navigator['doNotTrack']
        Cs['push'](C4());
        // Cs : ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        //     "zh-CN", 24, "864x1536", -480, null,
        //     "PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf$Chrome PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf$Chromium PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf$Microsoft Edge PDF Viewer::Portable Document Format::application/pdf~pdf,text/pdf~pdf$WebKit built-in PDF::Portable Document Format::application/pdf~pdf,text/pdf~pdf;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
        // ]

        CF = [];
        Cz.g ? (CF.push(Cz.g(CR['join']('###'))), CF.push(Cz.g(Cs['join']('###'))))
            : (CF.push(fp_ws(CR['join']('###'))), CF['push'](fp_ws(Cs['join']('###'))));
        return CF;
    };
}

function fp_wd(wb) {
    var wD = ["v", "fp", "u", "h", "ec", "em", "icp"];
    var wv = "";
    // if (null == wb || void 0 == wb) return wb;

    if (typeof wb == 'object') {
        wv += "{";

        for (var C0 = 0; C0 < wD['length']; C0++) {
            if (wb['hasOwnProperty'](wD[C0])) {
                var C1 = "'" + wD[C0] + "':'";
                var C2 = "" + wb[wD[C0]];
                null == C2 || void 0 == C2 ? C2 = C2 : C2 = C2['replace'](/'/g, "':'")['replace'](/"/g, '"');
                wv += C1 + C2 + "',";
            }
        }
        wv['charAt'](wv['length'] - 1) == "," && (wv = wv.substring(0, wv['length'] - 1));
        return wv += "}";
    }

    return null;
}

function fp_wz(wb) {
    if (wb < -128) {
        return fp_wz(128 - (-128 - wb));
    }
    if (wb >= -128 && wb <= 127) {
        return wb;
    }
    if (wb > 127) {
        return fp_wz(-129 + wb - 127);
    }
    throw Error('1001');
}


function fp_w8(wb) {
    if (null == wb || wb['length'] == 0) return [];
    wb = new String(wb);

    for (var wD = [], wv = wb.length / 2, C0 = 0, C1 = 0; C1 < wv; C1++) {
        var C2 = parseInt(wb['charAt'](C0++), 16) << 4;
        var C3 = parseInt(wb['charAt'](C0++), 16);
        wD[C1] = fp_wz(C2 + C3);
    }

    return wD;
}

function fp_w7(wb) {
    // var KJ = C;
    if (null == wb || void 0 == wb) return wb;
    wb = encodeURIComponent(wb);

    for (var wD = [], wv = wb['length'], C0 = 0; C0 < wv; C0++) {
        if (wb['charAt'](C0) == '%') {
            // if (!(C0 + 2 < wv)) throw Error('1009');
            wD.push(fp_w8(wb['charAt'](++C0) + '' + wb['charAt'](++C0))[0]);
        } else wD['push'](wb['charCodeAt'](C0));
    }

    return wD;
}

function fp_w6(wb) {
    var wD = [];
    wD[0] = wb >>> 24 & 255;
    wD[1] = wb >>> 16 & 255;
    wD[2] = wb >>> 8 & 255;
    wD[3] = wb & 255;
    return wD;
}

function fp_w9(wb) {
    var wD = [];
    var wN = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    wD.push(wN[wb >>> 4 & 15]);
    wD.push(wN[wb & 15]);
    return wD.join('');
}

function fp_w2(wb) {
    var wD = 4294967295;

    for (var wv = 0; wv < wb['length']; wv++) {
        wD = wD >>> 8 ^ X[(wD ^ wb[wv]) & 255];
    }
    wb = fp_w6(wD ^ 4294967295);
    wD = wb['length']

    wv = [];
    for (var C0 = 0; C0 < wD; C0++) {
        wv['push'](fp_w9(wb[C0]));
    }
    wb = wv['join']('');
    return wb;
}

function fp_w1(wb) {
    // 补充到64位，少了再从头开始
    var wD = [];
    if (wb.length >= 64) {
        var wv = [];
        for (var i = 0; i < 64; i++) {
            wv[i] = wb[i];
        }
        return wv;
    }

    for (i = 0; i < 64; i++) {
        wD[i] = wb[i % wb.length];
    }

    return wD;
}

function fp_wQ(wb, wD) {
    return fp_wz(wb + wD);
}


function fp_wC(wb, wD) {
    wb = fp_wz(wb);
    wD = fp_wz(wD);
    return fp_wz(wb ^ wD);
}


function fp_ww(wb, wD) {
    // var KB = C;
    if (null == wb || null == wD || wb['length'] != wD.length) return wb;

    for (var wv = [], C0 = 0, C1 = wb['length']; C0 < C1; C0++) {
        wv[C0] = fp_wC(wb[C0], wD[C0]);
    }

    return wv;
}

function fp_w5(wb, wD, wv, C0, C1) {
    // var KX = C;
    if (null == wb || wb.length == 0) return wv;
    if (null == wv) throw Error(K[133]);
    if (wb["length"] < C1) throw Error(K[135]);

    for (var C2 = 0; C2 < C1; C2++) {
        wv[C0 + C2] = wb[wD + C2];
    }

    return wv;
}

function fp_w0(wb) {
    // var Kg = C;
    if (null == wb) return null;

    for (var wD = [], wv = 0, C0 = wb.length; wv < C0; wv++) {
        var C1 = wb[wv];
        wD[wv] = wX[(C1 >>> 4 & 15) * m[49] + (C1 & 15)];
    }

    return wD;
}

function fp_w3(wb, wD, wv) {
    // var Ke = C;
    var C0 = ["2", "4", "0", "a", "Y", "H", "i", "Q", "x", "L", "\\", "Z", "u", "f", "V", "l", "g", "8", "s", "P", "M", "R", "6", "d", "G", "k", "X", "v", "O", "/", "C", "b", "w", "9", "W", "D", "j", "1", "E", "T", "y", "I", "S", "c", "m", "e", "o", "J", "z", "3", "7", "q", "t", "h", "B", "r", "U", "+", "K", "N", "A", "5", "p", "n"];
    var C1 = "F";
    var C2 = [];

    if (wv == 1) {
        wv = wb[wD];
        var C3 = 0;
        C2.push(C0[wv >>> 2 & 63]);
        C2['push'](C0[(wv << 4 & 48) + (C3 >>> 4 & 15)]);
        C2['push'](C1);
        C2['push'](C1);
    } else {
        if (wv == 2) {
            wv = wb[wD];
            C3 = wb[wD + 1];
            wb = 0;
            C2['push'](C0[wv >>> 2 & 63]);
            C2['push'](C0[(wv << 4 & 48) + (C3 >>> 4 & 15)]);
            C2.push(C0[(C3 << 2 & 60) + (wb >>> 6 & 3)]);
            C2.push(C1);
        } else {
            if (wv != 3) throw Error('1010');
            wv = wb[wD];
            C3 = wb[wD + 1];
            wb = wb[wD + 2];
            C2['push'](C0[wv >>> 2 & 63]);
            C2.push(C0[(wv << 4 & 48) + (C3 >>> 4 & 15)]);
            C2['push'](C0[(C3 << 2 & 60) + (wb >>> 6 & 3)]);
            C2['push'](C0[wb & 63]);
        }
    }

    return C2.join('');
}

// -----------------------------------------
function check_A() {
    // var KW = C;
    var I;

    if (arguments['length'] > 0 && void 0 !== arguments[0]) {
        I = arguments[0];
    } else {
        I = [];
    }

    var q = [];
    var H = [];
    var M = [];
    if (!Array['isArray'](I) || I['length'] <= 2) return [q, H, M];

    for (var g = 0; g < I['length']; g++) {
        var j = I[g];
        q['push'](j[0]);
        H.push(j[1]);
        M['push'](j[2]);
    }

    return [q, H, M];
}

var check_V = function () {
    function I(q, H) {
        var KT = C;
        var M = [];
        var g = !0;
        var j = !1;
        var N = void 0;

        try {
            for (var X, J = q[Symbol[KT(1437)]](); !(g = (X = J[KT(1992)]())[KT(247)]) && (M[KT(795)](X.value), !H || M.length !== H); g = !0) ;
        } catch (Z) {
            console.log(Z);
            j = !0;
            N = Z;
        } finally {
            try {
                if (!g && J.return) {
                    J[KT(1363)]();
                }
            } finally {
                if (j) throw N;
            }
        }

        return M;
    }

    return function (q, H) {
        // var Ku = C;
        if (Array.isArray(q)) return q;
        if (Symbol['iterator'] in Object(q)) {
            return I(q, H);
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}()

function check_O_m(I, q) {
    // var Kk = C;

    for (var H = [], M = [], g = 0; g < I.length - 1; g++) {
        H['push'](I[g + 1] - I[g]);
        M['push'](q[g + 1] - q[g]);
    }

    for (var j = [], N = 0; N < M.length; N++) {
        j['push'](M[N] / H[N]);
    }

    return j;
}

function check_O(I, q, H) {
    // var Ki = C;
    var M = check_O_m(H, I),
        g = check_O_m(H, q),
        j = [];
    for (var N = 0; N < I['length']; N++) {
        var X = Math.sqrt(Math.pow(I[N], 2) + Math.pow(q[N], 2));
        j.push(X);
    }

    var J = check_O_m(H, j);
    return [M, g, J];
}

function check_L(I, q, H, M) {
    // var Ky = C;
    var g = M.slice(0, -1);
    var j = check_O_m(g, I);
    var N = check_O_m(g, q);
    var X = check_O_m(g, H);
    return [j, N, X];
}

function check_F(I) {
    // var KR = C;
    for (var q = [], H = I['length'], M = 0; M < H; M++) {
        if (q['indexOf'](I[M]) === -1) {
            q['push'](I[M]);
        }
    }

    return q;
}

function check_k(I) {
    for (var q = 0, H = I.length, M = 0; M < H; M++) q += I[M];

    return q / H;
}

function check_K(I) {
    // var KF = C;
    return parseFloat(I['toFixed'](4));
}

function check_W(I) {
    // var Ks = C;

    for (var q = check_k(I), H = I.length, M = [], g = 0; g < H; g++) {
        var j = I[g] - q;
        M['push'](Math.pow(j, 2));
    }

    for (var N = 0, X = 0; X < M['length']; X++) if (M[X]) {
        N += M[X];
    }

    return Math.sqrt(N / H);
}

function check_R(I) {
    // var Kz = C;

    if (Array['isArray'](I)) {
        for (var q = 0, H = Array(I.length); q < I['length']; q++) H[q] = I[q];

        return H;
    }

    return Array.from(I);
}

function check_T(I, q) {
    // var Kl = C;
    var H = I['sort'](function (N, X) {
        return N - X;
    });
    if (q <= 0) return H[0];
    if (q >= 100) return H[H.length - 1];
    var M = Math.floor((H.length - 1) * (q / 100));
    var g = H[M];
    var j = H[M + 1];
    return g + (j - g) * ((H.length - 1) * (q / 100) - M);
}


function check_Y() {
    // var KK = C;
    var w0;
    if (arguments['length'] > 0 && void 0 !== arguments[0]) {
        w0 = arguments[0];
    } else {
        w0 = [];
    }
    if (!Array['isArray'](w0) || w0['length'] <= 2) return [];

    var w1 = check_A(w0);
    var w2 = check_V(w1, 3);
    var w3 = w2[0];
    var w4 = w2[1];
    var w5 = w2[2];

    var w6 = check_O(w3, w4, w5);
    var w7 = check_V(w6, 3);
    var w8 = w7[0];
    var w9 = w7[1];
    var ww = w7[2];

    var wC = check_L(w8, w9, ww, w5);
    var wQ = check_V(wC, 3);
    var wz = wQ[0];
    var wR = wQ[1];
    var ws = wQ[2];

    var wF = check_F(w3)['length'];
    var wl = check_F(w4)['length'];
    var wk = check_K(check_k(w4));
    var wW = check_K(check_W(w4));
    var wi = w3['length'];

    var wy = check_K(Math.min['apply'](Math, check_R(w8)));
    var wK = check_K(Math.max['apply'](Math, check_R(w8)));
    var wT = check_K(check_k(w8));
    var wu = check_K(check_W(w8));
    var wm = check_F(w8)['length'];
    var wA = check_K(check_T(w8, 25));
    var wd = check_K(check_T(w8, 75));

    var wO = check_K(Math['min']['apply'](Math, check_R(w9)));
    var wL = check_K(Math['max']['apply'](Math, check_R(w9)));
    var wY = check_K(check_k(w9));
    var wV = check_K(check_W(w9));
    var wI = check_F(w9).length;
    var wt = check_K(check_T(w9, 25));
    var wq = check_K(check_T(w9, 75));

    var wH = check_K(Math['min'].apply(Math, check_R(ww)));
    var wp = check_K(Math['max'].apply(Math, check_R(ww)));
    var wo = check_K(check_k(ww));
    var wn = check_K(check_W(ww));
    var wM = check_F(ww).length;
    var wg = check_K(check_T(ww, 25));
    var wj = check_K(check_T(ww, 75));

    var wN = check_K(Math.min['apply'](Math, check_R(wz)));
    var we = check_K(Math['max'].apply(Math, check_R(wz)));
    var wX = check_K(check_k(wz));
    var wJ = check_K(check_W(wz));
    var wZ = check_F(wz).length;
    var wh = check_K(check_T(wz, 25));
    var wB = check_K(check_T(wz, 75));

    var wE = check_K(Math.min['apply'](Math, check_R(wR)));
    var wP = check_K(Math.max.apply(Math, check_R(wR)));
    var wc = check_K(check_k(wR));
    var wf = check_K(check_W(wR));
    var wS = check_F(wR).length;
    var wa = check_K(check_T(wR, 25));
    var wr = check_K(check_T(wR, 75));

    var wG = check_K(Math['min']['apply'](Math, check_R(ws)));
    var wx = check_K(Math['max']['apply'](Math, check_R(ws)));
    var wU = check_K(check_k(ws));
    var wb = check_K(check_W(ws));
    var wD = check_F(ws).length;
    var wv = check_K(check_T(ws, 25));
    var C0 = check_K(check_T(ws, 75));

    var result = [wF, wl, wk, wW, wi, wy, wK, wT, wu, wm, wA, wd, wO, wL, wY, wV, wI, wt, wq, wH, wp, wo, wn, wM, wg, wj, wN, we, wX, wJ, wZ, wh, wB, wE, wP, wc, wf, wS, wa, wr, wG, wx, wU, wb, wD, wv, C0];
    return result;
}

// ---------------------------------------------------------------
// 1. 获取cb参数

function check_w8_T(q) {
    var H = ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"];
    var M = "3";
    return k_A(q, H, M);
}

function check_w8(imageToken, moveRadio) {
    var wp = wK_O(moveRadio);
    var wo = wK_O(imageToken);
    return check_w8_T(T(wp, wo));
}

function unique2DArray(y) {
    // var QC = Cf;
    var K;

    if (arguments.length > 1 && void 0 !== arguments[1]) {
        K = arguments[1];
    } else {
        K = 0;
    }

    if (!Array["isArray"](y)) return y;

    var T = {}, m = [];
    for (var A = 0, O = y.length; A < O; A++) {
        var L = y[A][K];
        null === L || void 0 === L || T[L] || (T[L] = !0, m.push(y[A]));
    }

    return m;
}

function sample(W, y) {
    // var Q4 = Cf;
    var K = W.length;
    if (K <= y) return W;

    for (var T = [], m = 0, A = 0; A < K; A++) if (A >= m * (K - 1) / (y - 1)) {
        T.push(W[A]);
        m += 1;
    }
    return T;
}

function encry_point(imageToken, point) {
    return check_w8(imageToken, point)
}

// -------------------------------------
function get_cb() {
    var uuid = getUuid(32);
    return encryUuid(uuid);
}

// 2. 获取fp参数  gdxidpyhxde  长度190
function get_fp(fp_h, ua) {
    // wt();
    // window["gdxidpyhxde"] = null;
    var wb = !0;
    var wD = {"v": "v1.1"};
    // var wv = null;
    // wv && (wD['icp'] = wv);

    wD['h'] = fp_h  // ? fp_h : "app.miit-eidc.org.cn";

    var now = new Date().getTime();
    var C0 = now + 900000;
    var C1 = C0 + 1000 * 60 * 60 * 24 * 30;
    wD['u'] = wm(3) + C0 + wm(3); // 3个随机字符+时间+3个随机字符

    var C2 = new wR({"b": !1, "a": !1}).get(ua);
    wD['fp'] = C2['join'](',');
    // "{'v':'v1.1','fp':'37550335803948,20280822263259','u':'pRG1708334958935T1h','h':'app.miit-eidc.org.cn'}"
    console.log('fp参数：', wD)
    var C3 = wv = fp_wd(wD);

    C2 = C3;
    var C4 = fp_w2(fp_w7(C3)); // "40ec7a78"
    var C5 = fp_w7(C2 + C4);
    // ('vivRvdvvvivzv3v3vzvvvRYRvRvivRYvRYvgvivvv3vYYRvYvkvRR3vRR3vkRYv3RYv3vYYvvkYYviYzYv')
    var C6 = fp_w7("14731255234d414cF91356d684E4E8F5F56c8f1bc");

    C4 = [];
    for (var C7 = 0; C7 < 4; C7++) {
        var C8 = Math.random() * 256;
        C8 = Math['floor'](C8);
        C4[C7] = fp_wz(C8);
    }

    C6 = fp_w1(C6);
    C6 = fp_ww(C6, fp_w1(C4)); // 到时候再确认一下
    C7 = C6 = fp_w1(C6);
    C8 = C5;

    var Cw = C8['length'];
    var CC = Cw % 64 <= 64 - 4 ? (64 - Cw % 64 - 4) : (64 * 2 - Cw % 64 - 4);
    C5 = [];
    fp_w5(C8, 0, C5, 0, Cw);

    for (var CQ = 0; CQ < CC; CQ++) {
        C5[Cw + CQ] = 0;
    }

    var Cz = fp_w6(Cw);
    fp_w5(Cz, 0, C5, Cw + CC, 4);
    C9 = C5;
    Cw = C9;
    if (null == Cw || Cw.length % 64 != 0) throw Error(K[132]);
    C9 = [];

    var CR = 0, Cs = Cw['length'] / 64;
    for (var CF = 0; CF < Cs; CF++) {
        C9[CF] = [];

        for (var Cl = 0; Cl < 64; Cl++) {
            C9[CF][Cl] = Cw[CR++];
        }
    }

    CR = [];
    fp_w5(C4, 0, CR, 0, 4);

    for (var Ck = C9['length'], CW = 0; CW < Ck; CW++) {
        var Ci = C9[CW];
        if (null == Ci) {
            var Cy = null;
        } else {
            var CK = fp_wz(37);
            Cs = [];
            for (var CT = Ci['length'], Cu = 0; Cu < CT; Cu++) {
                Cs['push'](fp_wC(Ci[Cu], CK));
            }
            Cy = Cs;
        }

        if (Cs = Cy, null == Cs) {
            var Cm = null;
        } else {
            var CA = fp_wz(35);
            CF = [];

            for (var Cd = Cs['length'], CO = 0; CO < Cd; CO++) {
                CF['push'](fp_wC(Cs[CO], CA--));
            }
            Cm = CF;
        }

        if (Cs = Cm, null == Cs) {
            var CL = null;
        } else {
            var CY = fp_wz(-44);
            CF = [];
            for (var CV = Cs['length'], CI = 0; CI < CV; CI++) {
                CF['push'](fp_wQ(Cs[CI], CY++));
            }
            CL = CF;
        }

        var Ct = fp_ww(CL, C6);
        if (Cs = Ct, CF = C7, null == Cs) {
            var Cq = null;
        } else {
            if (null == CF) {
                Cq = Cs;
            } else {
                Cl = [];
                for (var CH = CF['length'], Cp = 0, Co = Cs.length; Cp < Co; Cp++) {
                    Cl[Cp] = fp_wz(Cs[Cp] + CF[Cp % CH]);
                }
                Cq = Cl;
            }
        }

        Ct = fp_ww(Cq, C7);
        var Cn = fp_w0(Ct);
        Cn = fp_w0(Cn);
        fp_w5(Cn, 0, CR, CW * 64 + 4, 64);
        C7 = Cn;
    }

    var Cg = 3;
    Ck = [];
    for (var Cj = 0; Cj < CR['length'];) {
        if (!(Cj + Cg <= CR.length)) {
            Ck['push'](fp_w3(CR, Cj, CR['length'] - Cj));
            break;
        }

        Ck['push'](fp_w3(CR, Cj, Cg));
        Cj += Cg;
    }

    var CM = Ck['join'](''); //  生成fp

    var wv = CM + ':' + C0;
    return wv
    // wO("gdxidpyhxdE", wv, true, C1);
    // wb = wP;
    // CM = wv;
    // Cg = wA(wb);
    // null !== Cg && void 0 !== Cg && Cg !== '' || wO(wb, CM, !1);
    // window[wx] = wv;
    // window['setTimeout'] && window['setTimeout'](wq, wa);
}

// 3. 获取data参数 d m p f ext
function get_check_data(atomTraceData, move_distance, imageToken) {
    var traceData = []
    for (let point of atomTraceData) {
        traceData.push(encry_point(imageToken, point + ''))
    }

    var D = sample(traceData, 50);

    // this.$jigsaw.style.left
    var w1 = encryUuid(check_w8(imageToken, parseInt(move_distance, 10) / 320 * 100 + ""))
    var w2 = check_Y(unique2DArray(atomTraceData, 2));


    var d = encryUuid(D.join(":"));
    var f = encryUuid(check_w8(imageToken, w2.join(",")));
    var mouseDownCounts = 1;
    var ext = encryUuid(check_w8(imageToken, mouseDownCounts + "," + traceData.length))

    var data = {
        "d": d,
        "m": "",
        "p": w1,
        "f": f,
        "ext": ext
    }

    // return data
    return JSON.stringify(data)
}


// --------------------------------------------------------------------
// console.log(get_cb())
// console.log(get_fp("app.miit-eidc.org.cn", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"));

// console.log(new wR({"b": !1, "a": !1}).get());

// console.log(check_Y());

// var move_distance = 134;  // 移动距离
// var imageToken = "449c7b31cad54b8f9f268918f2bda9b8"; // /get -> token
// var xx = get_check_data(atomTraceData, move_distance, imageToken)
// console.log(xx)

// var sum = (numbers) => numbers.reduce((a, b) => a + b, 0)
// console.log(sum(xx))


