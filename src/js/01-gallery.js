// Add imports above this line

import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryMarkup = handelGalleryMarkup(galleryItems);

function handelGalleryMarkup(items) {
return items
.map(
(item) =>
<div class="gallery__item"> <a class="gallery__item" href="${item.original}"> <img class="gallery__image" src="${item.preview}" alt="${item.description}" /> </a> </div>
)
.join('');
}

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', handelGalleryClick);

function handelGalleryClick(event) {
event.preventDefault();

if (event.target.nodeName !== 'IMG') {
return;
}

const lightbox = new SimpleLightbox('.gallery a', {
captionSelector: 'img',
captionsData: 'alt',
captionPosition: 'bottom',
captionDelay: 250,
scrollZoom: false,
});

lightbox.open();

const modalImg = event.target.dataset.source;

const modalImgShow = basicLightbox.create(
<img src="${modalImg}" width="800" height="600">
);

modalImgShow.show();
}
