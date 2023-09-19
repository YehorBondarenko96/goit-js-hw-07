import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const list = [];
galleryItems.forEach((galleryItem) => {
    const item = `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
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

    if (event.target.tagName !== 'IMG') {
        return;
    }
    const urlBig = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${urlBig}" width="800" height="600">
`)

    instance.show();

    document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && instance) {
        instance.close();
    };
});
});


    

