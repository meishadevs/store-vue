<!-- 商品分类导航组件 -->

<template>
  <div class="product-cate-nav" @mouseleave="selectIndex = 0">

    <!-- 左侧的商品分类类别 s -->
    <div class="product-cate-show">
      <dl class="product-cate-item" v-for="(leftCate, index) in productCateList.leftCate"
          @mouseenter="selectIndex = index + 1"
          v-bind:class="{current: selectIndex == index + 1}">
        <dt>
          <router-link to="/select" v-for="title in leftCate.title" :key="title.id">{{ title }}</router-link>
          <router-link class="aLink" to="/select" v-if="leftCate.selectTitle != null" :key="leftCate.selectTitle.id">{{ leftCate.selectTitle }}</router-link>
        </dt>
        <dd>
          <router-link to="/select" v-for="item in leftCate.content" :key="item.id">{{ item }}</router-link>
        </dd>
      </dl>
    </div>
    <!-- 左侧的商品分类列表 e -->

    <!-- 右侧的商品分类列表 s -->
    <div class="product-cate-list">
      <div class="cate-item" v-for="(rightCate, index) in productCateList.rightCate" v-bind:style="{display: selectIndex == index + 1 ? 'block' : 'none'}">
        <dl class="product-list-item clearfix" v-for="page in rightCate.page">
          <dt class="fl">{{ page.title }}</dt>
          <dd>
            <router-link to="/select" v-for="content in page.content" :key="content.id">{{ content }}</router-link>
          </dd>
        </dl>
        <div class="product-list-links">
          <router-link to="/select" v-for="button in rightCate.button" :key="button.id">{{ button }}<span></span></router-link>
        </div>
      </div>
    </div>
    <!-- 右侧的商品分类列表 e -->
  </div>
</template>

<script>
  export default {

    //组件名称
    name: 'productCateNav',

    data() {
      return {

        //当前选中的商品分类的索引
        selectIndex: 0,

        //商品分类列表
        productCateList: {
          'leftCate': [
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
                  'content': ['进口电器']
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

  .product-cate-show .product-cate-item a {
    margin-right: 5px;
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
    margin-right: 8px;
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
