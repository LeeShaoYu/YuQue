/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-en hancements
 */
import ElementUI  from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(ElementUI);
  // Vue.use(Antd);
  // ...apply enhancements for the site.
}
