<template>
  <div>
    <el-menu default-active="0"
             unique-opened="true"
             class="el-menu-vertical">
      <template v-for="(item,index) in menuList">
        <router-link :to="item.path" v-if="!item.children&&!item.hidden" :key="index">
          <el-menu-item :index="index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </router-link>
        <el-submenu v-if="!item.hidden&&item.children"  :key="index" :index="index" >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <router-link :to="item.path+'/'+subItem.path"  v-for="(subItem,subIndex) in item.children" :key="subIndex">
            <el-menu-item  :index="index+'-'+subIndex"  v-if="!subItem.hidden">
              <i :class="subItem.icon"></i>
              <span slot="title" v-text="subItem.name"></span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {routes} from '@/router';
export default {
  name: "left-menu",
  data(){
    return{
      menuList:[],
    }
  },
  mounted() {
    let menuList = routes[0];
    this.menuList=menuList.children;
    // eslint-disable-next-line no-console
    console.log(this.menuList);
  }
}
</script>

<style scoped>
  .el-menu-vertical a{
    text-decoration: none;
  }
</style>