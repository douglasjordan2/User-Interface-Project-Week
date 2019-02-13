// JS goes here
class Tabs {
  constructor(tabs) {
    this.tabs = tabs;
    this.btns = this.tabs.querySelector('.btns').querySelectorAll('.btn');
    this.btns.forEach(btn => new Button(btn));
    this.current = document.querySelector('.show');
  }
}

class Button {
  constructor(btn) {
    this.btn = btn;
    this.data = this.btn.dataset.tab;
    this.card = document.querySelector('.cards').querySelector(`.card[data-tab='${this.data}']`);
    this.card.classList.add('hidden');
    this.card = new Card(this.card);

    this.btn.addEventListener('click', () => this.card.show())
  }
}

class Card {
  constructor(card) {
    this.card = card;
  }

  show() {
    console.log(this.card);
    serviceTabs.current.classList.remove('show');
    serviceTabs.current.classList.add('hidden');
    this.card.classList.remove('hidden');
    this.card.classList.add('show');
    serviceTabs.current = this.card;
  }
}

const serviceTabs = new Tabs(document.querySelector('.services-tabs'));