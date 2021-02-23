import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// webpack语法 路径  读取的子目录  路由模块化
const files = require.context('./',false, /.router.js$/);
const routes = []
files.keys().forEach(key => {
	routes.push(...files(key).default)
});

//入口文件
const router = new VueRouter({
  routes
})

export default router
