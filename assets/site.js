const modalBreakPoint = '650';

// Main modal object
const modal = {

  /**
   * init - Initializes the modal.
   *
   * @returns {modal} returns this.
   */
  init() {
    this.$ctn = document.getElementById('main-modal');
    this.$window = this.$ctn.querySelector('.modal__window');
    this.hidden = true;
    const $closeBtn = document.createElement('a');
    $closeBtn.classList.add('link-btn');
    $closeBtn.textContent = 'Close';
    $closeBtn.style.textAlign = 'center';
    $closeBtn.addEventListener('click', this.hide.bind(this));
    this.$window.append($closeBtn);
    this.$closeBtn = $closeBtn;
    this.$ctn.addEventListener('click', (e) => {
      if (e.target === this.$ctn) this.hide();
    });
    return this;
  },

  /**
   * removeContent - Removes the currently displayed content
   *
   */
  removeContent() {
    if (this.$window.$content) {
      if (this.$window.$content.prevParent) {
        this.$window.$content.prevParent.appendChild(this.$window.$content);
      } else this.$window.removeChild(this.$window.$content);
      this.$window.$content = null;
    }
  },

  /**
   * display - Displays the given HTML Element.
   *
   * @param {HTML Element} $content The content to display.
   *
   */
  display($content) {
    this.removeContent();
    this.$window.$content = $content;
    if (this.$window.$content.parentNode) this.$window.$content.prevParent = $content.parentNode;
    this.$window.insertBefore($content, this.$closeBtn);
    this.$ctn.style.display = 'flex';
    this.hidden = false;
  },

  /**
   * hide - Hides the modal.
   *
   */
  hide() {
    this.removeContent();
    this.$ctn.style.display = 'none';
    this.hidden = true;
  },
};

// An experience hover-card.
// Maps the "More Info" button to display additional info properly (in modal or popup)
const experienceCard = {
  init($ctn) {
    this.$ctn = $ctn;
    this.$overlay = this.$ctn.querySelector('.experience__hover-card__overlay');
    this.$description = this.$overlay.querySelector('.experience__hover-card__overlay__inner');
    this.$infoBtn = this.$ctn.querySelector('.experience__more-info');
    this.$infoBtn.addEventListener('click', this.toggleDisplay.bind(this));
    return this;
  },

  /**
   * toggleDisplay - Displays or hides additional information
   *
   */
  toggleDisplay() {
    if (window.innerWidth <= modalBreakPoint) {
      if (modal.hidden) {
        modal.display(this.$description);
      } else {
        modal.hide();
      }
      this.$overlay.style.top = '100%';
      this.$infoBtn.textContent = 'More Info';
      return;
    }
    if (this.$overlay.style.top === '100%' || this.$overlay.style.top === '') {
      this.$overlay.style.top = '0';
      this.$infoBtn.textContent = 'Close Info';
    } else {
      this.$overlay.style.top = '100%';
      this.$infoBtn.textContent = 'More Info';
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  modal.init();
  const rawExperienceCards = Array.from(document.querySelectorAll('.experience__hover-card'));
  const experienceCards = rawExperienceCards.map(($cardCtn) => {
    const card = Object.create(experienceCard);
    card.init($cardCtn);
    return card;
  });
  window.experienceCards = experienceCards;
  window.modal = modal;
});
