import store from '@/store';
let hasPermissions = rule => {
  let btnRules = store.getters.roles;
  let menuRules = store.getters.menuRules;
  const hasPermission = btnRules.includes(rule) || menuRules.includes(rule);
  return hasPermission;
};
export default hasPermissions;
