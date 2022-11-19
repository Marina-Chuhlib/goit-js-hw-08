// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryMarkup = ({ original, preview, description }) => {
  return `<li><a class="gallery__item" href= '${original}' "large-image.jpg">
    <img class="gallery__image" src= '${preview}' "small-image.jpg" alt= '${description}'"Image description" />
  </a></li>`;
};

const refs = {
  gallery: document.querySelector('.gallery'),
};

const pictures = galleryItems.map(galleryMarkup).join('');
refs.gallery.insertAdjacentHTML('beforeend', pictures);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
