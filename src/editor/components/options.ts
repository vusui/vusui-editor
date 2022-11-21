/*
 * @Description: 工具栏定制与类型
 * @Author: linpan(45650368@qq.com)
 * @Date: 2022-11-18 17:26:36
 * @LastEditors: linp linp@epsoft.com.cn
 * @LastEditTime: 2022-11-21 09:46:58
 * @WebSite: https://vusui.com
 * @Copyright: 2017-present The Vusui Authors
 * @Readme: 开源不易，且用且珍惜！
 */
import { sizes, fonts } from './modules';

// 定义类型
export type ToolbarOptions = typeof toolbarOptions;

// Quill 工具栏参数
export const toolbarOptions = {
  // 基础功能
  essential: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
    ['blockquote', 'code-block', 'link'],
    [{ color: [] }, 'clean']
  ],
  // 精简功能
  minimal: [
    [{ header: 1 }, { header: 2 }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }]
  ],
  // 全部功能
  full: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ size: sizes }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: fonts }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['clean'],
    ['link', 'image', 'video']
  ]
};
