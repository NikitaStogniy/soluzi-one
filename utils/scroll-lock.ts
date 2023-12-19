export const scrollLock = (isShow: boolean): void => {
  const bodyElement = document.querySelector('body') as HTMLBodyElement
  let scrollPosition = 0

  if (isShow) {
    scrollPosition = window.pageYOffset
    bodyElement.style.overflow = 'hidden'
    bodyElement.style.position = 'fixed'
    bodyElement.style.top = `-${scrollPosition}px`
    bodyElement.style.width = '100%'
  }
  else {
    const currentScrollPosition = parseInt(bodyElement.style.top.valueOf())

    bodyElement.style.removeProperty('overflow')
    bodyElement.style.removeProperty('position')
    bodyElement.style.removeProperty('top')
    bodyElement.style.removeProperty('width')

    window.scrollTo(0, Math.abs(currentScrollPosition))
  }
}
