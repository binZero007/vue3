/*
 * @Author: wuxiaobin
 * @Date: 2022-04-28 21:16:31
 * @LastEditors: wuxiaobin
 * @LastEditTime: 2022-05-16 22:52:17
 * @FilePath: \vue3\vue.config.js
 */
/*eslint-disable */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // devServer:{
  //   before:require('./mock/index.js')
  // }
})
