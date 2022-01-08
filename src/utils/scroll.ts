export function scrollTo(target: string) {
  const element = document.getElementById(target);
  if (element) {
    const { top } = element.getBoundingClientRect();
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth",
    });
  }
}
