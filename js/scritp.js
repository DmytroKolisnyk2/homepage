document.querySelector('#english').addEventListener('click', () => alert('please don`t ask me about that'));
document.querySelector('#polish').addEventListener('click', () => alert('this one is even worse than English'));
console.log(basicLightbox)
const bulka = basicLightbox.create(`
<div id="modal-bulka">
      <h2 class="bulka__caption">Don't worry Bulka is still here</h2>
      <img class="bulka__img" src="./assets/bulka.jpg" alt="BULKA should be always with you locally, as a pet" />
    </div>
`);
document.querySelector('.contact-info__avatar').addEventListener('click', bulka.show);