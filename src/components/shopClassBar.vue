<!-- 商品分类导航组件 -->

<template>
  <div class="shopClassBar" @mouseleave="selectIndex = 0">

    <!-- 商品类别列表 s -->
    <div class="shopClass-show">
      <dl class="shopClass-item" @mouseenter="selectIndex = 1" v-bind:class="{current: selectIndex == 1}">
        <dt>
          <a href="javascript:;">手机</a>
          <a href="javascript:;">数码</a>
          <a class="aLink" href="javascript:;">合约机</a>
        </dt>
        <dd>
          <a href="javascript:;">荣耀3X</a>
          <a href="javascript:;">单反</a>
          <a href="javascript:;">智能设备</a>
        </dd>
      </dl>
      <dl class="shopClass-item" @mouseenter="selectIndex = 2" v-bind:class="{current: selectIndex == 2}">
        <dt>
          <a href="javascript:;">电脑</a>
          <a href="javascript:;">硬件外设</a>
          <a class="aLink" href="javascript:;">装机宝</a>
        </dt>
        <dd>
          <a href="javascript:;">笔记本</a>
          <a href="javascript:;">台式机</a>
          <a href="javascript:;">超极本</a>
          <a href="javascript:;"> 平板</a>
        </dd>
      </dl>
      <dl class="shopClass-item" @mouseenter="selectIndex = 3" v-bind:class="{current: selectIndex == 3}">
        <dt>
          <a href="javascript:;">大家电</a>
        </dt>
        <dd>
          <a href="javascript:;">电视</a>
          <a href="javascript:;">空调</a>
          <a href="javascript:;">冰箱</a>
          <a href="javascript:;">洗衣机</a>
        </dd>
      </dl>
      <dl class="shopClass-item" @mouseenter="selectIndex = 4" v-bind:class="{current: selectIndex == 4}">
        <dt>
          <a href="javascript:;">厨房电器</a>
          <a href="javascript:;">生活电器</a>
        </dt>
        <dd>
          <a href="javascript:;">空气净化器</a>
          <a href="javascript:;">微波炉</a>
          <a href="javascript:;">取暖设备</a>
        </dd>
      </dl>
      <dl class="shopClass-item" @mouseenter="selectIndex = 5" v-bind:class="{current: selectIndex == 5}">
        <dt>
          <a href="javascript:;">食品</a>
          <a href="javascript:;">饮料</a>
          <a href="javascript:;">生鲜</a>
          <a class="aLink" href="javascript:;">粮油</a>
        </dt>
        <dd>
          <a href="javascript:;">进口</a>
          <a href="javascript:;">方便面</a>
          <a href="javascript:;">零食</a>
          <a href="javascript:;">保健</a>
        </dd>
      </dl>
    </div>
    <!-- 商品类别列表 e -->

    <!-- 商品列表 s -->
    <div class="shopClass-list">
      <div class="cate-item" v-bind:style="{display: selectIndex == 1 ? 'block' : 'none'}">
        <dl class="shopList-item clearfix">
          <dt class="fl">手机通讯</dt>
          <dd>
            <a href="javascript:;">手机</a>
            <a href="javascript:;">对讲机</a>
            <a href="javascript:;">以久换新</a>
            <a href="javascript:;">手机维修</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">运营商</dt>
          <dd>
            <a href="javascript:;">充话费/流量</a>
            <a href="javascript:;">170选号</a>
            <a href="javascript:;">合约机</a>
            <a href="javascript:;">办套餐</a>
            <a href="javascript:;">选号码</a>
            <a href="javascript:;">固话宽带</a>
            <a href="javascript:;">中国移动</a>
            <a href="javascript:;">中国联通</a>
            <a href="javascript:;">中国电信</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">手机配件</dt>
          <dd>
            <a href="javascript:;">手机壳</a>
            <a href="javascript:;">贴膜</a>
            <a href="javascript:;">手机存储卡</a>
            <a href="javascript:;">数据线</a>
            <a href="javascript:;">充电器</a>
            <a href="javascript:;">手机耳机</a>
            <a href="javascript:;">创意配件</a>
            <a href="javascript:;">手机饰品</a>
            <a href="javascript:;">手机电池</a>
            <a href="javascript:;">苹果周边</a>
            <a href="javascript:;">移动电源</a>
            <a href="javascript:;">蓝牙耳机</a>
            <a href="javascript:;">手机支架</a>
            <a href="javascript:;">车载支架</a>
            <a href="javascript:;">拍照配件</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">摄影摄像</dt>
          <dd>
            <a href="javascript:;">数码相机</a>
            <a href="javascript:;">单电/微单相机</a>
            <a href="javascript:;">单反相机</a>
            <a href="javascript:;">拉立得</a>
            <a href="javascript:;">运动相机</a>
            <a href="javascript:;">摄像机</a>
            <a href="javascript:;">镜头</a>
            <a href="javascript:;">户外器材</a>
            <a href="javascript:;">影棚器材</a>
            <a href="javascript:;">冲印服务</a>
            <a href="javascript:;">数码相框</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">数码配件</dt>
          <dd>
            <a href="javascript:;">存储卡</a>
            <a href="javascript:;">三脚架/云台</a>
            <a href="javascript:;">相机包</a>
            <a href="javascript:;">滤镜</a>
            <a href="javascript:;">闪关灯/手柄</a>
            <a href="javascript:;">相机清洁/贴膜</a>
            <a href="javascript:;">机身附件</a>
            <a href="javascript:;">读卡器</a>
            <a href="javascript:;">支架</a>
            <a href="javascript:;">电池/充电器</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">影音娱乐</dt>
          <dd>
            <a href="javascript:;">耳机/耳麦</a>
            <a href="javascript:;">音箱/音响</a>
            <a href="javascript:;">便携/无线音箱</a>
            <a href="javascript:;">收音机</a>
            <a href="javascript:;">麦克风</a>
            <a href="javascript:;">MP3/MP4</a>
            <a href="javascript:;">专业音频</a>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <a href="javascript:;">
            手机频道<span></span>
          </a>
          <a href="javascript:;">
            配件选购频道<span></span>
          </a>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 2 ? 'block' : 'none'}">
        <dl class="shopList-item clearfix">
          <dt class="fl">电脑整机</dt>
          <dd>
            <a href="javascript:;">笔记本</a>
            <a href="javascript:;">超极本</a>
            <a href="javascript:;">上网本</a>
            <a href="javascript:;">平板电脑</a>
            <a href="javascript:;">台式机</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">装机配件</dt>
          <dd>
            <a href="javascript:;">CPU</a>
            <a href="javascript:;">硬盘</a>
            <a href="javascript:;">SSD固态硬盘</a>
            <a href="javascript:;">内存</a>
            <a href="javascript:;">显示</a>
            <a href="javascript:;">器智能显示器</a>
            <a href="javascript:;">主板</a>
            <a href="javascript:;">显卡</a>
            <a href="javascript:;">机箱</a>
            <a href="javascript:;">电源</a>
            <a href="javascript:;">散热器</a>
            <a href="javascript:;">刻录机/光驱</a>
            <a href="javascript:;">声卡</a>
            <a href="javascript:;">拓展卡</a>
            <a href="javascript:;">服务器配件</a>
            <a href="javascript:;">DIY小附件</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">整机附件</dt>
          <dd>
            <a href="javascript:;">电脑包</a>
            <a href="javascript:;">电脑桌</a>
            <a href="javascript:;">电池</a>
            <a href="javascript:;">电源适配器</a>
            <a href="javascript:;">贴膜</a>
            <a href="javascript:;">清洁用品</a>
            <a href="javascript:;">笔记本散热</a>
            <a href="javascript:;">USB扩展</a>
            <a href="javascript:;">平板配件</a>
            <a href="javascript:;">特色附件</a>
            <a href="javascript:;">插在网线/电话线</a>
            <a href="javascript:;">影音线材</a>
            <a href="javascript:;">电脑线材</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">电脑外设</dt>
          <dd>
            <a href="javascript:;">鼠标</a>
            <a href="javascript:;">键盘</a>
            <a href="javascript:;">游戏外设</a>
            <a href="javascript:;">移动硬盘</a>
            <a href="javascript:;">摄像头</a>
            <a href="javascript:;">高清播放器</a>
            <a href="javascript:;">外置盒</a>
            <a href="javascript:;">移动硬盒包</a>
            <a href="javascript:;">手写板/绘图板</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">网络设备</dt>
          <dd>
            <a href="javascript:;">路由器</a>
            <a href="javascript:;">网卡</a>
            <a href="javascript:;">3G无线上网</a>
            <a href="javascript:;">交换机 网络存储</a>
            <a href="javascript:;">布线工具</a>
            <a href="javascript:;">网络配件</a>
            <a href="javascript:;">正版软件</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">音频设备</dt>
          <dd>
            <a href="javascript:;">音箱</a>
            <a href="javascript:;">耳机/耳麦</a>
            <a href="javascript:;">麦克风</a>
            <a href="javascript:;">声卡</a>
            <a href="javascript:;">音频附件</a>
            <a href="javascript:;">录音笔</a>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <a href="javascript:;">
            电脑整机频道<span></span>
          </a>
          <a href="javascript:;">
            硬件外设频道<span></span>
          </a>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 3 ? 'block' : 'none'}">
        <dl class="shopList-item clearfix">
          <dt class="fl">电视</dt>
          <dd>
            <a href="javascript:;">合资品牌</a>
            <a href="javascript:;">国产品牌</a>
            <a href="javascript:;">互联网品牌</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">空调</dt>
          <dd>
            <a href="javascript:;">壁挂式空调</a>
            <a href="javascript:;">柜式空调</a>
            <a href="javascript:;">中央空调</a>
            <a href="javascript:;">空调配件</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">冰箱</dt>
          <dd>
            <a href="javascript:;">多门</a>
            <a href="javascript:;">对开门</a>
            <a href="javascript:;">三门</a>
            <a href="javascript:;">双门</a>
            <a href="javascript:;">冷柜/冰吧</a>
            <a href="javascript:;">酒柜</a>
            <a href="javascript:;">冰箱配件</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">洗衣机</dt>
          <dd>
            <a href="javascript:;">滚筒洗衣机</a>
            <a href="javascript:;">洗烘一体机</a>
            <a href="javascript:;">波轮洗衣机</a>
            <a href="javascript:;">迷你洗衣机</a>
            <a href="javascript:;">洗衣机配件</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">厨卫大电</dt>
          <dd>
            <a href="javascript:;">油烟机</a>
            <a href="javascript:;">燃气灶</a>
            <a href="javascript:;">烟灶套装</a>
            <a href="javascript:;">消毒柜</a>
            <a href="javascript:;">洗碗机</a>
            <a href="javascript:;">电热水器</a>
            <a href="javascript:;">燃气热水器</a>
            <a href="javascript:;">嵌入式厨电</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">厨房小电</dt>
          <dd>
            <a href="javascript:;">电饭煲</a>
            <a href="javascript:;">微波炉</a>
            <a href="javascript:;">电烤箱</a>
            <a href="javascript:;">电磁炉</a>
            <a href="javascript:;">电压力锅</a>
            <a href="javascript:;">豆浆机</a>
            <a href="javascript:;">咖啡机</a>
            <a href="javascript:;">面包机</a>
            <a href="javascript:;">榨汁机</a>
            <a href="javascript:;">料理机</a>
            <a href="javascript:;">电饼铛</a>
            <a href="javascript:;">养生壶/煎药壶</a>
            <a href="javascript:;">酸奶机</a>
            <a href="javascript:;">煮蛋机</a>
            <a href="javascript:;">电水瓶/热水瓶</a>
            <a href="javascript:;">电炖锅</a>
            <a href="javascript:;">多用途锅</a>
            <a href="javascript:;">电烧烤炉</a>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <a href="javascript:;">
            家电频道<span></span>
          </a>
          <a href="javascript:;">
            智能生活频道<span></span>
          </a>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 4 ? 'block' : 'none'}">
        <dl class="shopList-item clearfix">
          <dt class="fl">生活电器 </dt>
          <dd>
            <a href="javascript:;">取暖电器</a>
            <a href="javascript:;">吸尘器</a>
            <a href="javascript:;">净化器</a>
            <a href="javascript:;">扫地机器人</a>
            <a href="javascript:;">加湿器</a>
            <a href="javascript:;">挂烫机/熨斗</a>
            <a href="javascript:;">电风扇</a>
            <a href="javascript:;">冷风扇</a>
            <a href="javascript:;">插座</a>
            <a href="javascript:;">电话机</a>
            <a href="javascript:;">饮水机</a>
            <a href="javascript:;">净水器</a>
            <a href="javascript:;">除湿机</a>
            <a href="javascript:;">清洁机</a>
            <a href="javascript:;">收录/音机</a>
            <a href="javascript:;">其它生活电器</a>
            <a href="javascript:;">生活电器配件</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">个护健康</dt>
          <dd>
            <a href="javascript:;">剃须刀</a>
            <a href="javascript:;">口腔护理</a>
            <a href="javascript:;">电吹风</a>
            <a href="javascript:;">美容器</a>
            <a href="javascript:;">卷/直发器</a>
            <a href="javascript:;">理发器</a>
            <a href="javascript:;">剃/脱毛器</a>
            <a href="javascript:;">足浴盆</a>
            <a href="javascript:;">健康秤/厨房秤</a>
            <a href="javascript:;">按摩器</a>
            <a href="javascript:;">按摩椅</a>
            <a href="javascript:;">其它健康电器</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">家庭影音</dt>
          <dd>
            <a href="javascript:;">家庭影院</a>
            <a href="javascript:;">迷你音响</a>
            <a href="javascript:;">DVD</a>
            <a href="javascript:;">电视影音配件</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">进口电器</dt>
          <dd>
            <a href="javascript:;">进口电器</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">厨具</dt>
          <dd>
            <a href="javascript:;">烹饪锅具</a>
            <a href="javascript:;">刀剪菜板</a>
            <a href="javascript:;">厨房配件</a>
            <a href="javascript:;">水具酒具</a>
            <a href="javascript:;">餐具</a>
            <a href="javascript:;">茶具/咖啡具</a>
            <a href="javascript:;">保温杯</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">厨房卫浴</dt>
          <dd>
            <a href="javascript:;">水槽</a>
            <a href="javascript:;">龙头</a>
            <a href="javascript:;">沐浴花洒</a>
            <a href="javascript:;">马桶</a>
            <a href="javascript:;">智能马桶</a>
            <a href="javascript:;">厨卫挂件</a>
            <a href="javascript:;">浴室柜</a>
            <a href="javascript:;">浴霸/换气扇</a>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <a href="javascript:;">
            厨房电器频道<span></span>
          </a>
          <a href="javascript:;">
            生活电器频道<span></span>
          </a>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 5 ? 'block' : 'none'}">
        <dl class="shopList-item clearfix">
          <dt class="fl">新鲜水果</dt>
          <dd>
            <a href="javascript:;">苹果</a>
            <a href="javascript:;">香蕉</a>
            <a href="javascript:;">梨</a>
            <a href="javascript:;">橙子</a>
            <a href="javascript:;">奇异果/猕猴桃</a>
            <a href="javascript:;">火龙果</a>
            <a href="javascript:;">瓜类</a>
            <a href="javascript:;">草莓</a>
            <a href="javascript:;">百香果</a>
            <a href="javascript:;">榴莲</a>
            <a href="javascript:;">国产水果</a>
            <a href="javascript:;">进口水果</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">蔬菜蛋品</dt>
          <dd>
            <a href="javascript:;">蛋品</a>
            <a href="javascript:;">叶菜类</a>
            <a href="javascript:;">根茎类</a>
            <a href="javascript:;">葱姜蒜椒</a>
            <a href="javascript:;">鲜菌菇</a>
            <a href="javascript:;">茄果瓜类</a>
            <a href="javascript:;">半加工蔬菜</a>
            <a href="javascript:;">玉米</a>
            <a href="javascript:;">山药</a>
            <a href="javascript:;">萝卜</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">精选肉类</dt>
          <dd>
            <a href="javascript:;">猪肉</a>
            <a href="javascript:;">牛肉</a>
            <a href="javascript:;">鸡肉</a>
            <a href="javascript:;">鸭肉</a>
            <a href="javascript:;">冷冻肉</a>
            <a href="javascript:;">特色肉</a>
            <a href="javascript:;">内脏肉</a>
            <a href="javascript:;">冷冻熟食</a>
            <a href="javascript:;">牛排</a>
            <a href="javascript:;">牛腩</a>
            <a href="javascript:;">鸡翅</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">海鲜水产</dt>
          <dd>
            <a href="javascript:;">鱼类</a>
            <a href="javascript:;">虾类</a>
            <a href="javascript:;">蟹类</a>
            <a href="javascript:;">贝类</a>
            <a href="javascript:;">海参</a>
            <a href="javascript:;">活鲜</a>
            <a href="javascript:;">特色水产</a>
            <a href="javascript:;">三文鱼</a>
            <a href="javascript:;">扇贝</a>
            <a href="javascript:;">帝王蟹</a>
            <a href="javascript:;">海产礼品</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">冷饮冻食</dt>
          <dd>
            <a href="javascript:;">水饺/混沌</a>
            <a href="javascript:;">汤圆/元宵</a>
            <a href="javascript:;">面点/面食</a>
            <a href="javascript:;">奶酪/黄油</a>
            <a href="javascript:;">速冻半成品</a>
            <a href="javascript:;">火锅丸串</a>
            <a href="javascript:;">冰淇淋</a>
            <a href="javascript:;">冷藏果蔬汁</a>
            <a href="javascript:;">低温乳品</a>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">进口食品</dt>
          <dd>
            <a href="javascript:;">牛奶</a>
            <a href="javascript:;">饼干蛋糕</a>
            <a href="javascript:;">糖果/巧克力</a>
            <a href="javascript:;">休闲零食</a>
            <a href="javascript:;">冲调饮品</a>
            <a href="javascript:;">粮油调味</a>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <a href="javascript:;">
            食品饮料频道<span></span>
          </a>
          <a href="javascript:;">
            生鲜频道<span></span>
          </a>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
    </div>
    <!-- 商品列表 e -->
  </div>
