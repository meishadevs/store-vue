import config from '@/config'

const fileUrl = process.env.NODE_ENV === 'development' ? config.fileUrl.dev : config.fileUrl.pro
const filePath = fileUrl + '/Common/lodop/'
var CreatedOKLodop7766 = null
/* eslint-disable */
// ====判断是否需要安装CLodop云打印服务器:====
export function needCLodop() {
  try {
    var ua = navigator.userAgent
    if (ua.match(/Windows\sPhone/i) != null) return true
    if (ua.match(/iPhone|iPod/i) != null) return true
    if (ua.match(/Android/i) != null) return true
    if (ua.match(/Edge\D?\d+/i) != null) return true

    var verTrident = ua.match(/Trident\D?\d+/i)
    var verIE = ua.match(/MSIE\D?\d+/i)
    var verOPR = ua.match(/OPR\D?\d+/i)
    var verFF = ua.match(/Firefox\D?\d+/i)
    var x64 = ua.match(/x64/i)
    if ((verTrident == null) && (verIE == null) && (x64 !== null)) { return true } else
    if (verFF !== null) {
      verFF = verFF[0].match(/\d+/)
      if ((verFF[0] >= 42) || (x64 !== null)) return true
    } else
    if (verOPR !== null) {
      verOPR = verOPR[0].match(/\d+/)
      if (verOPR[0] >= 32) return true
    } else
    if ((verTrident == null) && (verIE == null)) {
      var verChrome = ua.match(/Chrome\D?\d+/i)
      if (verChrome !== null) {
        verChrome = verChrome[0].match(/\d+/)
        if (verChrome[0] >= 42) return true
      };
    };
    return false
  } catch (err) { return true }
};

// ====页面引用CLodop云打印必须的JS文件：====
if (needCLodop()) {
  var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement
  var oscript = document.createElement('script')
  oscript.src = 'http://localhost:8000/CLodopfuncs.js?priority=1'
  head.insertBefore(oscript, head.firstChild)

  // 引用双端口(8000和18000）避免其中某个被占用：
  oscript = document.createElement('script')
  oscript.src = 'http://localhost:18000/CLodopfuncs.js?priority=0'
  head.insertBefore(oscript, head.firstChild)
};

// ====获取LODOP对象的主过程：====
export function getLodop(oOBJECT, oEMBED) {
  var strHtmInstall = "<div class='print-alert'><span class='ivu-icon ivu-icon-md-information-circle'></span>打印控件未安装!点击这里<a href='"+filePath+"install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</div>"
  var strHtmUpdate = "<div class='print-alert'><span class='ivu-icon ivu-icon-md-information-circle'></span>打印控件需要升级!点击这里<a href='"+filePath+"install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。</div>"
  var strHtm64_Install = "<div class='print-alert'><span class='ivu-icon ivu-icon-md-information-circle'></span>打印控件未安装!点击这里<a href='"+filePath+"install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</div>"
  var strHtm64_Update = "<div class='print-alert'><span class='ivu-icon ivu-icon-md-information-circle'></span>打印控件需要升级!点击这里<a href='"+filePath+"install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。</div>"
  var strHtmFireFox = "<div class='print-alert'><span class='ivu-icon ivu-icon-md-information-circle'></span>（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）</div>"
  var strHtmChrome = "<div class='print-alert'><span class='ivu-icon ivu-icon-md-information-circle'></span>(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）</div>"
  var strCLodopInstall = " <div class='print-alert'><span class='ivu-icon ivu-icon-md-information-circle'></span>CLodop云打印服务(localhost本地)未安装启动!点击这里<a  href='"+filePath+"CLodop_Setup_for_Win32NT.exe' target='_self'>执行安装</a>,安装后请刷新页面。</div>"
  var strCLodopUpdate = "<div class='print-alert'><span class='ivu-icon ivu-icon-md-information-circle'></span>CLodop云打印服务需升级!点击这里<a href='"+filePath+"CLodop_Setup_for_Win32NT.exe' target='_self'>执行升级</a>,升级后请刷新页面。</div>"
  var LODOP
  try {
    var isIE = (navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0)
    if (needCLodop()) {
      try { LODOP = getCLodop() } catch (err) { };
      if (!LODOP && document.readyState !== 'complete') { alert('C-Lodop没准备好，请稍后再试！'); return };
      if (!LODOP) {
        if (isIE) document.write(strCLodopInstall); else { document.documentElement.innerHTML = strCLodopInstall + document.documentElement.innerHTML }
        return
      } else {
        if (CLODOP.CVERSION < '2.1.6.3') {
          if (isIE) document.write(strCLodopUpdate); else { document.documentElement.innerHTML = strCLodopUpdate + document.documentElement.innerHTML }
        };
        if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED)
        if (oOBJECT && oOBJECT.parentNode) oOBJECT.parentNode.removeChild(oOBJECT)
      };
    } else {
      var is64IE = isIE && (navigator.userAgent.indexOf('x64') >= 0)
      // =====如果页面有Lodop就直接使用，没有则新建:==========
      if (oOBJECT !== undefined || oEMBED !== undefined) {
        if (isIE) LODOP = oOBJECT; else LODOP = oEMBED
      } else if (CreatedOKLodop7766 == null) {
        LODOP = document.createElement('object')
        LODOP.setAttribute('width', 0)
        LODOP.setAttribute('height', 0)
        LODOP.setAttribute('style', 'position:absolute;left:0px;top:-100px;width:0px;height:0px;')
        if (isIE) LODOP.setAttribute('classid', 'clsid:2105C259-1E0C-4534-8141-A753534CB4CA')
        else LODOP.setAttribute('type', 'application/x-print-lodop')
        document.documentElement.appendChild(LODOP)
        CreatedOKLodop7766 = LODOP
      } else LODOP = CreatedOKLodop7766
      // =====Lodop插件未安装时提示下载地址:==========
      if ((LODOP == null) || (typeof (LODOP.VERSION) === 'undefined')) {
        if (navigator.userAgent.indexOf('Chrome') >= 0) { document.documentElement.innerHTML = strHtmChrome + document.documentElement.innerHTML }
        if (navigator.userAgent.indexOf('Firefox') >= 0) { document.documentElement.innerHTML = strHtmFireFox + document.documentElement.innerHTML }
        if (is64IE) document.write(strHtm64_Install); else
        if (isIE) document.write(strHtmInstall); else { document.documentElement.innerHTML = strHtmInstall + document.documentElement.innerHTML }
        return LODOP
      };
    };
    if (LODOP.VERSION < '6.2.1.8') {
      if (!needCLodop()) {
        if (is64IE) document.write(strHtm64_Update); else
        if (isIE) document.write(strHtmUpdate); else { document.documentElement.innerHTML = strHtmUpdate + document.documentElement.innerHTML }
      };
      return LODOP
    };
    // ===如下空白位置适合调用统一功能(如注册语句、语言选择等):===
    // LODOP.SET_LICENSES('深圳市北科生命科技有限公司', 'EF6B1E258EE17DEF29709EE8A683CA27', '深圳市北科生命科技有限公司', '0968ED4566443B7B332FD223ABD198C9')
    // LODOP.SET_LICENSES('THIRD LICENSE', '', 'Shenzhen Beike Life Science & Technology CoLtd', '48CF62F17C7FFDA0071A2A33C2B0F485')

    // ===========================================================
    return LODOP
  } catch (err) { alert('getLodop出错:' + err) };
};

