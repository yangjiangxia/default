<template>
  <div id="login2" class="fix">
    <el-col class="menu">
      <el-menu
        :default-active="active"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="storage_index"
        background-color="#2f4050"
        text-color="#fff"
        :unique-opened="true"
        active-text-color="#ffd04b">
        <el-submenu index="1" >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>基本用法</span>
          </template>
          <el-menu-item-group style="overflow: hidden;">
            <el-menu-item index="1-1" @click="hf('sx')">计算属性</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
      <section>

      </section>
    </el-col>
    <section class="login_inner left">
      <section class="tit">
        这里是头部
      </section>
      <section style="padding: 15px;">
        <router-view></router-view>
      </section>

    </section>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        active:'1-1'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //  console.log(key, keyPath);
      },
      storage_index(index,indexPath){
        //  console.log(index, indexPath);
        sessionStorage.setItem('nav_public_index',index)
      }
    },
    mounted(){
      this.active=sessionStorage.getItem('nav_public_index');
    },
    filters: { //过滤器   页面上调用{{dt.state|lei}}
      mone_sd(num) {
        let sd_er = ""
        if (num == 1) {
          sd_er = "上半月"
        }
        if (num == 2) {
          sd_er = "中半月"
        }
        if (num == 3) {
          sd_er = "下半月"
        }
        console.log(num);
        return sd_er
      }
    }
  }
</script>
<style lang="less">


  #login2{
    .is-opened{
      border-left: 3px solid #19aa8d !important;
    }

    background-color: #2f4050;
    .menu{
      width: 200px;
      height: 100%;
      .el-submenu{
        border-left: 3px solid #2f4050;
      }
    }
    .login_inner{
      width: calc(~"100% - 200px");
      width: -webkit-calc(~"100% - 200px");
      width: -moz-calc(~"100% - 200px");
      width: -o-calc(~"100% - 200px");
      min-height: 1197px;
      background-color: #f3f3f4;

      .tit{
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #e7eaec;
      }
    }
  }

</style>
