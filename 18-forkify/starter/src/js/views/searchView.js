import View from './View.js';

class searchView {
  _data;

  _parentEl = document.querySelector('.search');
  #search = document.querySelector('.search__field');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    // const query = this.#search.value;

    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
