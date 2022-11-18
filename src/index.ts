/*
 * @Description: 导出组件
 * @Author: linpan(45650368@qq.com)
 * @Date: 2022-11-17 14:48:14
 * @LastEditors: linp linp@epsoft.com.cn
 * @LastEditTime: 2022-11-18 17:36:46
 * @WebSite: https://vusui.com
 * @Copyright: 2017-present The Vusui Authors
 * @Readme: 开源不易，且用且珍惜！
 */
import type { App } from 'vue';
import Quill from 'quill';
import Delta from 'quill-delta';
import VusuiEditor from './components/VusuiEditor.ts';

// 导入
VusuiEditor.install = function (app: App) {
  app.component(VusuiEditor.name, VusuiEditor);
};

// 导入
export { Quill, Delta, VusuiEditor };
export default { Quill, Delta, VusuiEditor };
