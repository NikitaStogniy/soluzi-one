export const scrollToElementById = (id: string): void => {
  const currentElement = document.getElementById(id);

  if (!currentElement) {
    return
  }

  const y = currentElement.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
}
