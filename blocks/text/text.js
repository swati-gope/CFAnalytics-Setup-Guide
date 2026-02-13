export default function decorate(block) {
  // code variant — revert icon spans back to :name: text
  if (block.classList.contains('code')) {
    block.querySelectorAll('span.icon').forEach((icon) => {
      const classes = [...icon.classList];
      const nameClass = classes.find((c) => c.startsWith('icon-') && c !== 'icon');
      if (nameClass) {
        const name = nameClass.replace('icon-', '');
        icon.replaceWith(`:${name}:`);
      }
    });
    return;
  }

  block.querySelectorAll('a').forEach((a) => {
    const up = a.parentElement;
    if (up.tagName === 'P' && up.children.length === 1) {
      a.className = 'button primary';
    }
  });
}
