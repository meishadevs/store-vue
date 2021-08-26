import store from '@/store'
export default{
  inserted: (el, binding) => {
    let rules = store.getters.roles
    const hasPermission = rules.includes(binding.value.rule)
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}

