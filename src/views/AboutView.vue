<!--
 * @Author: wuxiaobin
 * @Date: 2022-04-28 21:16:31
 * @LastEditors: wuxiaobin
 * @LastEditTime: 2022-05-16 22:54:35
 * @FilePath: \vue3\src\views\AboutView.vue
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ count }}</h1>
    <h1>{{ obj.aa }}</h1>
    <button @click="updateCount">增加</button>
    <button @click="undateObj">增加2</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: 'aboutItem',
  setup() {
    let count = ref(1)
    const obj = reactive({
      aa: '343'
    })
    const undateObj = () => {
      axios
        .get('/weekreports/list')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    function updateCount() {
      count.value++
    }
    return {
      count,
      obj,
      updateCount,
      undateObj
    }
  }
})
</script>
