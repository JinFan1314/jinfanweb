<template>
  <div id="app">
    <div class="header-part">顶部内容</div>
    <div class="content-box">
      <div class="nav">
        <router-link to="/home">首页</router-link>
        <br>
        <router-link to="/article">文章</router-link>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
.header-part{
  background-color:#98aaff;
}
  .nav{
    background: antiquewhite;
    width: 159px;
    height: 500px;
    float: left;
  }
  .content{
    background: aliceblue;
    width: 800px;
    height: 500px;
    float: left;
  }
</style>
