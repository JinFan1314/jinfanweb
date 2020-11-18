<template>
  <div>
    <el-container>
      <el-header id="admin-header-box">顶部内容</el-header>
      <el-container>
        <el-aside id="left-menu-list-box" width="200px">
          <leftMenu/>
        </el-aside>
        <el-container>
          <el-main>
            <div class="content">
              <router-view/>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "base",
  mounted() {
    //动态设置侧边高度
    let leftMenuBox = document.getElementById('left-menu-list-box')
    let headBox = document.getElementById('admin-header-box')
    if (leftMenuBox&&headBox) {
      leftMenuBox.style.height=(window.innerHeight-headBox.offsetHeight)+'px';
    }
  }
}
</script>



<style>
.el-header {
  background-color: #0084FF;
  color: #333;
  text-align: center;
  line-height: 46px;
  height: 46px !important;
}

.el-aside {
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
</style>