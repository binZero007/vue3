/*
 * @Author: wuxiaobin
 * @Date: 2022-04-28 21:16:31
 * @LastEditors: wuxiaobin
 * @LastEditTime: 2022-05-16 22:55:35
 * @FilePath: \vue3\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('./mock')
createApp(App).use(store).use(router).mount('#app')