</template>

<script>
  export default {

    //组件名称
    name: 'shopClassBar',

    data() {
      return {

        //当前选中的商品分类的索引
        selectIndex: 0
      };
    }
  };
</script>

<style scoped>
  .shopClassBar {
    width: 189px;
    height: 320px;
    position: relative;
  }

  .shopClass-show {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .shopClass-show .shopClass-item {
    width: 179px;
    height: 47px;
    padding: 15px 0 0 10px;
    background-color: #4593fd;
    border-top: solid 1px #5aa1fe;
    border-bottom: solid 1px #3487f2;
  }

  .shopClass-item dt {
    height: 25px;
    background: url(../assets/images/icon/arrow-right.png) 162px center no-repeat;
    font-size: 14px;
  }

  .shopClass-item dt a {
    color: #fff;
  }

  .shopClass-item dt .aLink {
    width: 48px;
    height: 20px;
    line-height: 20px;
    background: url(../assets/images/icon/aLink.png) left center no-repeat;
    text-align: center;
    text-decoration: underline;
    font-size: 12px;
    display: inline-block;
  }

  .shopClass-item dd {
    font-family: 宋体, SimSun;
    font-size: 12px;
  }

  .shopClass-item dd a {
    color: #c2d9f8;
  }

  .shopClass-show dl.current {
    width: 178px;
    background-color: #fff;
    border-left: solid 1px #4593fd;
    border-right: solid 1px #fff;
    color: #000;
    z-index: 5;
    position: relative;
  }

  .shopClass-show dl.current dt {
    background: none;
  }

  .shopClass-show dl.current a {
    color: #000;
  }

  .shopClass-show dl.current .aLink {
    text-decoration: none;
    color: #fff;
  }

  .shopClass-show dl a:hover,
  .shopClass-show dl .aLink:hover {
    color: #c81623;
  }

  .cate-item {
    width: 530px;
    padding: 0 20px 0 20px;
    border: solid 1px #e5e5e5;
    background-color: #fff;
    z-index: 4;
    display: none;
    position: absolute;
    top: 0px;
    left: 189px;
  }

  .cate-item dl {
    margin-top: 18px;
    font-family: 宋体;
    font-size: 12px;
    border-bottom: 1px solid rgb(229, 229, 229);
  }

  .shopList-item dt {
    width: 68px;
    height: 27px;
    font-weight: bold;
    color: #4b88da;
  }

  .shopList-item dd a {
    height: 26px;
    color: #666666;
    display: inline-block;
  }

  .shopList-links a {
    padding: 0px 14px 0px 8px;
    margin: 6px 10px 6px 0px;
    background-color: rgb(39, 133, 230);
    font: 12px/26px 宋体;
    color: #fff;
    display: inline-block;
  }

  .shopList-links a span {
    width: 5px;
    height: 8px;
    margin-left: 8px;
    background: url(../assets/images/icon/arrow.png) left center no-repeat;
    display: inline-block;
  }

  .cate-item a:hover {
    color: #c81623;
  }

  .shopList-links a:hover {
    color: #fff;
  }
</style>
