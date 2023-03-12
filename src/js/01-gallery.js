// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryMarkup = handelGalleryMarkup(galleryItems);

function handelGalleryMarkup(items) {
    return items.map(item => 
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" 
          data-source="${item.original}" alt="${item.alt}">
        </a>
      </div>`
    )
    .join('');

}

var lightbox = new SimpleLightbox (".gallery a", {
     captionSelector: 'img',
     captionsData: 'alt',
     captionPosition: 'bottom',
     captionDelay: 250,
     scrollZoom: false,
    });


