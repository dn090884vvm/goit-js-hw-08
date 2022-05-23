// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImegaesCardsMarkup(galleryItems);

function createImegaesCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

const modalWin = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
