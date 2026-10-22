document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '×' : '☰';
    });
  }
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
  const form = document.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const fields = [
        ['Full name', data.get('name')],
        ['Phone', data.get('phone')],
        ['Email', data.get('email')],
        ['Preferred city/location', data.get('city')],
        ['Investment budget', data.get('budget') || 'Not specified'],
        ['Experience', data.get('experience') || 'Not specified'],
        ['Message', data.get('message') || 'Not provided']
      ];
      const body = fields.map(([label, value]) => label + ': ' + value).join('\n');
      const subject = encodeURIComponent('Healthy Hippo Franchise Enquiry — ' + data.get('name'));
      const mailBody = encodeURIComponent(body + '\n\nConsent to be contacted: Yes');
      document.getElementById('form-status').textContent = 'Opening your email app with the enquiry details. Please review and press Send to submit it.';
      window.location.href = 'mailto:healthyhippo.kochi@gmail.com?subject=' + subject + '&body=' + mailBody;
    });
  }
  // HEALTHY HIPPO SLIDESHOW — ADD NEW PHOTOS IN THIS LIST ONLY.
  // 1) Put the image file inside the assets folder.
  // 2) Add a new line: { src: 'assets/your-photo.jpg', alt: 'Short photo description' },
  // 3) Save and redeploy the website. Numbering the files is optional.
  const PHOTO_LIST = [
    { src: 'assets/celebrity-01.jpg', alt: 'Healthy Hippo community photo' },
    { src: 'assets/celebrity-02.jpg', alt: 'Healthy Hippo food packaging photo' },
    { src: 'assets/celebrity-03.jpg', alt: 'Healthy Hippo community photo' },
    { src: 'assets/celebrity-04.jpg', alt: 'Healthy Hippo customer with branded packaging' },
    { src: 'assets/celebrity-05.jpg', alt: 'Healthy Hippo customer holding a branded bag' },
    { src: 'assets/celebrity-06.jpg', alt: 'Healthy Hippo community photo' },
    { src: 'assets/celebrity-07.jpg', alt: 'Healthy Hippo community photo' },
    { src: 'assets/celebrity-08.jpg', alt: 'Healthy Hippo community photo' },
  ];

  const carousel = document.querySelector('.celebrity-carousel');
  if (carousel && PHOTO_LIST.length) {
    const dotsContainer = carousel.querySelector('.slide-dots');
    const previousButton = carousel.querySelector('.slide-prev');
    const nextButton = carousel.querySelector('.slide-next');
    const slides = PHOTO_LIST.map((photo, index) => {
      const img = document.createElement('img');
      img.className = 'celebrity-slide' + (index === 0 ? ' active' : '');
      img.src = photo.src;
      img.alt = photo.alt;
      if (index === 0) img.fetchPriority = 'high';
      carousel.insertBefore(img, dotsContainer);
      return img;
    });
    const dots = PHOTO_LIST.map((photo, index) => {
      const dot = document.createElement('button');
      dot.className = 'slide-dot' + (index === 0 ? ' active' : '');
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Show photo ' + (index + 1));
      dotsContainer.appendChild(dot);
      return dot;
    });

    let current = 0;
    let timer;
    const showSlide = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    };
    const restart = () => {
      clearInterval(timer);
      timer = setInterval(() => showSlide(current + 1), 4000);
    };
    previousButton?.addEventListener('click', () => { showSlide(current - 1); restart(); });
    nextButton?.addEventListener('click', () => { showSlide(current + 1); restart(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); restart(); }));
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', restart);
    restart();
  }
});
