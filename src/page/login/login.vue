<template>
   <div class="admin-login-box">
     <div class="admin-login-header-box">
       <div class="admin-login-header-center center">
         <div class="admin-login-logo">
           博客系统 | 登录
         </div>
       </div>
     </div>
     <div class="admin-login-center-box">
       <div class="login-center-box center">
         <el-row>
           <el-col :span="9">
             <el-form label-position="right" label-width="80px" ref="userForm" :model="userForm">
               <el-form-item prop="userName"
                             :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
                 <el-col :span="18">
                   <el-input placeholder="请输入用户名"  v-model="userForm.userName">
                     <template slot="prepend">用户名</template>
                   </el-input>
                 </el-col>
               </el-form-item>
               <el-form-item prop="password"
                             :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
                 <el-col :span="18">
                   <el-input placeholder="请输入密码"  v-model="userForm.password">
                     <template slot="prepend">密码</template>
                   </el-input>
                 </el-col>
               </el-form-item>
               <el-form-item prop="verifyCode"
                             :rules="[{ required: true, message: '请输入人类验证码', trigger: 'blur' }]">
                 <el-col :span="18">
                   <el-input placeholder="请输入人类验证码"  v-model="userForm.verifyCode">
                     <template slot="prepend">人类验证</template>
                   </el-input>
                 </el-col>
                 <el-col :span="6">
                   <img :src="captchaPath" @click="updateCaptchaCode" alt="" style="width: 120px;padding-left: 10px"/>
                 </el-col>
               </el-form-item>
               <el-form-item>
                 <el-button type="primary"  @click="submitForm('userForm')" style="padding: 12px 36px;">登录</el-button>
               </el-form-item>
             </el-form>
           </el-col>
         </el-row>
       </div>
     </div>
   </div>
</template>

<script>
export default {
name: "login",
  data(){
    return{
      userForm:{
        userName:'',
        verifyCode:'',
        password:''
      },
      captchaPath:'',
      captchaKey:'',
  }
  },
  methods:{
    updateCaptchaCode(){
      this.captchaPath = 'http://localhost:2020/user/captcha?captcha_key='+this.captcha_key+Math.round(Math.random()*12);
      console.log(this.captchaPath);
    }
  },created() {

  },mounted() {
     this.captcha_key=Date.parse(new Date());
     this.updateCaptchaCode();
  }
}
</script>

<style>
.el-input-group__prepend{
  width: 100px;
  padding: 0;
  text-align: center;
}
.el-input__inner{
  padding: 10px;
}
.el-form-item__content{
  margin-left: 0 !important;
  width: 100%;
}
</style>
<style scoped>
  .admin-login-header-box{
    width: 100%;
    height: 46px;
    background-color: #0084FF;
    margin-bottom: 20px;
  }
  .center{
    margin: 0 auto;
  }
  .admin-login-header-center{
    line-height: 46px;
    width: 1140px;
  }
  .admin-login-logo{
    color: #ffffff;
    font-size: 19px;
    font-weight: 600;
  }
  .login-center-box{
    padding: 20px;
    border-radius: 4px;
    width: 1100px;
    background-color: #ffffff;
    box-shadow: 0 1px 10px 0 #afafaf ;
  }
</style>