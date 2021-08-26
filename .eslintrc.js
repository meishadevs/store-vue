module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': 0,
    'vue/max-attributes-per-line': [2, {
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'standard/object-curly-even-spacing': 0,
    // 所有的props参数必须设置默认值，暂时禁用
    'vue/require-default-prop': 0,
    // 强制vue组件名称采用PascalCase命名
    // "vue/name-property-casing": ["error", "PascalCase"],
    'vue/name-property-casing': 0,
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 2,
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': [2, 'always'],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    // 强制使用骆驼拼写法命名约定never/always
    'camelcase': [0, {
      'properties': 'never'
    }],
    // 在定义对象或数组时，最后一项不能加逗号
    'comma-dangle': [2, 'never'],
    // 在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 如果逗号可以放在行首或行尾时，那么请放在行尾
    'comma-style': [2, 'last'],
    // 在constructor函数中，如果classes是继承其他class，那么请使用super。否者不使用super
    'constructor-super': 2,
    // 在if-else语句中，如果if或else语句后面是多行，那么必须加大括号。如果是单行就应该省略大括号。
    'curly': [2, 'multi-line'],
    // 该规则规定了.应该放置的位置，
    'dot-location': [2, 'property'],
    // 该规则要求代码最后面需要留一空行，（仅需要留一空行）
    'eol-last': 2,
    // 使用=== !== 代替== != .
    'eqeqeq': [2, 'allow-null'],
    // 该规则规定了generator函数中星号两边的空白。
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 规定callback 如果有err参数，只能写出err 或者 error .
    'handle-callback-err': [2, '^(err|error)$'],
    // 这个就是关于用什么来缩进了，规定使用tab 来进行缩进，switch中case也需要一个tab .
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': [2, 'prefer-single'],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 构造函数首字母大写
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    // 在使用构造函数时候，函数调用的圆括号不能够省略
    'new-parens': 2,
    // 禁止使用Array构造函数
    'no-array-constructor': 2,
    // 禁止使用arguments.caller和arguments.callee
    'no-caller': 2,
    // 禁用 console = error
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止覆盖class命名，也就是说变量名不要和class名重名
    'no-class-assign': 2,
    // 在条件语句中不要使用赋值语句
    'no-cond-assign': 2,
    // const申明的变量禁止修改
    'no-const-assign': 2,
    // 在正则表达式中禁止使用控制符
    'no-control-regex': 0,
    // 禁止使用delete删除var申明的变量
    'no-delete-var': 2,
    // 函数参数禁止重名
    'no-dupe-args': 2,
    // class中的成员禁止重名
    'no-dupe-class-members': 2,
    // 在对象字面量中，禁止使用重复的key
    'no-dupe-keys': 2,
    // 在switch语句中禁止重复的case
    'no-duplicate-case': 2,
    // 禁止使用不匹配任何字符串的正则表达式
    'no-empty-character-class': 2,
    // 禁止使用空解构模式
    'no-empty-pattern': 2,
    // 禁用 eval()
    'no-eval': 2,
    // 禁止对catch语句中的参数进行赋值
    'no-ex-assign': 2,
    // 禁止扩展原生对象
    'no-extend-native': 2,
    // 禁止在不必要的时候使用bind函数
    'no-extra-bind': 2,
    // 在一个本来就会自动转化为布尔值的上下文中就没必要再使用!! 进行强制转化了。
    'no-extra-boolean-cast': 2,
    // 禁止使用多余的圆括号
    'no-extra-parens': [2, 'functions'],
    // 这条规则，简单来说就是在case语句中尽量加break，避免不必要的fallthrough错误，如果需要fall through，那么看官网。
    'no-fallthrough': 2,
    // 简单来说不要写这样的数字.2 2.。应该写全，2.2 2.0 .
    'no-floating-decimal': 2,
    // 禁止对函数名重新赋值
    'no-func-assign': 2,
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 2,
    // 禁止在代码块中定义函数（下面的规则仅限制函数
    'no-inner-declarations': [2, 'functions'],
    // RegExp构造函数中禁止使用非法正则语句
    'no-invalid-regexp': 2,
    // 禁止使用不规则的空白符
    'no-irregular-whitespace': 2,
    // 禁止使用__iterator__属性
    'no-iterator': 2,
    // label和var申明的变量不能重名
    'no-label-var': 2,
    // 禁用标签语句
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    // 禁止使用没有必要的嵌套代码块
    'no-lone-blocks': 2,
    // 不要把空格和tab混用
    'no-mixed-spaces-and-tabs': 2,
    // 禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止使用多行字符串
    'no-multi-str': 2,
    // 空行不能够超过2行
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    // 该规则保证了不重写原生对象
    'no-native-reassign': 2,
    // 在in操作符左边的操作项不能用! 例如这样写不对的：if ( !a in b) { //dosomething }
    'no-negated-in-lhs': 2,
    // 不要通过new Object（），来定义对象
    'no-new-object': 2,
    // 禁止把require方法和new操作符一起使用
    'no-new-require': 2,
    // 禁止在全局变量上使用new操作符
    'no-new-symbol': 2,
    // 当定义字符串、数字、布尔值就不要使用构造函数了，String、Number、Boolean
    'no-new-wrappers': 2,
    // 禁止无意得把全局对象当函数调用了，比如下面写法错误的：Math(), JSON()
    'no-obj-calls': 2,
    // 禁用八进制字面量
    'no-octal': 2,
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 2,
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 2,
    // 不要使用__proto__
    'no-proto': 2,
    // 禁止多次声明同一变量
    'no-redeclare': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': [2, 'except-parens'],
    // 禁止自我赋值
    'no-self-assign': 2,
    // 禁止自身比较
    'no-self-compare': 2,
    // 禁用逗号操作符
    'no-sequences': 2,
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    // 函数调用时，圆括号前面不能有空格
    'no-spaced-func': 2,
    // 禁止使用稀疏数组
    'no-sparse-arrays': 2,
    // 在调用super之前不能使用this对象
    'no-this-before-super': 2,
    // 禁止抛出异常字面量
    'no-throw-literal': 2,
    // 禁用行尾空格
    'no-trailing-spaces': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    // 禁止将变量初始化为 undefined
    'no-undef-init': 2,
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': 2,
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 2,
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': 2,
    // 禁止出现未使用过的变量
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 2,
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 2,
    // 禁用不必要的构造函数
    'no-useless-constructor': 2,
    // 禁用不必要的转义字符
    'no-useless-escape': 0,
    // 禁止属性前有空白
    'no-whitespace-before-property': 2,
    // 禁用 with 语句
    'no-with': 2,
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': [2, {
      'initialized': 'never'
    }],
    // 强制操作符使用一致的换行符
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    // 要求或禁止块内填充
    'padded-blocks': [2, 'never'],
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    // 要求或禁止使用分号代替 ASI
    'semi': [2, 'never'],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 强制在块之前使用一致的空格
    'space-before-blocks': [2, 'always'],
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [2, 'never'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': [2, 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': [2, 'never'],
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 2,
    // 要求 IIFE 使用括号括起来
    'wrap-iife': [2, 'any'],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [2, 'both'],
    // 要求或禁止 “Yoda” 条件
    'yoda': [2, 'never'],
    // 要求使用 const 声明那些声明后不再被修改的变量 暂时不启用
    'prefer-const': 0,
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': [2, 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
