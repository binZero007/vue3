/*
 * @Author: wuxiaobin
 * @Date: 2022-05-16 22:54:14
 * @LastEditors: wuxiaobin
 * @LastEditTime: 2022-05-16 22:58:03
 * @FilePath: \vue3\src\mock\index.js
 */
const Mock = require('mockjs')

Mock.setup({
  timeout: '500-800'
})

Mock.mock('/weekreports/list', 'get', require('./ReportFillin/list.json'))
Mock.mock('/weekreports/projectoptions', 'get', require('./ReportFillin/projectoptions.json'))
Mock.mock('/weekreports/demandnumoptions', 'get', require('./ReportFillin/demandnumoptions.json'))
Mock.mock('/weekreports/foodfeeoptions', 'get', require('./ReportFillin/foodfeeoptions.json'))
Mock.mock('/weekreports/paneldata', 'get', require('./Common/paneldata.json'))
Mock.mock('/organization/list', 'get', require('./ReportCheck/Organization/list.json'))
Mock.mock('/organization/treedata', 'get', require('./ReportCheck/Organization/treedata.json'))
Mock.mock('/test/servererror', 'get', require('./Common/servererror.json'))
