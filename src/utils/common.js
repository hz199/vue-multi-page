/**
 * 节流方法
 * @param fn 执行函数
 * @param interval 时间间隔 默认 500
 */
export function throttle(fn, interval = 500, firstTime = true) {
  const self = fn // 保存需要被延迟执行的函数的引用
  let timer = null
  let firstTimeFunc = firstTime // 是否第一次调用

  const newFunc = function (...args) {
    const that = newFunc
    if (firstTimeFunc) {
      self.apply(that, args)
      return (firstTimeFunc = false)
    }

    if (timer) {
      return false
    }

    timer = setTimeout(function () {
      clearTimeout(timer)
      timer = null
      self.apply(that, args)
    }, interval)
  }

  return newFunc
}