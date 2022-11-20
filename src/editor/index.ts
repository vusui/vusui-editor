/*
 * @Description: 导出组件
 * @Author: linpan(45650368@qq.com)
 * @Date: 2022-11-17 14:48:14
 * @LastEditors: vusui gophp@163.com
 * @LastEditTime: 2022-11-20 17:17:53
 * @WebSite: https://vusui.com
 * @Copyright: 2017-present The Vusui Authors
 * @Readme: 开源不易，且用且珍惜！
 */
import Quill from 'quill';
import Delta from 'quill-delta';
import { App } from 'vue';
import VusuiEditor from './components/VusuiEditor.vue';

// 注册组件
VusuiEditor.install = (app: App<Element>) => {
  app.component(VusuiEditor.name, VusuiEditor);
};

// 导出
export { VusuiEditor, Quill, Delta };
