/*
 * @Author: wuxiaobin
 * @Date: 2022-04-28 21:16:31
 * @LastEditors: wuxiaobin
 * @LastEditTime: 2022-05-08 22:26:11
 * @FilePath: \vue3\vue.config.js
 */
/*eslint-disable */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:true//这里禁止使用eslint-loader
})
