<!-- 父親組件，會傳遞給子組件，當數據發生變化會更新相關view -->
<template>
  <div class="layout">
    <!-- 左側導航 -->
    <div class="menu">
      <!-- 傳給菜單 -->
      <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <!-- 右側內容 -->
    <!-- 動態綁定{small} 會跟著menu狀態折疊做動態，
      當isCollapse 為 true 時，{ small: isCollapse } 被解釋為 { small: true }，
      於是.small 樣式就會被動態添加到 <div class="content"> 上，
      改變該元素的樣式  -->
    <div class="content" :class="{ small: isCollapse }">
      <Content @changeShow="changeShow" :isCollapse="isCollapse"></Content>
    </div>
  </div>
</template>

<script>
import Menu from "./menu/MenuView.vue";
import Content from "./content/ContentView.vue";

export default {
  components: {
    Menu,
    Content,
  },
  // 初始化
  data() {
    return {
      isCollapse: false,
    };
  },
  // 定義組件的方法，在組件內被調用
  methods: {
    changeShow() {
      // 取反
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.layout {
    // display: flex;
  .menu {
    // width: 200px;
    background:#635a51 !important;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .content {
    padding-left: 200px;
  }
  .small {
    padding-left: 64px;
  }
}
</style>
