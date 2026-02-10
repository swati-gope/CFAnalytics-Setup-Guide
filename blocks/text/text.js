export default function decorate(block) {
  // text block — no additional decoration needed
  block.querySelectorAll('a').forEach((a) => {
    const up = a.parentElement;
    if (up.tagName === 'P' && up.children.length === 1) {
      a.className = 'button primary';
    }
  });
}
