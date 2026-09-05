// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

// Header scroll effect
const header = document.querySelector('.site-header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Services tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const serviceData = {
  video: {
    image: 'https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tagline: 'Moving images with a point of view.',
    what: 'Film, campaign films, brand films, documentaries, and social motion. We treat video as a craft — not a content quota.',
    why: 'A still can introduce you. A film can make someone stay. Video is how a brand becomes a feeling people remember after they leave the room.',
    delivers: ['Brand and campaign films', 'Documentary and reportage', 'Social and short-form motion', 'Direction, production, and post'],
  },
  design: {
    image: 'https://images.pexels.com/photos/8546649/pexels-photo-8546649.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tagline: 'Form that carries meaning.',
    what: 'Visual systems, editorial design, packaging, and digital interfaces. Design at Pakworx is not decoration — it is how an idea becomes visible.',
    why: 'People decide how they feel about you before they read a word. Design is that first sentence — and every one after it.',
    delivers: ['Art direction and visual systems', 'Editorial and print', 'Packaging and object design', 'Digital product and web design'],
  },
  branding: {
    image: '/images/brand-system.jpg',
    tagline: 'Identity with a spine.',
    what: 'Names, marks, verbal identity, and the systems that hold a brand together over years — not a logo dropped into a template.',
    why: 'A brand is the only asset that compounds when the campaign ends. Built well, it becomes the reason people choose you twice.',
    delivers: ['Positioning and narrative', 'Naming and verbal identity', 'Marks, type, and color systems', 'Brand books and launch kits'],
  },
  digital: {
    image: '/images/card-design.jpg',
    tagline: 'Experiences that feel considered.',
    what: 'Websites, product surfaces, and digital campaigns. We build digital that behaves like a well-made object — quiet, precise, and hard to leave.',
    why: 'Most digital is loud and forgettable. The work that lasts is the work that respects attention.',
    delivers: ['Websites and microsites', 'Campaign platforms', 'Product and interface design', 'Front-end craft'],
  },
  content: {
    image: '/images/social-campaign.jpg',
    tagline: 'A voice, not a feed.',
    what: 'Ongoing content systems for brands that want a point of view. Photography, social, editorial, and the calendar that holds it together.',
    why: 'Content without a spine is just noise. A system with taste becomes the brand people return to.',
    delivers: ['Content strategy and voice', 'Photography and social systems', 'Editorial series', 'Production rhythms'],
  },
  growth: {
    image: 'https://images.pexels.com/photos/8360497/pexels-photo-8360497.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tagline: 'Attention, then traction.',
    what: 'Media thinking, launch strategy, and the work that sits between a beautiful idea and an audience that actually sees it.',
    why: 'Craft without reach is a private exercise. Growth without craft is a race to the bottom. We hold both.',
    delivers: ['Launch and campaign strategy', 'Channel thinking', 'Creative media concepts', 'Performance-aware storytelling'],
  },
};

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.tab;
    const data = serviceData[tab];

    if (data) {
      const image = document.querySelector('.service-image');
      const tagline = document.querySelector('.service-tagline');
      const columns = document.querySelectorAll('.service-text');
      const delivers = document.querySelector('.service-deliverables ul');

      if (image) image.src = data.image;
      if (tagline) tagline.textContent = data.tagline;
      if (columns[0]) columns[0].textContent = data.what;
      if (columns[1]) columns[1].textContent = data.why;
      if (delivers) {
        delivers.innerHTML = data.delivers
          .map((item) => `<li>${item}</li>`)
          .join('');
      }
    }
  });
});

// Blog filters
const filterBtns = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    blogCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Reveal on scroll
const revealElements = document.querySelectorAll('section, article');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 },
);

revealElements.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});
