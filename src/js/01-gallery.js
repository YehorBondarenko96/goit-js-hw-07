import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const list = [];
galleryItems.forEach((galleryItem) => {
    const item = `<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
    />
    </a>
</li>`
    list.push(item);
});

gallery.insertAdjacentHTML('afterbegin', list.join(''));

console.log(galleryItems);

gallery.addEventListener('click', (event) => {
    event.preventDefault();
})
