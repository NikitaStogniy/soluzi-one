export const scrollToElementById = (id: string): void => {
  const currentElement = document.getElementById(id);

  if (!currentElement) {
    return
  }

  currentElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
}
