<template>
  <div>
    <!-- 頂部 -->
    <div class="header">
      <div class="open">
        <!-- 點擊按鈕可以切換兄弟menu變量 -->
        <span
          v-if="!isCollapse"
          class="iconfont el-icon-arrow-left"
          @click="changeMenu"
        ></span>
        <span
          v-else
          class="iconfont el-icon-arrow-right"
          @click="changeMenu"
        ></span>
      </div>
    </div>
    <!-- 路由的出口，對整個出口加入樣式 -->
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  methods: {
    changeMenu() {
      // 自定義事件
      this.$emit("changeShow");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  background-color: rgb(195, 178, 160);
  color: #fff;
  line-height: 50px;
  .open {
    .iconfont {
      font-size: 20px;
      cursor: pointer;
    }
  }
}

.wrapper{
  padding: 20px;
}
</style>
