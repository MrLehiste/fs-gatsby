export const isBrowser = () => typeof window !== "undefined"

export const getItem = item => {
  if(isBrowser() && window.localStorage.getItem(item))
    return window.localStorage.getItem(item)
}

export const setItem = ( item, value ) => {
  if(isBrowser())
    window.localStorage.setItem(item, value)
}

export const immutableItem = ( item, value ) => {
  const existing = getItem(item);
  if (existing) return existing;
  setItem(item, value );
  return value;
}