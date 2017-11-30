<!-- 商品分类导航组件 -->

<template>
  <div class="product-cate-nav" @mouseleave="selectIndex = 0">

    <!-- 商品类别列表 s -->
    <div class="product-cate-show">
      <dl class="product-cate-item" @mouseenter="selectIndex = 1" v-bind:class="{current: selectIndex == 1}">
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
      <dl class="product-cate-item" @mouseenter="selectIndex = 2" v-bind:class="{current: selectIndex == 2}">
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
      <dl class="product-cate-item" @mouseenter="selectIndex = 3" v-bind:class="{current: selectIndex == 3}">
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
      <dl class="product-cate-item" @mouseenter="selectIndex = 4" v-bind:class="{current: selectIndex == 4}">
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
      <dl class="product-cate-item" @mouseenter="selectIndex = 5" v-bind:class="{current: selectIndex == 5}">
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
    <div class="product-cate-list">
      <div class="cate-item" v-bind:style="{display: selectIndex == 1 ? 'block' : 'none'}">
        <dl class="product-list-item clearfix">
          <dt class="fl">手机通讯</dt>
          <dd>
            <router-link to="/select">手机</router-link>
            <router-link to="/select">对讲机</router-link>
            <router-link to="/select">以久换新</router-link>
            <router-link to="/select">手机维修</router-link>
          </dd>
        </dl>
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <div class="product-list-links">
          <router-link to="/select">手机频道<span></span></router-link>
          <router-link to="/select">配件选购频道<span></span></router-link>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 2 ? 'block' : 'none'}">
        <dl class="product-list-item clearfix">
          <dt class="fl">电脑整机</dt>
          <dd>
            <router-link to="/select">笔记本</router-link>
            <router-link to="/select">超极本</router-link>
            <router-link to="/select">上网本</router-link>
            <router-link to="/select">平板电脑</router-link>
            <router-link to="/select">台式机</router-link>
          </dd>
        </dl>
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <div class="product-list-links">
          <router-link to="/select">电脑整机频道<span></span></router-link>
          <router-link to="/select">硬件外设频道<span></span></router-link>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 3 ? 'block' : 'none'}">
        <dl class="product-list-item clearfix">
          <dt class="fl">电视</dt>
          <dd>
            <router-link to="/select">合资品牌</router-link>
            <router-link to="/select">国产品牌</router-link>
            <router-link to="/select">互联网品牌</router-link>
          </dd>
        </dl>
        <dl class="product-list-item clearfix">
          <dt class="fl">空调</dt>
          <dd>
            <router-link to="/select">壁挂式空调</router-link>
            <router-link to="/select">柜式空调</router-link>
            <router-link to="/select">中央空调</router-link>
            <router-link to="/select">空调配件</router-link>
          </dd>
        </dl>
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
          <dt class="fl">洗衣机</dt>
          <dd>
            <router-link to="/select">滚筒洗衣机</router-link>
            <router-link to="/select">洗烘一体机</router-link>
            <router-link to="/select">波轮洗衣机</router-link>
            <router-link to="/select">迷你洗衣机</router-link>
            <router-link to="/select">洗衣机配件</router-link>
          </dd>
        </dl>
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <div class="product-list-links">
          <router-link to="/select">家电频道<span></span></router-link>
          <router-link to="/select">智能生活频道<span></span></router-link>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 4 ? 'block' : 'none'}">
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
          <dt class="fl">家庭影音</dt>
          <dd>
            <router-link to="/select">家庭影院</router-link>
            <router-link to="/select">迷你音响</router-link>
            <router-link to="/select">DVD</router-link>
            <router-link to="/select">电视影音配件</router-link>
          </dd>
        </dl>
        <dl class="product-list-item clearfix">
          <dt class="fl">进口电器</dt>
          <dd>
            <router-link to="/select">进口电器</router-link>
          </dd>
        </dl>
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <div class="product-list-links">
          <router-link to="/select">厨房电器频道<span></span></router-link>
          <router-link to="/select">生活电器频道<span></span></router-link>
        </div>
        <!-- 商品列表底部的两个按钮 e -->
      </div>
      <div class="cate-item" v-bind:style="{display: selectIndex == 5 ? 'block' : 'none'}">
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <dl class="product-list-item clearfix">
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
        <div class="product-list-links">
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
    name: 'productClassNav',

    data() {
      return {

        //当前选中的商品分类的索引
        selectIndex: 0,

        //商品分类列表
        productCateList: {
          'leftCata': [
            {
              'title': ['手机', '数码'],
              'selectTitle': '合约机',
              'content': ['荣耀3X', '单反', '智能设备']
            },
            {
              'title': ['电脑', '硬件外设'],
              'selectTitle': '装机宝',
              'content': ['笔记本', '台式机', '超级本', '平板']
            },
            {
              'title': ['大家电'],
              'selectTitle': null,
              'content': ['电视', '空调', '冰箱', '洗衣机']
            },
            {
              'title': ['厨房电器', '生活电器'],
              'selectTitle': null,
              'content': ['空气净化器', '微波炉', '取暖设备']
            },
            {
              'title': ['食品', '饮料', '生鲜'],
              'selectTitle': '粮油',
              'content': ['进口', '方便面', '零食', '保健']
            }
          ],
          'rightCate': [
            {
              'page': [
                {
                  'title': '手机通讯',
                  'content': ['手机', '对讲机', '以久换新', '手机维修']
                },
                {
                  'title': '运营商',
                  'content': ['充话费/流量', '170选号', '合约机', '办套餐', '选号码', '固话宽带',
                    '中国联通', '中国电信']
                },
                {
                  'title': '手机配件',
                  'content': ['手机壳', '贴膜', '手机存储卡', '数据线', '充电器', '手机耳机', '创意配件',
                  '手机饰品', '手机电池', '苹果周边', '移动电源', '蓝牙耳机', '手机支架', '车载支架', '拍照配件']
                },
                {
                  'title': '摄影摄像',
                  'content': ['数码相机', '单电/微单相机', '单反相机', '拉力得', '运动相机', '摄像机', '镜头',
                  '户外器材', '影棚器材', '冲印服务', '数码相框']
                },
                {
                  'title': '数码配件',
                  'content': ['存储卡', '三脚架/云台', '相机包', '滤镜', '闪光灯/贴膜', '机身附件', '读卡器',
                  '支架', '电池/充电器']
                },
                {
                  'title': '影音娱乐',
                  'content': ['耳机/耳麦', '音箱/音响', '便携/无线音箱', '收音机', '麦克风', 'MP3/MP4', '专业音频']
                }
              ],
              'button': ['手机频道', '配件选购频道按钮']
            },
            {
              'page': [
                {
                  'title': '电脑整机',
                  'content': ['笔记本', '超极本', '上网本', '平板电脑', '台式机']
                },
                {
                  'title': '装机配件',
                  'content': ['CPU', '硬盘', 'SSD固态硬盘', '内存', '显卡', '智能显示器', '主板', '显卡', '机箱',
                  '电源', '散热器', '刻录机/光驱', '声卡', '扩展卡', '服务器配件', 'DIY小附件']
                },
                {
                  'title': '整机附件',
                  'content': ['电脑包', '电脑桌', '电池', '电源适配器', '贴膜', '清洁用品', '笔记本散热',
                  'USB扩展', '平板配件', '特色附件', '插在网线/电话线', '影音线材', '电脑线材']
                },
                {
                  'title': '电脑外设',
                  'content': ['鼠标', '键盘', '游戏外设', '移动硬盘', '摄像头', '外置盒', '移动硬盒包', '手写板/绘图板']
                },
                {
                  'title': '网络设备',
                  'content': ['路由器', '网卡', '3G无线上网', '交换机', '网络存储', '布线工具', '网络配件', '正版软件']
                },
                {
                  'title': '音频设备',
                  'content': ['音箱', '耳机/耳麦', '麦克风', '声卡', '音频附件', '录音笔']
                }
              ],
              'button': ['电脑整机频道', '硬件外设频道']
            },
            {
              'page': [
                {
                  'title': '电视',
                  'content': ['合资品牌', '国产品牌', '互联网品牌']
                },
                {
                  'title': '空调',
                  'content': ['壁挂空调', '柜式空调', '中央空调', '空调配件']
                },
                {
                  'title': '冰箱',
                  'content': ['多门', '对开门', '双门', '冷柜/冰吧', '酒柜', '冰箱配件']
                },
                {
                  'title': '洗衣机',
                  'content': ['滚筒洗衣机', '洗烘一体机', '波轮洗衣机', '迷你洗衣机', '洗衣配件']
                },
                {
                  'title': '厨卫大电',
                  'content': ['油烟机', '燃气灶', '烟灶套装', '消毒柜', '洗碗机', '电热水器', '燃气热水器', '嵌入式厨电']
                },
                {
                  'title': '厨房小电',
                  'content': ['电饭煲', '微波炉', '电烤箱', '电磁炉', '电压力锅', '豆浆机', '咖啡机', '面包机',
                  '榨汁机', '料理机', '电饼铛', '养生壶/煎药壶', '酸奶机', '蒸蛋机', '电水瓶/热水瓶',
                  '电炖锅', '多用途锅', '电烧烤炉']
                }
              ],
              'button': ['家电频道', '智能生活频道']
            },
            {
              'page': [
                {
                  'title': '生活电器',
                  'content': ['取暖电器', '吸尘器', '净化器', '扫地机器人', '加湿器', '挂烫机/熨斗', '电风扇',
                  '冷风扇', '插座', '电话机', '饮水机', '净化器', '除湿机', '清洁机', '收录/音机',
                  '其它生活电器', '生活电器配件']
                },
                {
                  'title': '个护健康',
                  'content': ['剃须刀', '口腔护理', '电吹风', '美容器', '卷/直发器', '理发器', '剃/脱毛器',
                  '足浴盆', '健康秤/厨房秤', '按摩器', '按摩椅', '其它健康电器']
                },
                {
                  'title': '家庭影音',
                  'content': ['家庭影院', '迷你音响', 'DVD', '电视影音配件']
                },
                {
                  'title': '进口电器',
                  'content': '进口电器'
                },
                {
                  'title': '厨具',
                  'content': ['烹饪厨具', '刀剪菜板', '厨房配件', '水具酒具', '餐具', '茶具/咖啡具', '保温杯']
                },
                {
                  'title': '厨房卫浴',
                  'content': ['水槽', '龙头', '沐浴花洒', '马桶', '智能马桶', '厨卫挂件', '浴室柜', '浴霸/换气扇']
                }
              ],
              'button': ['厨房电器频道', '生活电器频道']
            },
            {
              'page': [
                {
                  'title': '新鲜水果',
                  'content': ['苹果', '香蕉', '梨', '橙子', '奇异果/猕猴桃', '火龙果', '瓜类', '草莓', '百香果',
                  '榴莲', '国产水果', '进口水果']
                },
                {
                  'title': '蔬菜蛋品',
                  'content': ['蛋品', '叶菜类', '根茎类', '葱姜蒜椒', '鲜菌菇', '茄果瓜类', '半加工蔬菜',
                  '玉米', '山药', '萝卜']
                },
                {
                  'title': '精选肉类',
                  'content': ['猪肉', '牛肉', '鸡肉', '鸭肉', '冷冻肉', '特色肉', '内脏肉', '冷冻熟食', '牛排',
                  '牛腩', '鸡翅']
                },
                {
                  'title': '海鲜水产',
                  'content': ['鱼类', '虾类', '蟹类', '贝类', '海参', '活鲜', '特色水产', '三文鱼', '扇贝',
                  '帝王蟹', '海产礼品']
                },
                {
                  'title': '冻饮冻食',
                  'content': ['水饺/混沌', '汤圆/元宵', '面点/面食', '奶酪/黄油', '速冻半成品', '火锅丸串',
                  '冰淇淋', '冷藏果蔬汁', '低温乳品']
                },
                {
                  'title': '进口食品',
                  'content': ['牛奶', '饼干蛋糕', '糖果/巧克力', '休闲零食', '冲调饮品', '粮油调味']
                }
              ],
              'button': ['食品饮料频道', '生鲜频道']
            }
          ]
        }
      };
    }
  };
