/*
 * @Description: prettier配置
 * @Author: linpan(45650368@qq.com)
 * @Date: 2022-08-18 09:50:54
 * @LastEditors: linp linp@epsoft.com.cn
 * @LastEditTime: 2022-11-17 10:20:52
 * @WebSite: https://vusui.com
 * @Copyright: 2017-present The Vusui Authors
 * @Readme: 开源不易，且用且珍惜！
 */
module.exports = {
  // 行宽 default: 80
  printWidth: 80,
  // tab 宽度 default: 2
  tabWidth: 2,
  // 使用 tab 键 default:false
  useTabs: false,
  // 语句行末是否添加分号 default:true
  semi: true,
  // 是否使用单引号 default:false
  singleQuote: true,
  // 对象需要引号在加 default:"as-needed"
  quoteProps: 'as-needed',
  // jsx单引号 default:false
  jsxSingleQuote: true,
  // 最后一个对象元素加逗号 default:"es5"
  trailingComma: 'none',
  // 不格式化vue文件，vue文件的格式化单独设置
  // disableLanguages: ['vue'],
  // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格 default:true
  bracketSpacing: true,
  // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。default:false
  jsxBracketSameLine: false,
  // (x) => {} 是否要有小括号 default:"always"
  arrowParens: 'always',
  // default:0
  rangeStart: 0,
  // default:Infinity
  rangeEnd: Infinity,
  // default:false
  insertPragma: false,
  // default:false
  requirePragma: false,
  // "always" -超出打印宽度，将其换行。
  // "never" - 从不
  // "preserve" - 保留原文
  proseWrap: 'preserve',
  // HTML空白敏感性 default:"css"
  htmlWhitespaceSensitivity: 'ignore',
  // 在 *.vue 文件中 Script 和 Style 标签内的代码是否缩进 default:false
  vueIndentScriptAndStyle: false,
  // 末尾换行符 default:"lf"
  endOfLine: 'auto',
  // default:"auto"
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2
      }
    }
  ]
};
