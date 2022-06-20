
  const toggleMenu = document.querySelector('#toggle-menu');
  const closeBtn = document.querySelector('#close-btn');
  const menuItems = document.querySelectorAll('.menu-item');
  // for-top-nav
  function openNav() {
    document.querySelector('.mobile-menu').classList.add('active');
    toggleMenu.classList.add('invisible');
    document.body.style.overflowY = 'hidden';
  }
  
  toggleMenu.addEventListener('click', openNav);
  
  function closeNav() {
    document.querySelector('.mobile-menu').classList.remove('active');
    toggleMenu.classList.remove('invisible');
    document.body.style.overflowY = 'auto';
  }
  
  closeBtn.addEventListener('click', closeNav);
  
  menuItems.forEach((item) => {
    item.addEventListener('click', closeNav);
  });
//  Speakers
const speakers = [
    {
      name: 'Mr Salas.',
      title: 'Popular polyglot from Mexico.',
      image: 'mr-salas.jpg',
      bio: 'Youtuber and teacher, polyglot from Mexico.',
    },
    {
      name: 'Luca Lampariello',
      title: 'Popular polyglot from Italy',
      image: 'luca-lampariello.jpg',
      bio: 'Youtube and teacher, polyglot from Italy',
    },
    {
      name: 'Ikenna',
      title: 'Popular polyglot from United States',
      image: 'ikenna-image.jpg',
      bio: 'Youtuber and teacher, polyglot from United States',
    },
    {
      name: 'Lindie Botes',
      title: 'Popular polyglot from South Africa',
      image: 'lindie-botes.jpg',
      bio: 'Youtuber and teacher, polyglot from South Africa.',
    },
  ];
  
  const speakersPlaceHolder = document.querySelector('#speakers .persons');
  
  speakers.forEach((speaker, index) => {
    speakersPlaceHolder.innerHTML += `
    <div class="person ${index > 1 ? 'mobile-hide' : ''}">
      <div class="person-graphic">
        <img src="./IMG/${speaker.image}" alt="" />
      </div>
      <div class="person-info">
        <h4 class="person-name">${speaker.name}</h4>
        <p class="person-title"><em>${speaker.title}</em></p>
        <p class="person-bio">${speaker.bio}</p>
      </div>
    </div>
    `;
  });
  
  // More Speakers button
  const moreSpeakerButton = document.getElementById('toggle-more-speakers');
  moreSpeakerButton.addEventListener(
    'click',
    (event) => {
      event.preventDefault();
      document.querySelectorAll('.mobile-hide').forEach((el) => {
        el.classList.toggle('mobile-hide');
      });
      moreSpeakerButton.style.display = 'none';
    },
  );


