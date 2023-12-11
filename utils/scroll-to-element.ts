export const scrollToElementById = (id: string): void => {
  const currentElement = document.getElementById(id);

  if (!currentElement) {
    return
  }

  const yOffset = -50;
  const y = currentElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
}