</script>

<style scoped>
  .product-cate-nav {
    width: 189px;
    height: 320px;
    position: relative;
  }

  .product-cate-show {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .product-cate-show .product-cate-item {
    width: 179px;
    height: 47px;
    padding: 15px 0 0 10px;
    background-color: #4593fd;
    border-top: solid 1px #5aa1fe;
    border-bottom: solid 1px #3487f2;
  }

  .product-cate-item dt {
    height: 25px;
    background: url(../assets/images/icon/arrow-right.png) 162px center no-repeat;
    font-size: 14px;
  }

  .product-cate-item dt a {
    color: #fff;
  }

  .product-cate-item dt .aLink {
    width: 48px;
    height: 20px;
    line-height: 20px;
    background: url(../assets/images/icon/aLink.png) left center no-repeat;
    text-align: center;
    text-decoration: underline;
    font-size: 12px;
    display: inline-block;
  }

  .product-cate-item dd {
    font-family: 宋体, SimSun;
    font-size: 12px;
  }

  .product-cate-item dd a {
    color: #c2d9f8;
  }

  .product-cate-show dl.current {
    width: 178px;
    background-color: #fff;
    border-left: solid 1px #4593fd;
    border-right: solid 1px #fff;
    color: #000;
    z-index: 5;
    position: relative;
  }

  .product-cate-show dl.current dt {
    background: none;
  }

  .product-cate-show dl.current a {
    color: #000;
  }

  .product-cate-show dl.current .aLink {
    text-decoration: none;
    color: #fff;
  }

  .product-cate-show dl a:hover,
  .product-cate-show dl .aLink:hover {
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

  .product-list-item dt {
    width: 68px;
    height: 27px;
    font-weight: bold;
    color: #4b88da;
  }

  .product-list-item dd a {
    height: 26px;
    color: #666666;
    display: inline-block;
  }

  .product-list-links a {
    padding: 0px 14px 0px 8px;
    margin: 6px 10px 6px 0px;
    background-color: rgb(39, 133, 230);
    font: 12px/26px 宋体;
    color: #fff;
    display: inline-block;
  }

  .product-list-links a span {
    width: 5px;
    height: 8px;
    margin-left: 8px;
    background: url(../assets/images/icon/arrow.png) left center no-repeat;
    display: inline-block;
  }

  .cate-item a:hover {
    color: #c81623;
  }

  .product-list-links a:hover {
    color: #fff;
  }
</style>
