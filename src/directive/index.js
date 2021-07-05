import directive from './directives'

const importDirective = Vue => {
  // 全局权限指令
  Vue.directive('permission', directive.permission)
}

export default importDirective
