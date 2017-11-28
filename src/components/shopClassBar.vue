<!-- 商品分类导航组件 -->

<template>
  <div class="shopClassBar" @mouseleave="selectIndex = 0">

    <!-- 商品类别列表 s -->
    <div class="shopClass-show">
      <dl class="shopClass-item" @mouseenter="selectIndex = 1" v-bind:class="{current: selectIndex == 1}">
        <dt>
          <router-link to="/select">手机</router-link>
           <router-link to="/select">数码</router-link>
          <router-link class="aLink" to="/select">合约机</router-link>
        </dt>
        <dd>
          <router-link to="/select">荣耀3X</router-link>
          <router-link to="/select">单反</router-link>
          <router-link to="/select">智能设备</router-link>
        </dd>
      </dl>
      <dl class="shopClass-item" @mouseenter="selectIndex = 2" v-bind:class="{current: selectIndex == 2}">
        <dt>
          <router-link to="/select">电脑</router-link>
          <router-link to="/select">硬件外设</router-link>
          <router-link class="aLink" to="/select">装机宝</router-link>
        </dt>
        <dd>
          <router-link to="/select">笔记本</router-link>
          <router-link to="/select">台式机</router-link>
          <router-link to="/select">超极本</router-link>
          <router-link to="/select"> 平板</router-link>
        </dd>
      </dl>
      <dl class="shopClass-item" @mouseenter="selectIndex = 3" v-bind:class="{current: selectIndex == 3}">
        <dt>
          <router-link to="/select">大家电</router-link>
        </dt>
        <dd>
          <router-link to="/select">电视</router-link>
          <router-link to="/select">空调</router-link>
          <router-link to="/select">冰箱</router-link>
          <router-link to="/select">洗衣机</router-link>
        </dd>
      </dl>
      <dl class="shopClass-item" @mouseenter="selectIndex = 4" v-bind:class="{current: selectIndex == 4}">
        <dt>
          <router-link to="/select">厨房电器</router-link>
          <router-link to="/select">生活电器</router-link>
        </dt>
        <dd>
          <router-link to="/select">空气净化器</router-link>
          <router-link to="/select">微波炉</router-link>
          <router-link to="/select">取暖设备</router-link>
        </dd>
      </dl>
      <dl class="shopClass-item" @mouseenter="selectIndex = 5" v-bind:class="{current: selectIndex == 5}">
        <dt>
          <router-link to="/select">食品</router-link>
          <router-link to="/select">饮料</router-link>
          <router-link to="/select">生鲜</router-link>
          <router-link class="aLink" to="/select">粮油</router-link>
        </dt>
        <dd>
          <router-link to="/select">进口</router-link>
          <router-link to="/select">方便面</router-link>
          <router-link to="/select">零食</router-link>
          <router-link to="/select">保健</router-link>
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
            <router-link to="/select">手机</router-link>
            <router-link to="/select">对讲机</router-link>
            <router-link to="/select">以久换新</router-link>
            <router-link to="/select">手机维修</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">运营商</dt>
          <dd>
            <router-link to="/select">充话费/流量</router-link>
            <router-link to="/select">170选号</router-link>
            <router-link to="/select">合约机</router-link>
            <router-link to="/select">办套餐</router-link>
            <router-link to="/select">选号码</router-link>
            <router-link to="/select">固话宽带</router-link>
            <router-link to="/select">中国移动</router-link>
            <router-link to="/select">中国联通</router-link>
            <router-link to="/select">中国电信</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">手机配件</dt>
          <dd>
            <router-link to="/select">手机壳</router-link>
            <router-link to="/select">贴膜</router-link>
            <router-link to="/select">手机存储卡</router-link>
            <router-link to="/select">数据线</router-link>
            <router-link to="/select">充电器</router-link>
            <router-link to="/select">手机耳机</router-link>
            <router-link to="/select">创意配件</router-link>
            <router-link to="/select">手机饰品</router-link>
            <router-link to="/select">手机电池</router-link>
            <router-link to="/select">苹果周边</router-link>
            <router-link to="/select">移动电源</router-link>
            <router-link to="/select">蓝牙耳机</router-link>
            <router-link to="/select">手机支架</router-link>
            <router-link to="/select">车载支架</router-link>
            <router-link to="/select">拍照配件</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">摄影摄像</dt>
          <dd>
            <router-link to="/select">数码相机</router-link>
            <router-link to="/select">单电/微单相机</router-link>
            <router-link to="/select">单反相机</router-link>
            <router-link to="/select">拉立得</router-link>
            <router-link to="/select">运动相机</router-link>
            <router-link to="/select">摄像机</router-link>
            <router-link to="/select">镜头</router-link>
            <router-link to="/select">户外器材</router-link>
            <router-link to="/select">影棚器材</router-link>
            <router-link to="/select">冲印服务</router-link>
            <router-link to="/select">数码相框</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">数码配件</dt>
          <dd>
            <router-link to="/select">存储卡</router-link>
            <router-link to="/select">三脚架/云台</router-link>
            <router-link to="/select">相机包</router-link>
            <router-link to="/select">滤镜</router-link>
            <router-link to="/select">闪关灯/手柄</router-link>
            <router-link to="/select">相机清洁/贴膜</router-link>
            <router-link to="/select">机身附件</router-link>
            <router-link to="/select">读卡器</router-link>
            <router-link to="/select">支架</router-link>
            <router-link to="/select">电池/充电器</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">影音娱乐</dt>
          <dd>
             <router-link to="/select">耳机/耳麦</router-link>
             <router-link to="/select">音箱/音响</router-link>
             <router-link to="/select">便携/无线音箱</router-link>
             <router-link to="/select">收音机</router-link>
             <router-link to="/select">麦克风</router-link>
             <router-link to="/select">MP3/MP4</router-link>
             <router-link to="/select">专业音频</router-link>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <router-link to="/select">手机频道<span></span></router-link>
          <router-link to="/select">配件选购频道<span></span></router-link>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 2 ? 'block' : 'none'}">
        <dl class="shopList-item clearfix">
          <dt class="fl">电脑整机</dt>
          <dd>
            <router-link to="/select">笔记本</router-link>
            <router-link to="/select">超极本</router-link>
            <router-link to="/select">上网本</router-link>
            <router-link to="/select">平板电脑</router-link>
            <router-link to="/select">台式机</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">装机配件</dt>
          <dd>
            <router-link to="/select">CPU</router-link>
            <router-link to="/select">硬盘</router-link>
            <router-link to="/select">SSD固态硬盘</router-link>
            <router-link to="/select">内存</router-link>
            <router-link to="/select">显示</router-link>
            <router-link to="/select">器智能显示器</router-link>
            <router-link to="/select">主板</router-link>
            <router-link to="/select">显卡</router-link>
            <router-link to="/select">机箱</router-link>
            <router-link to="/select">电源</router-link>
            <router-link to="/select">散热器</router-link>
            <router-link to="/select">刻录机/光驱</router-link>
            <router-link to="/select">声卡</router-link>
            <router-link to="/select">拓展卡</router-link>
            <router-link to="/select">服务器配件</router-link>
            <router-link to="/select">DIY小附件</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">整机附件</dt>
          <dd>
            <router-link to="/select">电脑包</router-link>
            <router-link to="/select">电脑桌</router-link>
            <router-link to="/select">电池</router-link>
            <router-link to="/select">电源适配器</router-link>
            <router-link to="/select">贴膜</router-link>
            <router-link to="/select">清洁用品</router-link>
            <router-link to="/select">笔记本散热</router-link>
            <router-link to="/select">USB扩展</router-link>
            <router-link to="/select">平板配件</router-link>
            <router-link to="/select">特色附件</router-link>
            <router-link to="/select">插在网线/电话线</router-link>
            <router-link to="/select">影音线材</router-link>
            <router-link to="/select">电脑线材</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">电脑外设</dt>
          <dd>
            <router-link to="/select">鼠标</router-link>
            <router-link to="/select">键盘</router-link>
            <router-link to="/select">游戏外设</router-link>
            <router-link to="/select">移动硬盘</router-link>
            <router-link to="/select">摄像头</router-link>
            <router-link to="/select">高清播放器</router-link>
            <router-link to="/select">外置盒</router-link>
            <router-link to="/select">移动硬盒包</router-link>
            <router-link to="/select">手写板/绘图板</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">网络设备</dt>
          <dd>
            <router-link to="/select">路由器</router-link>
            <router-link to="/select">网卡</router-link>
            <router-link to="/select">3G无线上网</router-link>
            <router-link to="/select">交换机 网络存储</router-link>
            <router-link to="/select">布线工具</router-link>
            <router-link to="/select">网络配件</router-link>
            <router-link to="/select">正版软件</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">音频设备</dt>
          <dd>
            <router-link to="/select">音箱</router-link>
            <router-link to="/select">耳机/耳麦</router-link>
            <router-link to="/select">麦克风</router-link>
            <router-link to="/select">声卡</router-link>
            <router-link to="/select">音频附件</router-link>
            <router-link to="/select">录音笔</router-link>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <router-link to="/select">电脑整机频道<span></span></router-link>
          <router-link to="/select">硬件外设频道<span></span></router-link>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 3 ? 'block' : 'none'}">
        <dl class="shopList-item clearfix">
          <dt class="fl">电视</dt>
          <dd>
            <router-link to="/select">合资品牌</router-link>
            <router-link to="/select">国产品牌</router-link>
            <router-link to="/select">互联网品牌</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">空调</dt>
          <dd>
            <router-link to="/select">壁挂式空调</router-link>
            <router-link to="/select">柜式空调</router-link>
            <router-link to="/select">中央空调</router-link>
            <router-link to="/select">空调配件</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">冰箱</dt>
          <dd>
            <router-link to="/select">多门</router-link>
            <router-link to="/select">对开门</router-link>
            <router-link to="/select">三门</router-link>
            <router-link to="/select">双门</router-link>
            <router-link to="/select">冷柜/冰吧</router-link>
            <router-link to="/select">酒柜</router-link>
            <router-link to="/select">冰箱配件</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">洗衣机</dt>
          <dd>
            <router-link to="/select">滚筒洗衣机</router-link>
            <router-link to="/select">洗烘一体机</router-link>
            <router-link to="/select">波轮洗衣机</router-link>
            <router-link to="/select">迷你洗衣机</router-link>
            <router-link to="/select">洗衣机配件</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">厨卫大电</dt>
          <dd>
            <router-link to="/select">油烟机</router-link>
            <router-link to="/select">燃气灶</router-link>
            <router-link to="/select">烟灶套装</router-link>
            <router-link to="/select">消毒柜</router-link>
            <router-link to="/select">洗碗机</router-link>
            <router-link to="/select">电热水器</router-link>
            <router-link to="/select">燃气热水器</router-link>
            <router-link to="/select">嵌入式厨电</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">厨房小电</dt>
          <dd>
            <router-link to="/select">电饭煲</router-link>
            <router-link to="/select">微波炉</router-link>
            <router-link to="/select">电烤箱</router-link>
            <router-link to="/select">电磁炉</router-link>
            <router-link to="/select">电压力锅</router-link>
            <router-link to="/select">豆浆机</router-link>
            <router-link to="/select">咖啡机</router-link>
            <router-link to="/select">面包机</router-link>
            <router-link to="/select">榨汁机</router-link>
            <router-link to="/select">料理机</router-link>
            <router-link to="/select">电饼铛</router-link>
            <router-link to="/select">养生壶/煎药壶</router-link>
            <router-link to="/select">酸奶机</router-link>
            <router-link to="/select">煮蛋机</router-link>
            <router-link to="/select">电水瓶/热水瓶</router-link>
            <router-link to="/select">电炖锅</router-link>
            <router-link to="/select">多用途锅</router-link>
            <router-link to="/select">电烧烤炉</router-link>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <router-link to="/select">家电频道<span></span></router-link>
          <router-link to="/select">智能生活频道<span></span></router-link>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 4 ? 'block' : 'none'}">
        <dl class="shopList-item clearfix">
          <dt class="fl">生活电器 </dt>
          <dd>
            <router-link to="/select">取暖电器</router-link>
            <router-link to="/select">吸尘器</router-link>
            <router-link to="/select">净化器</router-link>
            <router-link to="/select">扫地机器人</router-link>
            <router-link to="/select">加湿器</router-link>
            <router-link to="/select">挂烫机/熨斗</router-link>
            <router-link to="/select">电风扇</router-link>
            <router-link to="/select">冷风扇</router-link>
            <router-link to="/select">插座</router-link>
            <router-link to="/select">电话机</router-link>
            <router-link to="/select">饮水机</router-link>
            <router-link to="/select">净水器</router-link>
            <router-link to="/select">除湿机</router-link>
            <router-link to="/select">清洁机</router-link>
            <router-link to="/select">收录/音机</router-link>
            <router-link to="/select">其它生活电器</router-link>
            <router-link to="/select">生活电器配件</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">个护健康</dt>
          <dd>
            <router-link to="/select">剃须刀</router-link>
            <router-link to="/select">口腔护理</router-link>
            <router-link to="/select">电吹风</router-link>
            <router-link to="/select">美容器</router-link>
            <router-link to="/select">卷/直发器</router-link>
            <router-link to="/select">理发器</router-link>
            <router-link to="/select">剃/脱毛器</router-link>
            <router-link to="/select">足浴盆</router-link>
            <router-link to="/select">健康秤/厨房秤</router-link>
            <router-link to="/select">按摩器</router-link>
            <router-link to="/select">按摩椅</router-link>
            <router-link to="/select">其它健康电器</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">家庭影音</dt>
          <dd>
            <router-link to="/select">家庭影院</router-link>
            <router-link to="/select">迷你音响</router-link>
            <router-link to="/select">DVD</router-link>
            <router-link to="/select">电视影音配件</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">进口电器</dt>
          <dd>
            <router-link to="/select">进口电器</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">厨具</dt>
          <dd>
            <router-link to="/select">烹饪锅具</router-link>
            <router-link to="/select">刀剪菜板</router-link>
            <router-link to="/select">厨房配件</router-link>
            <router-link to="/select">水具酒具</router-link>
            <router-link to="/select">餐具</router-link>
            <router-link to="/select">茶具/咖啡具</router-link>
            <router-link to="/select">保温杯</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">厨房卫浴</dt>
          <dd>
            <router-link to="/select">水槽</router-link>
            <router-link to="/select">龙头</router-link>
            <router-link to="/select">沐浴花洒</router-link>
            <router-link to="/select">马桶</router-link>
            <router-link to="/select">智能马桶</router-link>
            <router-link to="/select">厨卫挂件</router-link>
            <router-link to="/select">浴室柜</router-link>
            <router-link to="/select">浴霸/换气扇</router-link>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <router-link to="/select">厨房电器频道<span></span></router-link>
          <router-link to="/select">生活电器频道<span></span></router-link>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 5 ? 'block' : 'none'}">
        <dl class="shopList-item clearfix">
          <dt class="fl">新鲜水果</dt>
          <dd>
            <router-link to="/select">苹果</router-link>
            <router-link to="/select">香蕉</router-link>
            <router-link to="/select">梨</router-link>
            <router-link to="/select">橙子</router-link>
            <router-link to="/select">奇异果/猕猴桃</router-link>
            <router-link to="/select">火龙果</router-link>
            <router-link to="/select">瓜类</router-link>
            <router-link to="/select">草莓</router-link>
            <router-link to="/select">百香果</router-link>
            <router-link to="/select">榴莲</router-link>
            <router-link to="/select">国产水果</router-link>
            <router-link to="/select">进口水果</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">蔬菜蛋品</dt>
          <dd>
            <router-link to="/select">蛋品</router-link>
            <router-link to="/select">叶菜类</router-link>
            <router-link to="/select">根茎类</router-link>
            <router-link to="/select">葱姜蒜椒</router-link>
            <router-link to="/select">鲜菌菇</router-link>
            <router-link to="/select">茄果瓜类</router-link>
            <router-link to="/select">半加工蔬菜</router-link>
            <router-link to="/select">玉米</router-link>
            <router-link to="/select">山药</router-link>
            <router-link to="/select">萝卜</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">精选肉类</dt>
          <dd>
            <router-link to="/select">猪肉</router-link>
            <router-link to="/select">牛肉</router-link>
            <router-link to="/select">鸡肉</router-link>
            <router-link to="/select">鸭肉</router-link>
            <router-link to="/select">冷冻肉</router-link>
            <router-link to="/select">特色肉</router-link>
            <router-link to="/select">内脏肉</router-link>
            <router-link to="/select">冷冻熟食</router-link>
            <router-link to="/select">牛排</router-link>
            <router-link to="/select">牛腩</router-link>
            <router-link to="/select">鸡翅</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">海鲜水产</dt>
          <dd>
            <router-link to="/select">鱼类</router-link>
            <router-link to="/select">虾类</router-link>
            <router-link to="/select">蟹类</router-link>
            <router-link to="/select">贝类</router-link>
            <router-link to="/select">海参</router-link>
            <router-link to="/select">活鲜</router-link>
            <router-link to="/select">特色水产</router-link>
            <router-link to="/select">三文鱼</router-link>
            <router-link to="/select">扇贝</router-link>
            <router-link to="/select">帝王蟹</router-link>
            <router-link to="/select">海产礼品</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">冷饮冻食</dt>
          <dd>
            <router-link to="/select">水饺/混沌</router-link>
            <router-link to="/select">汤圆/元宵</router-link>
            <router-link to="/select">面点/面食</router-link>
            <router-link to="/select">奶酪/黄油</router-link>
            <router-link to="/select">速冻半成品</router-link>
            <router-link to="/select">火锅丸串</router-link>
            <router-link to="/select">冰淇淋</router-link>
            <router-link to="/select">冷藏果蔬汁</router-link>
            <router-link to="/select">低温乳品</router-link>
          </dd>
        </dl>
        <dl class="shopList-item clearfix">
          <dt class="fl">进口食品</dt>
          <dd>
            <router-link to="/select">牛奶</router-link>
            <router-link to="/select">饼干蛋糕</router-link>
            <router-link to="/select">糖果/巧克力</router-link>
            <router-link to="/select">休闲零食</router-link>
            <router-link to="/select">冲调饮品</router-link>
            <router-link to="/select">粮油调味</router-link>
          </dd>
        </dl>

        <!-- 商品列表底部的两个按钮 s -->
        <div class="shopList-links">
          <router-link to="/select">
            食品饮料频道<span></span>
          </router-link>
          <router-link to="/select">
            生鲜频道<span></span>
          </router-link>
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
