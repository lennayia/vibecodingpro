/**
 * Smoothly scrolls to an element by its ID
 * @param {string} elementId - The ID of the element to scroll to
 */
export function scrollToSection(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
