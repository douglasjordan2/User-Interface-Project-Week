// JS goes here
class Tabs {
  constructor(tabs) {
    this.tabs = tabs;
    this.btns = this.tabs.querySelectorAll('.btn');
    this.btns.forEach(btn => new Button(btn));
    this.current = this.tabs.querySelector('.show');
  }
}

class Button {
  constructor(btn) {
    this.btn = btn;
    this.data = this.btn.dataset.tab;
    this.card = document.querySelector(`.card[data-tab='${this.data}']`);
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
    serviceTabs.current.classList.remove('show');
    serviceTabs.current.classList.add('hidden');
    this.card.classList.remove('hidden');
    this.card.classList.add('show');
    serviceTabs.current = this.card;
  }
}

const serviceTabs = new Tabs(document.querySelector('.services-tabs'));

class Menu {
  constructor(head) {
    this.head = head;
    this.main = document.querySelector('main');
    this.navBtn = this.head.querySelector('.btn');
    this.card = this.head.querySelector('.card');
    this.navBtn.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.card.classList.toggle('show');
    this.body.style.opacity = '0';
  }
}

const menu = new Menu(document.querySelector('header'));