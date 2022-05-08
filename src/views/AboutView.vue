<!--
 * @Author: wuxiaobin
 * @Date: 2022-04-28 21:16:31
 * @LastEditors: wuxiaobin
 * @LastEditTime: 2022-05-08 22:17:25
 * @FilePath: \vue3\src\views\AboutView.vue
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ count }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'aboutItem',
  setup() {
    const count = 1
    return {
      count
    }
  }
})
</script>
