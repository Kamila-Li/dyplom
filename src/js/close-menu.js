document.addEventListener('DOMContentLoaded', function () {
  const closeButton = document.querySelector('.close-button-mobile-menu');
  const burgerMenuButton = document.querySelector('.header-burger-btn');
  const overlayMenu = document.querySelector('.overlay-container-mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-menu-menu-links a');
  const shopNowButton = document.querySelector('.mobile-menu-shop-now-button');
  const headerShopNowButton = document.querySelector('.header-menu-btn');

  closeButton.addEventListener('click', () => {
    overlayMenu.classList.remove('is-open');
  });

  burgerMenuButton.addEventListener('click', () => {
    overlayMenu.classList.add('is-open');
  });

  overlayMenu.addEventListener('click', event => {
    if (event.target === overlayMenu) {
      overlayMenu.classList.remove('is-open');
    }
  });

  const scrollToOrderSection = () => {
    const orderSection = document.querySelector('#order');
    orderSection.scrollIntoView({ behavior: 'smooth' });
    overlayMenu.classList.remove('is-open');
  };

  shopNowButton.addEventListener('click', scrollToOrderSection);
  headerShopNowButton.addEventListener('click', scrollToOrderSection);

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      overlayMenu.classList.remove('is-open');
    });
  });
});
