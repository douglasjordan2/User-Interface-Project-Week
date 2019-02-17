// JS goes here
class Tabs {
  constructor(tabs) {
    this.tabs = tabs;
    this.btns = this.tabs.querySelectorAll('.btn');
    this.btns.forEach(btn => btn = new Button(btn));
    this.current = this.tabs.querySelector('.show');
  }
}

class Button {
  constructor(btn) {
    this.btn = btn;
    this.data = this.btn.dataset.tab;
    this.card = document.querySelector(`.card[data-tab='${this.data}']`);
    if(this.data !== 'nav') {
      this.card.classList.add('hidden');
    }
    this.card = new Card(this.card);

    this.btn.addEventListener('click', () => this.show())
  }

  show() {
    if(this.data == 'nav') {
      this.card.showNav();
    } else {
      tabs.btns.forEach(btn => btn.style.backgroundColor = 'white');
      this.btn.style.backgroundColor = '#98A4AF'
      this.card.show();
    }
  }
}

class Card {
  constructor(card) {
    this.card = card;
  }

  show() {
    tabs.current.classList.remove('show');
    tabs.current.classList.add('hidden');
    this.card.classList.remove('hidden');
    this.card.classList.add('show');
    tabs.current = this.card;
  }

  showNav() {
    this.card.classList.toggle('show-nav');
    document.querySelector('.header-top').classList.toggle('hidden');
  }
}

const menu = new Tabs(document.querySelector('header'));

const hide = () => {
  const head = document.querySelector('header');
  head.querySelector('.header-top').classList.toggle('hidden');
  head.querySelector('.card').classList.toggle('show-nav');
}

const tabs = new Tabs(document.querySelector('.tabs'));