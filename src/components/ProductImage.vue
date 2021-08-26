
<!-- 商品图片组件 -->

<template>
  <div class="product-image">
    <div class="description-images">
      <div class="big-box" v-if="isShow">
        <img
          :src="prodImgData.bigImage[curIndex]"
          :style="{ left: bigLeft + 'px', top: bigTop + 'px' }"
        />
      </div>
      <div class="middle">
        <div
          class="middle-box"
          :style="{ width: boxWidth + 'px', height: boxHeight + 'px' }"
          @mouseenter="isShow = true"
          @mouseleave="isShow = false"
          @mousemove="moveGlass($event)"
        >
          <img :src="prodImgData.middleImage[curIndex]" alt="" />
          <div
            class="glass"
            v-if="isShow"
            :style="{
              width: this.glassWidth + 'px',
              height: this.glassHeight + 'px',
              left: this.glassLeft + 'px',
              top: this.glassTop + 'px',
            }"
          ></div>
        </div>
      </div>
      <ul class="small clearfix">
        <li
          v-for="(image, index) in prodImgData.smallImage"
          :key="index"
          :class="{ active: curIndex == index }"
          @mouseenter="curIndex = index"
        >
          <img :src="image" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'ProductImage',

  data() {
    return {
      // 商品图片数据
      prodImgData: {
        bigImage: [
          './static/images/bigpad1.jpg',
          './static/images/bigpad2.jpg',
          './static/images/bigpad3.jpg',
          './static/images/bigpad4.jpg',
          './static/images/bigpad5.jpg'
        ],
        middleImage: [
          './static/images/middlepad1.jpg',
          './static/images/middlepad2.jpg',
          './static/images/middlepad3.jpg',
          'static/images/middlepad4.jpg',
          'static/images/middlepad5.jpg'
        ],
        smallImage: [
          './static/images/smallipad1.jpg',
          './static/images/smallipad2.jpg',
          './static/images/smallipad3.jpg',
          './static/images/smallipad4.jpg',
          './static/images/smallipad5.jpg'
        ]
      },

      // 当前选中的索引
      curIndex: 0,

      // 是否显示大图
      isShow: false,

      // middle-box的宽度和高度
      boxWidth: 280,
      boxHeight: 280,

      // middle-box相对于浏览器窗口的偏移
      boxOffsetLeft: 0,
      boxOffsetTop: 0,

      // 放大镜的宽度和高度
      glassWidth: 100,
      glassHeight: 100,

      // 放大镜的位置
      glassLeft: 0,
      glassTop: 0,

      // 大图的宽度和高度
      bigWidth: 800,
      bigHeight: 800,

      // 大图的位置
      bigLeft: 0,
      bigTop: 0
    }
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      // 获得middle-box到浏览器窗口最左端的距离
      this.boxOffsetLeft = this.getElementLeft(
        document.querySelector('.middle-box')
      )

      // 获得middle-box到浏览器窗口顶部的距离
      this.boxOffsetTop = this.getElementTop(
        document.querySelector('.middle-box')
      )
    })
  },

  methods: {
    // 移动放大镜
    moveGlass(event) {
      // 计算放大镜的位置
      // 放大镜的位置 = 鼠标指针的位置 - middle-box在浏览器上的偏移 - 放大镜宽度的一半
      this.glassLeft = event.pageX - this.boxOffsetLeft - this.glassWidth / 2
      this.glassTop = event.pageY - this.boxOffsetTop - this.glassHeight / 2

      // 放大镜在水平方向上移动的最大距离
      var maxLeft = this.boxWidth - this.glassWidth

      // 放大镜在竖直方向上移动的最大距离
      var maxTop = this.boxHeight - this.glassHeight

      // 限制放大镜在水平方向上的范围
      if (this.glassLeft < 0) {
        this.glassLeft = 0
      } else if (this.glassLeft > maxLeft) {
        this.glassLeft = maxLeft
      }

      // 限制放大镜在竖直方向上的范围
      if (this.glassTop < 0) {
        this.glassTop = 0
      } else if (this.glassTop > maxTop) {
        this.glassTop = maxTop
      }

      // 计算大图移动的位置
      this.bigLeft = (-this.glassLeft * this.bigWidth) / this.boxWidth
      this.bigTop = (-this.glassTop * this.bigHeight) / this.boxHeight
    },

    // 获得元素最左端到网页最左端的距离
    getElementLeft(element) {
      var actualLeft = element.offsetLeft
      var current = element.offsetParent
      while (current !== null) {
        actualLeft += current.offsetLeft
        current = current.offsetParent
      }
      return actualLeft
    },

    // 获得元素最顶端到网页最顶端的距离
    getElementTop(element) {
      var actualTop = element.offsetTop
      var current = element.offsetParent
      while (current !== null) {
        actualTop += current.offsetTop
        current = current.offsetParent
      }
      return actualTop
    }
  }
}
</script>

<style lang="less" scoped>
.product-image {
  width: 309px;
  position: relative;
}

/* 产品图片 中等大小到的图片 */
.middle {
  width: 282px;
  margin: 20px auto;
  text-align: center;
  position: relative;
}

.middle .middle-box {
  border: solid 1px #ccc;
  position: relative;
}

.middle-box img {
  width: 280px;
  height: auto;
}

/* 放大镜 */
.middle-box .glass {
  background-color: rgba(255, 255, 0, 0.4);
  cursor: move;
  position: absolute;
}

/* 产品图片 小图 */
.small {
  width: 300px;
  margin: 0 auto;
}

.small li {
  width: 54px;
  height: 54px;
  margin-right: 5px;
  border: solid 1px #fff;
  float: left;
}

/* 清除small下面的最后一个li标签的margin-right属性 */
.small li:nth-last-of-type(1) {
  margin-right: 0;
}

.small li.active {
  border-color: #317ee7;
}

/* 承载大图的盒子 */
.big-box {
  width: 540px;
  height: 540px;
  background-color: #fff;
  border: solid 1px #ccc;
  overflow: hidden;
  z-index: 3;
  position: absolute;
  left: 309px;
  top: 0px;
}

/* 产品图片 大图 */
.big-box img {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
