document.addEventListener('DOMContentLoaded', function () {
  const modalPrivacy = document.querySelector('#privacy');
  const openModalButton = document.querySelector('.footer-privacy-policy');
  const closeModalButton = document.querySelector('.btn-privacy-policy');

  const openModal = () => {
    modalPrivacy.classList.add('is-open');
  };

  const closeModal = () => {
    modalPrivacy.classList.remove('is-open');
  };

  modalPrivacy.addEventListener('click', event => {
    if (event.target === modalPrivacy) {
      modalPrivacy.classList.remove('is-open');
    }
  });

  openModalButton.addEventListener('click', event => {
    event.preventDefault();
    openModal();
  });

  closeModalButton.addEventListener('click', closeModal);
});
