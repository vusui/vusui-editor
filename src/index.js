/*
 * @Description: 导出组件
 * @Author: linpan(45650368@qq.com)
 * @Date: 2022-11-17 14:48:14
 * @LastEditors: linp linp@epsoft.com.cn
 * @LastEditTime: 2022-11-17 16:16:08
 * @WebSite: https://vusui.com
 * @Copyright: 2017-present The Vusui Authors
 * @Readme: 开源不易，且用且珍惜！
 */
import Quill from 'quill';
import VusuiEditor from './components/VusuiEditor.vue';

VusuiEditor.install = function (app) {
  app.component(VusuiEditor.name, VusuiEditor);
};

const VusuiQuillEditor = { Quill, VusuiEditor };

export default VusuiQuillEditor;
export { Quill, VusuiEditor };
