AOS.init();

class Scroller {
  constructor(container) {
    this.container = container;
    this.docBody = document.querySelector('body');
    this.elements = this.container.querySelectorAll('.scroll-element');
    this.visibleElement = this.container.querySelector('.visible-element');
    this.nextElement;
    this.windowPosition = window.scrollY;
    //window.addEventListener('scroll', () => this.scrollEffect());
  }

  scrollEffect() {
    if(window.scrollY > this.windowPosition) {
      this.docBody.style.overflow = 'hidden';
      window.scrollTo(0, 0);

      let next;
      for(let i = 0; i < this.elements.length; i++) {
        if(this.elements[i] == this.visibleElement) {
          if(this.elements[i] === this.elements[this.elements.length - 1]) {
            console.log(true);
            new Visible(this.visibleElement).last();
          } else {
            setTimeout(() => new Next(this.elements[i + 1]).scroll(), 1000);
            new Visible(this.visibleElement).scroll();
          }
        }
      }
    }
  }
}

class Visible {
  constructor(element) {
    this.element = element;
  }

  scroll() {
    TweenMax.to(this.element, 3, {top: '1200px'})
    TweenMax.to(this.element, 2, {opacity: '0'})
    setTimeout(() => {
      this.element.classList.remove('visible-element');
      this.element.classList.remove('scroll-element');
    }, 2000);
  }

  last() {
    scrollContainer.elements.forEach(element => {
      element.classList = "";
    })
    document.querySelector('main').classList.remove('scroll-container');
    window.removeEventListener('scroll', () => scrollContainer.scrollEffect());
  }
}

class Next {
  constructor(element) {
    this.element = element;
  }

  scroll() {
    this.element.classList.add('visible-element');
    this.element.style.transition = 'top 1.5s ease';
    scrollContainer.visibleElement = this.element;

    window.removeEventListener('scroll', () => scrollContainer.scrollEffect());
    setTimeout(() => scrollContainer.docBody.style.overflow = 'scroll', 2000);
  }
}

const scrollContainer = new Scroller(document.querySelector('.scroll-container'));












// trying new theories, commented and saved in case any part is needed later

// document.querySelector('main').style.marginTop = "30vw";
// logo.classList.add('fade-up');
// if(Array.from(logo.classList).includes('fade-down')) {
//   logo.classList.remove('fade-down');
// }

// return (() => {
//   if(window.scrollY < 1) {
//     logo.classList.add('fade-down');
//     logo.classList.remove('fade-up');
//     overlays[0].classList.add('slide-up')
//   }

//   if(window.scrollY < 60) {
//     slogan.style.opacity = '1';
//     slogan.style.transition = 'opacity 1s ease-out'
//   } else {
//     slogan.style.opacity = '0'
//   }
// })();
