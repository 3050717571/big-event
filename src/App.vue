<script setup>
import { useRoute,useRouter } from 'vue-router';
import { useUserStore } from './stores/index';
import  zhCn  from 'element-plus/dist/locale/zh-cn.mjs';

const userstore = useUserStore()
</script>


<template>
  <div>
    <el-config-provider :locale="zhCn">
          <router-view></router-view>
    </el-config-provider>
  </div>
</template>



<style scoped> 

</style>
