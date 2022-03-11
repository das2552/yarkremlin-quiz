export const debounce = (fn, ms) => {
  let сooldown;

  return function () {
    clearTimeout(сooldown);
    сooldown = setTimeout(() => fn.apply(this, arguments), ms);
  };
};
