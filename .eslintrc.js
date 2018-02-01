
//eslint的配置文件

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  //表示使用标准规则
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],

  //添加自定义规则
  'rules': {

    //允许在箭头函数中，当只有一个参数时，可以不用括号包裹参数，off表示不检测这条规则
    'arrow-parens': 'off',

    //允许在生成器函数与*之间不加空格
    'generator-star-spacing': 'off',

    //如果当前处于开发环境下 no-debugger = 0(可以调试)
    //如果当前处于生产环境下 no-debugger = 2(不可以调试)
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    //不检测注释语句与注释符号之间是否存在空格
    'spaced-comment': 'off',

    //在代码末尾必须加上分号，否则会报错
    'semi': ['error', 'always'],

    //不检测代码是否缩进了
    'indent': 'off',

    //不检查函数名与圆括号之间是否存在空格
    'space-before-function-paren': 'off',

    //不检测变量声明后是否使用了
    'no-unused-vars': 'off',

    //允许在每行代码的行尾添加空格
    'no-trailing-spaces': 'off',

    //不检测代码块
    'padded-blocks': 'off',

    //当一条语句太长需要写多行时，强制运算符放在行首，否则报错
    'operator-linebreak':  [1, "before"],

    //不强制使用一致的符号定义字符串，可以使用单引号定义字符串，也可以使用双引号定义字符串
    'quotes': 'off',

    //当存在更简单的选择时也可以使用三目运算符
    'no-unneeded-ternary': 'off',

    //不强制执行回调错误处理
    'handle-callback-err': 'off',

    //允许使用Object构造函数
    'no-new-object': 'off',

    //允许使用多余的返回语句
    'no-useless-return': 'off',

    //允许在字符串和正则表达式中使用无意义的转义符
    'no-useless-escape': 'off'
  }
}
