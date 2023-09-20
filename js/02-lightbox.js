import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const list = [];
galleryItems.forEach((galleryItem) => {
    const item = `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
    </a>
</li>`
    list.push(item);
});

gallery.insertAdjacentHTML('afterbegin', list.join(''));

console.log(galleryItems);

const options = {
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    close: false, 
};
const lightbox = new SimpleLightbox('.gallery a',  options );