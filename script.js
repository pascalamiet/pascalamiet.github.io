// Research filters progressively enhance the page; all papers remain visible without JavaScript.
const filters = document.querySelector('.filters');
if (filters) {
  filters.hidden = false;
  const buttons = Array.from(filters.querySelectorAll('button'));
  const papers = Array.from(document.querySelectorAll('.paper'));
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selection = button.dataset.filter;
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      papers.forEach(paper => { paper.hidden = selection !== 'all' && paper.dataset.type !== selection; });
      const count = papers.filter(paper => !paper.hidden).length;
      document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'paper' : 'papers'} shown.`;
    });
  });
}
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
