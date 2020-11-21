<template>
  <div>
    <el-container>
      <el-header id="admin-header-box">顶部内容</el-header>
      <el-container>
        <el-aside id="left-menu-list-box" width="200px">
          <leftMenu/>
        </el-aside>
        <el-container>
          <el-main id="main-box">
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
  name: "base-view",
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
 #admin-header-box {
    background-color: #0084FF;
    color: #333;
    text-align: center;
    line-height: 46px;
    height: 46px !important;
  }

  #left-menu-list-box {
    line-height: 200px;
  }

  #main-box {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}
</style>