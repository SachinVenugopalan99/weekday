export const debounce = (func: any, wait: any) => {
  let timeout: any;
    
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }
}