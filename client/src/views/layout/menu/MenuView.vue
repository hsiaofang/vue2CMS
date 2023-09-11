<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      
      background-color="#112f50"
      text-color="#fff"
      active-text-color="#ffd04b"
      router :collapse=" isCollapse"
      >
      <!-- isCollapse變量控制  -->
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>採購系統</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group> 
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->

      <el-menu-item index="1">
        <span slot="title">採購系統</span>
      </el-menu-item>

      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首頁</span>
      </el-menu-item>

      <el-submenu index="/product">
        <template slot="title">
          <i class="el-icon-shopping-bag-1"></i>
          <span>產品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/list">產品列表</el-menu-item>
          <el-menu-item index="/category">產品分類</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-shopping-bag-1"></i>
          <span>訂單管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="order-list">訂單列表</el-menu-item>
          <el-menu-item index="order-collect">訂單匯總</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-menu-item index="5">
        <i class="el-icon-shopping-bag-1"></i>
        <span slot="title">系統管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  props:['isCollapse'],
  data(){
    return{
      // isCollapse:false
    }
  } 
}
</script>

<style lang="less" scoped>
.el-menu{
    border-right: 0;
    /deep/ .is-active{
        background-color: #0872a3 !important;
        color: white;
    }
}
// 不折疊寬度為200
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  background-color: #112f50 !important;
}
</style>
