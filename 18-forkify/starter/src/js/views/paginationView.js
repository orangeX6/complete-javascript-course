import View from './View.js';
import icons from 'url:../../img/icons.svg'; ////Parcel 2

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateButtonMarkup(curPage, next = true) {
    const left = `
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    `;

    const right = `
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
      </svg>
    `;

    return `
        <button data-goto="${
          next ? curPage + 1 : curPage - 1
        }" class="btn--inline pagination__btn--${next ? 'next' : 'prev'} ">
        ${next ? right : left}
        </button> 
        `;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1 && numPages > 1) {
      return this._generateButtonMarkup(curPage);
    }

    // Last Page
    if (curPage === numPages && numPages > 1) {
      return this._generateButtonMarkup(curPage, false);
    }

    // Other Page
    if (curPage < numPages) {
      const markup = this._generateButtonMarkup(curPage, false);
      return markup.concat(this._generateButtonMarkup(curPage));
    }

    // Page 1, and there are no other pages
    return '';
  }
}

export default new paginationView();

/*
<button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page 1</span>
          </button>
          <button class="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button> 
*/
