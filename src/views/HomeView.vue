<!--
 * @Author: wuxiaobin
 * @Date: 2022-04-28 21:16:31
 * @LastEditors: wuxiaobin
 * @LastEditTime: 2022-04-28 23:04:55
 * @FilePath: \vue3\src\views\HomeView.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
//测试头部
export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  }
})
</script>
