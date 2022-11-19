/*
 * @Description: 自定义模块
 * @Author: linpan(45650368@qq.com)
 * @Date: 2022-11-19 19:47:18
 * @LastEditors: vusui gophp@163.com
 * @LastEditTime: 2022-11-19 19:56:25
 * @WebSite: https://vusui.com
 * @Copyright: 2017-present The Vusui Authors
 * @Readme: 开源不易，且用且珍惜！
 */
import Quill from 'quill';

// 设置字体大小
const fontSizeStyle = Quill.import('attributors/style/size'); // 引入这个后会把样式写在style上
// 设置字体列表, false为默认选中
fontSizeStyle.whitelist = [
  '12px',
  false,
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
  '72px'
];
Quill.register(fontSizeStyle, true);

// 设置字体样式
const Font = Quill.import('attributors/style/font'); // 引入这个后会把样式写在style上
const fonts = [
  'SimSun',
  'SimHei',
  false,
  'KaiTi',
  'FangSong',
  'Arail',
  'Tahoma',
  'Verdana',
  'Courier New'
];
Font.whitelist = fonts; // 将字体加入到白名单
Quill.register(Font, true);

const sizes = fontSizeStyle.whitelist;

export { sizes, fonts };
